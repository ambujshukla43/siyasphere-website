import Link from "next/link";

export const metadata = {
  title: "Terms of Service | SiyaSphere",
  description: "Terms of Service for SiyaSphere - Review our terms and conditions.",
};

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Hero */}
      <section className="container-custom section-padding bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Terms of Service
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
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the SiyaSphere website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
              <p>
                Permission is granted to temporarily download one copy of the materials (information or software) on SiyaSphere's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Conduct any systematic or automated data collection</li>
                <li>Engage in any form of harassment or abuse</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">3. Disclaimer</h2>
              <p>
                The materials on SiyaSphere's website are provided on an 'as is' basis. SiyaSphere makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
              <p className="mt-3">
                Further, SiyaSphere does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">4. Limitations of Liability</h2>
              <p>
                In no event shall SiyaSphere or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on SiyaSphere's website, even if SiyaSphere or an authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">5. Accuracy of Materials</h2>
              <p>
                The materials appearing on SiyaSphere's website could include technical, typographical, or photographic errors. SiyaSphere does not warrant that any of the materials on its website are accurate, complete, or current.
              </p>
              <p className="mt-3">
                SiyaSphere may make changes to the materials contained on its website at any time without notice.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">6. Links</h2>
              <p>
                SiyaSphere has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by SiyaSphere of the site. Use of any such linked website is at the user's own risk.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">7. Modifications</h2>
              <p>
                SiyaSphere may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">8. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of the United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">9. User Responsibilities</h2>
              <p>
                You agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide accurate and complete information when requested</li>
                <li>Maintain the confidentiality of any account credentials</li>
                <li>Not use our services for any unlawful purposes</li>
                <li>Not interfere with or disrupt the services or servers</li>
                <li>Respect the intellectual property rights of SiyaSphere and third parties</li>
                <li>Not engage in any form of harassment, abuse, or discrimination</li>
              </ul>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">10. Service Availability</h2>
              <p>
                SiyaSphere makes no guarantee regarding the availability, performance, or reliability of its website or services. We reserve the right to modify, suspend, or discontinue services with or without notice.
              </p>
            </div>

            {/* Section 11 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">11. Intellectual Property Rights</h2>
              <p>
                All content on our website, including text, graphics, logos, images, and software, is the property of SiyaSphere or its content suppliers and is protected by international copyright laws.
              </p>
            </div>

            {/* Section 12 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">12. Third-Party Services</h2>
              <p>
                Our website may integrate with third-party services and platforms. Your use of these services is subject to their respective terms and conditions. SiyaSphere is not responsible for third-party services or their operations.
              </p>
            </div>

            {/* Section 13 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">13. Limitation of Warranties</h2>
              <p>
                To the fullest extent permitted by applicable law, SiyaSphere disclaims all warranties, express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
              </p>
            </div>

            {/* Section 14 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">14. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless SiyaSphere and its officers, directors, employees, and agents from any and all claims, damages, losses, costs, and expenses arising out of your use of the website or violation of these terms.
              </p>
            </div>

            {/* Section 15 */}
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">15. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-gray-900 rounded-lg border border-gray-800">
                <p><strong>Email:</strong> siyasphere15@gmail.com</p>
                <p className="mt-2">
                  We will respond to your inquiry within 30 days of receipt.
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
