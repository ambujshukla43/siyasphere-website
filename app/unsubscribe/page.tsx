import { Suspense } from 'react';

async function UnsubscribePage({
  searchParams,
}: {
  searchParams: Promise<{ email?: string }>;
}) {
  const params = await searchParams;
  const email = params.email || '';

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-gray-900 border border-gray-800 rounded-xl p-8 shadow-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-[#7FC6C4]/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-6 h-6 text-[#7FC6C4]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-100 mb-2">Unsubscribe</h1>
          <p className="text-gray-400 text-sm">
            We&apos;re sorry to see you go. You can unsubscribe below.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {/* Email Display */}
          {email && (
            <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                Unsubscribing
              </p>
              <p className="text-gray-200 font-medium break-all">{email}</p>
            </div>
          )}

          {/* Message */}
          <div className="bg-amber-900/20 border border-amber-800/30 rounded-lg p-4">
            <p className="text-sm text-amber-100">
              We&apos;ve processed your unsubscribe request. You should no longer
              receive marketing emails from us within 24 hours. You may still
              receive transactional emails (like appointment confirmations) if
              you have an active engagement with SiyaSphere.
            </p>
          </div>

          {/* Feedback */}
          <div className="border-t border-gray-800 pt-6">
            <p className="text-sm text-gray-400 mb-4">
              We&apos;d love to know why you&apos;re unsubscribing. Your feedback helps
              us improve:
            </p>
            <button className="w-full px-4 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 rounded-lg text-gray-100 text-sm font-medium transition-colors">
              Send Feedback
            </button>
          </div>

          {/* Help Links */}
          <div className="border-t border-gray-800 pt-6 space-y-2">
            <p className="text-xs text-gray-500 uppercase tracking-wider">
              Need Help?
            </p>
            <div className="space-y-2">
              <a
                href="https://siyasphere.in/contact"
                className="block text-sm text-[#7FC6C4] hover:text-[#7FC6C4]/80 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="https://siyasphere.in/privacy"
                className="block text-sm text-[#7FC6C4] hover:text-[#7FC6C4]/80 transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 pt-6 border-t border-gray-800 text-center">
          <p className="text-xs text-gray-500">
            SiyaSphere • contact@siyasphere.in •{' '}
            <a
              href="https://siyasphere.in"
              className="text-[#7FC6C4] hover:text-[#7FC6C4]/80 transition-colors"
            >
              www.siyasphere.in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default UnsubscribePage;

export async function generateMetadata() {
  return {
    title: 'Unsubscribe - SiyaSphere',
    description: 'Manage your email preferences with SiyaSphere',
    robots: 'noindex, nofollow',
  };
}
