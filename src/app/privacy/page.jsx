import React from 'react';

const PrivacyPage = () => {
    return (
          <div className="min-h-screen bg-base-100 py-10">
      <div className="max-w-7xl mx-auto p-8 bg-base-200 rounded-xl shadow-xl border border-base-300">
        <h1 className="text-3xl font-extrabold mb-4">Privacy Policy</h1>

        <p className="text-sm text-neutral/80 mb-4">
          At ElectroNexus, we respect your privacy. This Privacy Policy explains how we collect,
          use, and protect your personal information.
        </p>

        <div className="space-y-4 text-sm">
          <div>
            <h2 className="text-xl font-semibold mb-2">1. Information We Collect</h2>
            <p>
              We may collect personal information such as your name, email address, and contact details
              when you register or contact us.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">2. How We Use Information</h2>
            <p>
              We use your information to provide services, process requests, and improve our website.
              We may also send promotional emails if you opt-in.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">3. Cookies</h2>
            <p>
              We use cookies to enhance your browsing experience and to remember login sessions.
              You can disable cookies from your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">4. Data Security</h2>
            <p>
              We implement reasonable security measures to protect your data. However, no method of transmission
              over the internet is 100% secure.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">5. Third-Party Services</h2>
            <p>
              We may use third-party services like analytics tools. These services may collect data as described
              in their privacy policies.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">6. Changes to Policy</h2>
            <p>
              We may update this policy from time to time. We will notify users through the website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">7. Contact</h2>
            <p>
              If you have any questions, contact us at:
              <br />
              <span className="font-bold">support@electronexus.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default PrivacyPage;