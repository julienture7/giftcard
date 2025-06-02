import React from 'react';
import { Shield, Lock, Cookie, FileText, User, Mail, Calendar } from 'lucide-react';

const PrivacyPolicyPage: React.FC = () => {
  const lastUpdated = 'May 15, 2024';

  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      {/* Header Section */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
        <p className="text-xl text-day-300">
          Our commitment to your privacy and data protection
        </p>
        <div className="flex items-center justify-center mt-4 text-day-400">
          <Calendar className="h-4 w-4 mr-2" />
          <span>Last Updated: {lastUpdated}</span>
        </div>
      </div>

      {/* Introduction */}
      <section className="mb-12">
        <div className="bg-night-800 border border-night-600 rounded-xl p-6">
          <p className="text-day-300 mb-4">
            At KYCnot.me Gift Cards, we're committed to protecting your privacy. Our service was built on the principle that privacy is a fundamental human right, not a privilege. This Privacy Policy outlines our practices regarding the collection, use, and protection of your information.
          </p>
          <p className="text-day-300">
            <strong className="text-white">Our privacy philosophy is simple:</strong> We collect only the absolute minimum information necessary to provide our service, and we implement robust measures to protect that information. We believe you should be able to purchase gift cards without surveillance or unnecessary data collection.
          </p>
        </div>
      </section>

      {/* Information Collection Section */}
      <section className="mb-12">
        <div className="flex items-center mb-6">
          <Shield className="h-6 w-6 text-green-500 mr-3" />
          <h2 className="text-2xl font-bold text-white">Information We Collect</h2>
        </div>
        <div className="bg-night-800 border border-night-600 rounded-xl p-6">
          <p className="text-day-300 mb-4">
            We intentionally minimize the data we collect. Here's what we collect and why:
          </p>

          <h3 className="text-xl font-semibold text-white mt-6 mb-3">For Anonymous Purchases:</h3>
          <ul className="list-disc pl-6 text-day-300 space-y-2 mb-6">
            <li>
              <strong className="text-white">Cryptocurrency transaction details:</strong> We collect only the information necessary to process your payment, such as transaction IDs and wallet addresses used for the transaction.
            </li>
            <li>
              <strong className="text-white">Order information:</strong> We store details about what gift cards you purchased and in what denominations, solely for the purpose of fulfilling your order and providing customer support.
            </li>
            <li>
              <strong className="text-white">Temporary session data:</strong> We use temporary cookies to maintain your shopping session until your purchase is complete.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-white mt-6 mb-3">For Account Holders (Optional):</h3>
          <ul className="list-disc pl-6 text-day-300 space-y-2 mb-6">
            <li>
              <strong className="text-white">Email address:</strong> If you choose to create an account, we store your email address for authentication, order notifications, and communication about your purchases.
            </li>
            <li>
              <strong className="text-white">Order history:</strong> We maintain a record of your past orders to provide customer support and allow you to reference your purchase history.
            </li>
            <li>
              <strong className="text-white">Account preferences:</strong> Any preferences you set in your account, such as favorite gift cards or preferred payment methods.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-white mt-6 mb-3">Information We Do NOT Collect:</h3>
          <ul className="list-disc pl-6 text-day-300 space-y-2">
            <li>We do not collect your name, physical address, phone number, or any government-issued identification.</li>
            <li>We do not perform KYC (Know Your Customer) verification procedures.</li>
            <li>We do not collect your IP address for tracking purposes (though our server logs may temporarily record this for security and debugging purposes).</li>
            <li>We do not use third-party analytics tools that track your behavior across websites.</li>
            <li>We do not collect or store your credit card information or bank details.</li>
          </ul>
        </div>
      </section>

      {/* Data Usage Section */}
      <section className="mb-12">
        <div className="flex items-center mb-6">
          <FileText className="h-6 w-6 text-green-500 mr-3" />
          <h2 className="text-2xl font-bold text-white">How We Use Your Information</h2>
        </div>
        <div className="bg-night-800 border border-night-600 rounded-xl p-6">
          <p className="text-day-300 mb-4">
            We use the limited information we collect solely for the following purposes:
          </p>

          <ul className="list-disc pl-6 text-day-300 space-y-2 mb-6">
            <li>
              <strong className="text-white">Order fulfillment:</strong> To process your payment and deliver your gift cards.
            </li>
            <li>
              <strong className="text-white">Customer support:</strong> To assist you with any issues or questions related to your purchases.
            </li>
            <li>
              <strong className="text-white">Account management:</strong> To maintain your account if you choose to create one.
            </li>
            <li>
              <strong className="text-white">Service improvement:</strong> To identify and fix technical issues and improve our platform.
            </li>
            <li>
              <strong className="text-white">Security:</strong> To protect against fraud and unauthorized access to our systems.
            </li>
            <li>
              <strong className="text-white">Legal compliance:</strong> To comply with applicable laws and regulations.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-white mt-6 mb-3">Data Sharing and Third Parties:</h3>
          <p className="text-day-300 mb-4">
            We do not sell, rent, or trade your personal information with third parties. We may share limited data in the following circumstances:
          </p>

          <ul className="list-disc pl-6 text-day-300 space-y-2">
            <li>
              <strong className="text-white">Gift card providers:</strong> We share only the information necessary to fulfill your order with our gift card suppliers.
            </li>
            <li>
              <strong className="text-white">Payment processors:</strong> We use cryptocurrency payment processors to handle transactions, which receive only the information necessary to process your payment.
            </li>
            <li>
              <strong className="text-white">Legal requirements:</strong> We may disclose information if required by law, regulation, or legal process. However, we will challenge overly broad requests and notify users when legally permitted.
            </li>
          </ul>
        </div>
      </section>

      {/* Cookie Policy Section */}
      <section className="mb-12">
        <div className="flex items-center mb-6">
          <Cookie className="h-6 w-6 text-green-500 mr-3" />
          <h2 className="text-2xl font-bold text-white">Cookie Policy</h2>
        </div>
        <div className="bg-night-800 border border-night-600 rounded-xl p-6">
          <p className="text-day-300 mb-4">
            We use cookies minimally and only for essential purposes:
          </p>

          <h3 className="text-xl font-semibold text-white mt-4 mb-3">Essential Cookies:</h3>
          <ul className="list-disc pl-6 text-day-300 space-y-2 mb-6">
            <li>
              <strong className="text-white">Session cookies:</strong> These temporary cookies are necessary for the website to function properly. They enable core functionality such as shopping cart management and order processing. These cookies are deleted when you close your browser.
            </li>
            <li>
              <strong className="text-white">Authentication cookies:</strong> If you create an account, we use cookies to keep you logged in and secure your session.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-white mt-4 mb-3">What We Don't Use:</h3>
          <ul className="list-disc pl-6 text-day-300 space-y-2 mb-6">
            <li>
              <strong className="text-white">Tracking or analytics cookies:</strong> We do not use cookies to track your behavior across websites or to collect analytics data.
            </li>
            <li>
              <strong className="text-white">Advertising cookies:</strong> We do not use cookies for advertising purposes or to build user profiles.
            </li>
            <li>
              <strong className="text-white">Third-party cookies:</strong> We do not allow third parties to set cookies on our website.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-white mt-4 mb-3">Cookie Control:</h3>
          <p className="text-day-300">
            Most web browsers allow you to control cookies through their settings preferences. However, restricting cookies may impact the functionality of our website. Since we only use essential cookies, disabling them may prevent you from using key features of our service.
          </p>
        </div>
      </section>

      {/* Data Protection Section */}
      <section className="mb-12">
        <div className="flex items-center mb-6">
          <Lock className="h-6 w-6 text-green-500 mr-3" />
          <h2 className="text-2xl font-bold text-white">How We Protect Your Data</h2>
        </div>
        <div className="bg-night-800 border border-night-600 rounded-xl p-6">
          <p className="text-day-300 mb-4">
            We implement robust security measures to protect your information:
          </p>

          <ul className="list-disc pl-6 text-day-300 space-y-2 mb-6">
            <li>
              <strong className="text-white">Encryption:</strong> All data is encrypted both in transit (using TLS/SSL) and at rest using strong encryption standards.
            </li>
            <li>
              <strong className="text-white">Secure infrastructure:</strong> Our systems are hosted on secure, privacy-respecting infrastructure with strict access controls and regular security audits.
            </li>
            <li>
              <strong className="text-white">Minimal data retention:</strong> We purge transaction data after 90 days, keeping only what's necessary for legal compliance and customer support.
            </li>
            <li>
              <strong className="text-white">Regular security audits:</strong> We conduct regular security assessments and vulnerability testing.
            </li>
            <li>
              <strong className="text-white">Staff training:</strong> Our team is trained in privacy and security best practices.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-white mt-6 mb-3">Data Retention:</h3>
          <p className="text-day-300 mb-4">
            We retain your data only as long as necessary:
          </p>

          <ul className="list-disc pl-6 text-day-300 space-y-2">
            <li>
              <strong className="text-white">Transaction data:</strong> Purged after 90 days unless required for ongoing support or legal compliance.
            </li>
            <li>
              <strong className="text-white">Account information:</strong> Retained until you delete your account or request data removal.
            </li>
            <li>
              <strong className="text-white">Server logs:</strong> Automatically purged after 7 days.
            </li>
          </ul>
        </div>
      </section>

      {/* User Rights Section */}
      <section className="mb-12">
        <div className="flex items-center mb-6">
          <User className="h-6 w-6 text-green-500 mr-3" />
          <h2 className="text-2xl font-bold text-white">Your Rights</h2>
        </div>
        <div className="bg-night-800 border border-night-600 rounded-xl p-6">
          <p className="text-day-300 mb-4">
            We respect and uphold your data privacy rights:
          </p>

          <ul className="list-disc pl-6 text-day-300 space-y-2 mb-6">
            <li>
              <strong className="text-white">Right to access:</strong> You can request a copy of the personal data we hold about you.
            </li>
            <li>
              <strong className="text-white">Right to rectification:</strong> You can request that we correct any inaccurate information we hold.
            </li>
            <li>
              <strong className="text-white">Right to erasure:</strong> You can request that we delete your personal data (subject to legal requirements).
            </li>
            <li>
              <strong className="text-white">Right to restrict processing:</strong> You can request that we limit how we use your data.
            </li>
            <li>
              <strong className="text-white">Right to data portability:</strong> You can request a machine-readable copy of your data to transfer to another service.
            </li>
            <li>
              <strong className="text-white">Right to object:</strong> You can object to our processing of your data in certain circumstances.
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-white mt-6 mb-3">How to Exercise Your Rights:</h3>
          <p className="text-day-300">
            To exercise any of these rights, please contact us at privacy@kycnot.me. We will respond to your request within 30 days. For account holders, many of these rights can be exercised directly through your account settings.
          </p>
        </div>
      </section>

      {/* Children's Privacy */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Children's Privacy</h2>
        <div className="bg-night-800 border border-night-600 rounded-xl p-6">
          <p className="text-day-300">
            Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us immediately, and we will take steps to delete such information.
          </p>
        </div>
      </section>

      {/* International Data Transfers */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">International Data Transfers</h2>
        <div className="bg-night-800 border border-night-600 rounded-xl p-6">
          <p className="text-day-300 mb-4">
            We operate globally and may transfer your data to countries with different data protection laws. When we do so, we ensure appropriate safeguards are in place to protect your information and comply with applicable regulations.
          </p>
          <p className="text-day-300">
            We prioritize hosting in jurisdictions with strong privacy protections and use encryption and other technical measures to protect data in transit.
          </p>
        </div>
      </section>

      {/* Changes to Privacy Policy */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-white mb-6">Changes to This Privacy Policy</h2>
        <div className="bg-night-800 border border-night-600 rounded-xl p-6">
          <p className="text-day-300 mb-4">
            We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will post the revised policy on our website with an updated "Last Updated" date.
          </p>
          <p className="text-day-300">
            For significant changes, we will provide a more prominent notice, such as an email notification to account holders. We encourage you to review this Privacy Policy periodically.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="mb-12">
        <div className="flex items-center mb-6">
          <Mail className="h-6 w-6 text-green-500 mr-3" />
          <h2 className="text-2xl font-bold text-white">Contact Us</h2>
        </div>
        <div className="bg-night-800 border border-night-600 rounded-xl p-6">
          <p className="text-day-300 mb-4">
            If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:
          </p>

          <ul className="list-disc pl-6 text-day-300 space-y-2 mb-6">
            <li>
              <strong className="text-white">Email:</strong> privacy@kycnot.me
            </li>
            <li>
              <strong className="text-white">Privacy Officer:</strong> privacy-officer@kycnot.me
            </li>
            <li>
              <strong className="text-white">Secure Contact:</strong> For sensitive communications, please use our PGP key available on our website.
            </li>
          </ul>

          <p className="text-day-300">
            We are committed to addressing your concerns and resolving any privacy-related issues promptly and thoroughly.
          </p>
        </div>
      </section>

      {/* Compliance Statement */}
      <section>
        <div className="bg-gradient-to-r from-green-500/10 to-green-700/10 border border-green-500/20 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-4">Our Compliance Commitment</h2>
          <p className="text-day-300">
            KYCnot.me Gift Cards is committed to privacy by design and by default. We strive to comply with applicable privacy laws and regulations worldwide, including but not limited to the General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and other regional privacy frameworks. Our approach is to meet the highest standard of privacy protection regardless of where our users are located.
          </p>
        </div>
      </section>

      {/* Last Updated Notice */}
      <div className="mt-12 text-center text-day-400">
        <p>This Privacy Policy was last updated on {lastUpdated}.</p>
        <p className="mt-2">Previous versions of this policy are available upon request.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
