import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Validation utilities
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhone = (phone: string): boolean => {
  if (!phone) return true; // Phone is optional
  const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

const validateName = (name: string): boolean => {
  if (!name) return true; // Name is optional
  return name.length >= 2 && name.length <= 100;
};

const validateCompany = (company: string): boolean => {
  if (!company) return true; // Company is optional
  return company.length >= 2 && company.length <= 100;
};

// Check for spam patterns
const isSpamContent = (text: string): boolean => {
  const spamPatterns = [
    /viagra|cialis|casino|poker/gi,
    /bitcoin|crypto|nft/gi,
    /http[s]?:\/\/[^\s]{50,}/gi, // Very long URLs
    /(?:https?:\/\/){2,}/gi, // Multiple URLs
  ];

  return spamPatterns.some(pattern => pattern.test(text));
};

// Rate limiting map (simple in-memory store)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

const checkRateLimit = (identifier: string, limit: number = 5, windowMs: number = 3600000): boolean => {
  const now = Date.now();
  const record = rateLimitMap.get(identifier);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(identifier, { count: 1, resetTime: now + windowMs });
    return true;
  }

  if (record.count >= limit) {
    return false;
  }

  record.count++;
  return true;
};

interface ContactFormData {
  email: string;
  name?: string;
  company?: string;
  phone?: string;
  website?: string; // Honeypot field
}

