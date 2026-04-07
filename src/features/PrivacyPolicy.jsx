import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="privacy-page">
      <div className="privacy-hero">
        <div className="container">
          <Link to="/" className="privacy-back-link">
            <i className="fa-regular fa-arrow-left"></i> Back to Home
          </Link>
          <h1 className="privacy-hero-title">Privacy Policy</h1>
          <p className="privacy-hero-sub">Last updated: April 3, 2026</p>
        </div>
      </div>

      <div className="container privacy-body">

        <section className="privacy-section">
          <h2>1. Introduction</h2>
          <p>
            Welcome to MetaGen Technology ("Company", "we", "our", "us"). We are committed to protecting
            your personal information and your right to privacy. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you visit our website or use
            our services.
          </p>
          <p>
            Please read this policy carefully. If you disagree with its terms, please discontinue use
            of our site.
          </p>
        </section>

        <section className="privacy-section">
          <h2>2. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul>
            <li><strong>Personal Identifiers:</strong> Name, email address, phone number, and company name when you fill out a contact form or request a quote.</li>
            <li><strong>Usage Data:</strong> Browser type, IP address, pages visited, time spent on pages, and referring URLs collected automatically when you visit our site.</li>
            <li><strong>Communications:</strong> Any messages, inquiries, or feedback you send to us directly.</li>
            <li><strong>Cookies & Tracking:</strong> We use cookies and similar tracking technologies to enhance your experience on our site.</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Send you project updates, proposals, and relevant communications</li>
            <li>Improve and optimize our website and services</li>
            <li>Analyze usage trends to enhance user experience</li>
            <li>Comply with legal obligations and enforce our terms</li>
            <li>Prevent fraudulent activity and ensure security</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>4. Sharing Your Information</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may share
            your data in the following limited circumstances:
          </p>
          <ul>
            <li><strong>Service Providers:</strong> Trusted third-party vendors who assist us in operating our website and conducting our business (e.g., hosting, email services), subject to confidentiality agreements.</li>
            <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental authority.</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, your data may be transferred as part of that transaction.</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>5. Cookies</h2>
          <p>
            Our website uses cookies to improve your browsing experience. Cookies are small data files
            stored on your device. You can instruct your browser to refuse all cookies or to indicate
            when a cookie is being sent. However, some parts of our site may not function properly
            without cookies.
          </p>
          <p>Types of cookies we use:</p>
          <ul>
            <li><strong>Essential Cookies:</strong> Necessary for the website to function correctly.</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our site.</li>
            <li><strong>Preference Cookies:</strong> Remember your settings and preferences.</li>
          </ul>
        </section>

        <section className="privacy-section">
          <h2>6. Data Security</h2>
          <p>
            We implement industry-standard security measures to protect your personal information
            against unauthorized access, alteration, disclosure, or destruction. These include SSL
            encryption, secure servers, and access controls. However, no method of transmission over
            the internet is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section className="privacy-section">
          <h2>7. Data Retention</h2>
          <p>
            We retain your personal information only for as long as necessary to fulfill the purposes
            outlined in this policy, unless a longer retention period is required by law. When your
            data is no longer needed, we will securely delete or anonymize it.
          </p>
        </section>

        <section className="privacy-section">
          <h2>8. Your Rights</h2>
          <p>Depending on your location, you may have the following rights regarding your data:</p>
          <ul>
            <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
            <li><strong>Correction:</strong> Request correction of inaccurate or incomplete data.</li>
            <li><strong>Deletion:</strong> Request deletion of your personal data ("right to be forgotten").</li>
            <li><strong>Restriction:</strong> Request that we restrict the processing of your data.</li>
            <li><strong>Portability:</strong> Request transfer of your data to another organization.</li>
            <li><strong>Objection:</strong> Object to processing of your data for certain purposes.</li>
          </ul>
          <p>To exercise any of these rights, please contact us at <a href="mailto:info@metagensoft.com">info@metagensoft.com</a>.</p>
        </section>

        <section className="privacy-section">
          <h2>9. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the
            privacy practices of those sites and encourage you to review their privacy policies
            before providing any personal information.
          </p>
        </section>

        <section className="privacy-section">
          <h2>10. Children's Privacy</h2>
          <p>
            Our services are not directed to individuals under the age of 13. We do not knowingly
            collect personal information from children. If you believe we have inadvertently collected
            such information, please contact us immediately so we can delete it.
          </p>
        </section>

        <section className="privacy-section">
          <h2>11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any significant
            changes by updating the "Last updated" date at the top of this page. We encourage you to
            review this policy periodically to stay informed about how we protect your information.
          </p>
        </section>

        <section className="privacy-section">
          <h2>12. Contact Us</h2>
          <p>If you have any questions or concerns about this Privacy Policy, please contact us:</p>
          <div className="privacy-contact">
            <p><i className="fa-solid fa-building"></i> <strong>MetaGen Technology</strong></p>
            <p><i className="fa-solid fa-location-dot"></i> Mumbai, India (Head Office)</p>
            <p><i className="fa-solid fa-envelope"></i> <a href="mailto:info@metagensoft.com">info@metagensoft.com</a></p>
            <p><i className="fa-solid fa-phone"></i> <a href="tel:+919944473370">+91 9944473370</a></p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default PrivacyPolicy;
