import React from 'react';

const TermsPage = () => {
    return (
       <div className="min-h-screen bg-base-100 py-10">
      <div className="max-w-7xl mx-auto p-8 bg-base-200 rounded-xl shadow-xl border border-base-300">
        <h1 className="text-3xl font-extrabold mb-4">Terms & Conditions</h1>

        <p className="text-sm text-neutral/80 mb-4">
          Welcome to ElectroNexus. These Terms and Conditions govern your use of our website.
          By accessing or using ElectroNexus, you agree to be bound by these terms.
        </p>

        <div className="space-y-4 text-sm">
          <div>
            <h2 className="text-xl font-semibold mb-2">1. Use of the Website</h2>
            <p>
              You must be at least 18 years old to use this website. You agree to use the site only
              for lawful purposes and in a way that does not violate the rights of others.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">2. User Accounts</h2>
            <p>
              Some features may require you to create an account. You are responsible for maintaining
              the confidentiality of your login details and for all activities that occur under your account.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">3. Product Information</h2>
            <p>
              Product details, prices, and availability are subject to change without notice.
              We try to ensure accuracy, but we do not guarantee it.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">4. Intellectual Property</h2>
            <p>
              All content on this website including logos, images, and text is the property of ElectroNexus
              or its partners. You may not copy or use them without permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">5. Limitation of Liability</h2>
            <p>
              ElectroNexus is not liable for any direct or indirect damages resulting from the use of the website.
              Use the site at your own risk.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">6. Changes to Terms</h2>
            <p>
              We may update these terms at any time. Continued use of the site means you accept the changes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">7. Contact</h2>
            <p>
              If you have any questions about these terms, you can contact us at:
              <br />
              <span className="font-bold">support@electronexus.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default TermsPage;