export async function POST(request: NextRequest) {
  try {
    const body: ContactFormData = await request.json();

    // Get client IP for rate limiting
    const clientIp =
      request.headers.get('x-forwarded-for')?.split(',')[0] ||
      request.headers.get('x-real-ip') ||
      'unknown';

    // ====== HONEYPOT CHECK ======
    if (body.website && body.website.length > 0) {
      // Honeypot field should be empty - likely a bot
      console.warn(`[SPAM] Honeypot triggered from IP: ${clientIp}`);
      return NextResponse.json(
        { error: 'Invalid submission' },
        { status: 400 }
      );
    }

    // ====== RATE LIMITING ======
    if (!checkRateLimit(clientIp)) {
      console.warn(`[SPAM] Rate limit exceeded for IP: ${clientIp}`);
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // ====== EMAIL VALIDATION ======
    if (!body.email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    if (!validateEmail(body.email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Check for disposable email domains
    const disposableDomains = ['tempmail', 'guerrillamail', '10minutemail', 'mailinator'];
    const emailDomain = body.email.split('@')[1].toLowerCase();
    if (disposableDomains.some(domain => emailDomain.includes(domain))) {
      console.warn(`[SPAM] Disposable email: ${body.email}`);
      return NextResponse.json(
        { error: 'Please use a business email address' },
        { status: 400 }
      );
    }

    // ====== NAME VALIDATION ======
    if (!validateName(body.name || '')) {
      return NextResponse.json(
        { error: 'Name must be between 2 and 100 characters' },
        { status: 400 }
      );
    }

    // ====== COMPANY VALIDATION ======
    if (!validateCompany(body.company || '')) {
      return NextResponse.json(
        { error: 'Company name must be between 2 and 100 characters' },
        { status: 400 }
      );
    }

    // ====== PHONE VALIDATION ======
    if (!validatePhone(body.phone || '')) {
      return NextResponse.json(
        { error: 'Please provide a valid phone number' },
        { status: 400 }
      );
    }

    // ====== SPAM CONTENT CHECK ======
    const contentToCheck = `${body.name} ${body.company} ${body.email}`;
    if (isSpamContent(contentToCheck)) {
      console.warn(`[SPAM] Spam content detected from IP: ${clientIp}`);
      return NextResponse.json(
        { error: 'Invalid submission' },
        { status: 400 }
      );
    }

    // ====== EMAIL SENDING (Resend Integration) ======
    try {
      // Send email to admin
      const adminEmail = await resend.emails.send({
        from: 'GTM Audit <onboarding@resend.dev>',
        to: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'siyasphere15@gmail.com',
        subject: `New GTM Audit Request from ${body.name || 'Prospect'}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #7FC6C4; border-bottom: 2px solid #7FC6C4; padding-bottom: 10px;">
              🎯 New GTM Audit Request
            </h2>
            
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${body.name || 'Not provided'}</p>
              <p><strong>Email:</strong> <a href="mailto:${body.email}">${body.email}</a></p>
              <p><strong>Company:</strong> ${body.company || 'Not provided'}</p>
              <p><strong>Phone:</strong> ${body.phone || 'Not provided'}</p>
            </div>
            
            <div style="margin: 20px 0;">
              <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
              <p><strong>IP Address:</strong> ${clientIp}</p>
            </div>
            
            <div style="background-color: #f0f8ff; padding: 15px; border-left: 4px solid #7FC6C4; border-radius: 4px; margin-top: 20px;">
              <p style="margin: 0;">
                <strong>Next Steps:</strong> Review this prospect and reach out within 24 hours to schedule the GTM audit.
              </p>
            </div>
            
            <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;" />
            <p style="color: #999; font-size: 12px; text-align: center;">
              This is an automated email from SiyaSphere Contact Form
            </p>
          </div>
        `,
        replyTo: body.email,
      });

      // Send confirmation email to user
      const userEmail = await resend.emails.send({
        from: 'SiyaSphere <onboarding@resend.dev>',
        to: body.email,
        subject: '✅ We received your GTM Audit Request',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #7FC6C4;">Thank you for your interest, ${body.name || 'there'}!</h2>
            
            <p style="font-size: 16px; color: #333;">
              We've received your request for a GTM audit. Our team will carefully review your information and reach out within <strong>24 hours</strong> to schedule your consultation.
            </p>
            
            <div style="background-color: #f5f5f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0;"><strong>📋 What to Expect:</strong></p>
              <ul style="margin: 10px 0; padding-left: 20px;">
                <li>30-minute discovery call to understand your GTM challenges</li>
                <li>Comprehensive analysis of your tech stack and processes</li>
                <li>Actionable recommendations with a prioritized roadmap</li>
              </ul>
            </div>
            
            <p style="margin: 20px 0;">
              In the meantime, feel free to explore our case studies to see how we've helped other companies:
            </p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://siyasphere.com/case-studies" style="background-color: #7FC6C4; color: white; padding: 12px 30px; text-decoration: none; border-radius: 6px; font-weight: bold; display: inline-block;">
                View Case Studies
              </a>
            </div>
            
            <p style="color: #666; margin-top: 30px;">
              Have questions? Reply to this email and we'll get back to you right away.
            </p>
            
            <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;" />
            <p style="color: #999; font-size: 12px; text-align: center;">
              Best regards,<br/>
              <strong>SiyaSphere Team</strong>
            </p>
          </div>
        `,
      });

      // Check if at least one email was sent successfully
      const adminSuccess = adminEmail.data?.id && !adminEmail.error;
      const userSuccess = userEmail.data?.id && !userEmail.error;

      // Log results
      console.log('📧 Email sending results:', {
        adminEmail: { id: adminEmail.data?.id, error: adminEmail.error },
        userEmail: { id: userEmail.data?.id, error: userEmail.error },
        submission: {
          email: body.email,
          name: body.name,
          company: body.company,
          phone: body.phone,
          timestamp: new Date().toISOString(),
          ip: clientIp,
        },
      });

      // If both emails failed, return error
      if (!adminSuccess && !userSuccess) {
        console.error('❌ Both emails failed to send');
        return NextResponse.json(
          { error: 'Submission failed. Please try again.' },
          { status: 500 }
        );
      }

      // If at least one email succeeded, consider it successful
      // (admin email is most critical, but user confirmation is nice-to-have)
      return NextResponse.json(
        {
          success: true,
          message: adminSuccess 
            ? 'Your request has been submitted successfully. Check your email for confirmation.'
            : 'Your request has been submitted. We will contact you soon.',
        },
        { status: 200 }
      );
    } catch (emailError) {
      console.error('Email service error:', emailError);
      // Still return success since the form data was validated
      return NextResponse.json(
        {
          success: true,
          message: 'Your request has been submitted. We will contact you soon.',
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error('Contact form error:', error);

    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: 'Invalid request format' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: 'An error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}

// Health check endpoint
export async function GET() {
  return NextResponse.json(
    { status: 'ok', message: 'Contact API is healthy' },
    { status: 200 }
  );
}
