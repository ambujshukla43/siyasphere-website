import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | SiyaSphere",
  description: "Privacy Policy for SiyaSphere - Learn how we protect your data.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero */}
      <section className="container-custom section-padding bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-lg">
            Last updated: January 13, 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="container-custom section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none space-y-8 text-gray-300">
            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
              <p>
                SiyaSphere ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
              <p>
                Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our website.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold text-white mb-3">2.1 Information You Provide Directly</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Email address when you request a GTM audit</li>
                <li>Name, company, phone number, and message when you contact us through forms</li>
                <li>Payment information if you purchase our services</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3 mt-4">2.2 Information Collected Automatically</h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Browser type and version</li>
                <li>IP address and location data</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website information</li>
                <li>Device type and operating system</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3 mt-4">2.3 Information from Third Parties</h3>
              <p>
                We may receive information about you from third-party sources to verify information or enhance our records.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Information</h2>
              <p>We use the information we collect for various purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>To provide and maintain our services</li>
                <li>To respond to your inquiries and requests</li>
                <li>To send marketing and promotional communications (with your consent)</li>
                <li>To improve our website and user experience</li>
                <li>To detect and prevent fraudulent transactions and other illegal activities</li>
                <li>To personalize and improve your experience</li>
                <li>To comply with legal obligations</li>
                <li>To analyze usage patterns and trends</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">4. How We Share Your Information</h2>
              <p>We may share your information in the following circumstances:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Service Providers:</strong> Third parties who assist in operating our website and conducting business</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>With Your Consent:</strong> When you explicitly agree to information sharing</li>
                <li><strong>Aggregated Data:</strong> We may share aggregated, non-identifiable information</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">6. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to enhance your experience. You can control cookie settings through your browser, but disabling cookies may affect website functionality.
              </p>
              <p className="mt-3">
                We use cookies for:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Authentication and session management</li>
                <li>Preferences and settings storage</li>
                <li>Analytics and performance monitoring</li>
                <li>Marketing and advertising purposes</li>
              </ul>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">7. Your Privacy Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Right to Access:</strong> Request a copy of your personal data</li>
                <li><strong>Right to Correction:</strong> Update or correct inaccurate information</li>
                <li><strong>Right to Deletion:</strong> Request deletion of your data</li>
                <li><strong>Right to Opt-Out:</strong> Unsubscribe from marketing communications</li>
                <li><strong>Right to Data Portability:</strong> Receive your data in a portable format</li>
              </ul>
              <p className="mt-3">
                To exercise these rights, please contact us at siyasphere15@gmail.com.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">8. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the privacy practices of external sites. Please review their privacy policies before providing personal information.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">9. Children's Privacy</h2>
              <p>
                Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child under 13, we will take steps to delete such information.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">10. International Data Transfers</h2>
              <p>
                Your information may be transferred to, stored in, and processed in countries other than your country of residence. These countries may have data protection laws that differ from your home country.
              </p>
            </div>

            {/* Section 11 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">11. Policy Changes</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on our website and updating the "Last updated" date. Your continued use of the website constitutes acceptance of the updated policy.
              </p>
            </div>

            {/* Section 12 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">12. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-gray-900 rounded-lg border border-gray-800">
                <p><strong>Email:</strong> siyasphere15@gmail.com</p>
                <p className="mt-2">
                  We will respond to your request within 30 days of receipt.
                </p>
              </div>
            </div>

            {/* Back to Home */}
            <div className="mt-12 pt-8 border-t border-gray-800">
              <Link
                href="/"
                className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 12H5m7 7l-7-7 7-7"
                  />
                </svg>
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
