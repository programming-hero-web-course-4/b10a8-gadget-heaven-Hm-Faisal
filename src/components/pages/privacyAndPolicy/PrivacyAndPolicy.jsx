import { useEffect } from "react";

const PrivacyAndPolicy = () => {

  const title = "Gadget Heaven || Privacy and Policy";

  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <div>
      <header className="bg-purple-600 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">Privacy Policy</h1>
          <p className="text-lg">Effective Date: Novembor 5, 2024</p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        {/* <!-- Section 1: Information We Collect --> */}
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold text-purple-600">
            1. Information We Collect
          </h2>
          <p>
            We collect various types of information to provide and improve our
            services, including:
          </p>
          <ul className="list-disc list-inside space-y-4">
            <li>
              <strong className="font-semibold">Personal Information:</strong>
              <ul className="list-disc list-inside space-y-2 ml-6">
                <li>
                  <strong>Account Registration Information:</strong> When you
                  create an account, we collect your name, email address, phone
                  number, and shipping/billing address.
                </li>
                <li>
                  <strong>Order Information:</strong> We collect details related
                  to the products you order, your payment information (through
                  secure payment processors), and your transaction history.
                </li>
              </ul>
            </li>
            <li>
              <strong className="font-semibold">
                Non-Personal Information:
              </strong>
              <ul className="list-disc list-inside space-y-2 ml-6">
                <li>
                  <strong>Cookies & Usage Data:</strong> We may collect
                  non-identifiable information such as browsing behavior, device
                  information, IP address, browser type, and pages visited to
                  improve your shopping experience and for analytics purposes.
                </li>
              </ul>
            </li>
          </ul>
        </section>

        {/* <!-- Section 2: How We Use Your Information --> */}
        <section className="space-y-8 mt-12">
          <h2 className="text-2xl font-semibold text-purple-600">
            2. How We Use Your Information
          </h2>
          <p>
            We use the information we collect for various purposes, including:
          </p>
          <ul className="list-disc list-inside space-y-4">
            <li>
              <strong className="font-semibold">To Process Orders:</strong> To
              complete and manage your purchases, provide shipping updates, and
              communicate about your orders.
            </li>
            <li>
              <strong className="font-semibold">
                To Personalize Your Experience:
              </strong>{" "}
              To improve and customize the content, offers, and recommendations
              on our website.
            </li>
            <li>
              <strong className="font-semibold">
                To Send Promotional Materials:
              </strong>{" "}
              If you opt-in, we may send you promotional emails, newsletters, or
              other marketing communications. You can opt-out at any time.
            </li>
            <li>
              <strong className="font-semibold">For Customer Support:</strong>{" "}
              To respond to inquiries, process returns, or resolve any issues.
            </li>
            <li>
              <strong className="font-semibold">
                To Improve Our Services:
              </strong>
              To analyze website usage, identify trends, and enhance our website
              &apos;s functionality.
            </li>
          </ul>
        </section>

        {/* <!-- Section 3: How We Protect Your Information --> */}
        <section className="space-y-8 mt-12">
          <h2 className="text-2xl font-semibold text-purple-600">
            3. How We Protect Your Information
          </h2>
          <p>
            We take the security of your personal information seriously. We
            implement appropriate technical and organizational measures to
            protect your data from unauthorized access, disclosure, alteration,
            or destruction. This includes the use of encryption technologies
            (SSL) for secure online transactions.
          </p>
        </section>

        {/* <!-- Section 4: Sharing Your Information --> */}
        <section className="space-y-8 mt-12">
          <h2 className="text-2xl font-semibold text-purple-600">
            4. Sharing Your Information
          </h2>
          <p>
            We may share your personal information in the following instances:
          </p>
          <ul className="list-disc list-inside space-y-4">
            <li>
              <strong className="font-semibold">Service Providers:</strong> We
              may share your information with trusted third-party service
              providers who assist us in running our business, such as payment
              processors, delivery services, and email marketing platforms.
              These parties are only authorized to use your information for the
              purposes of providing their services to us.
            </li>
            <li>
              <strong className="font-semibold">Legal Compliance:</strong> We
              may disclose your information if required by law or to comply with
              legal obligations, court orders, or government requests.
            </li>
            <li>
              <strong className="font-semibold">Business Transfers:</strong> In
              the event of a merger, acquisition, or sale of assets, your
              information may be transferred as part of that transaction.
            </li>
          </ul>
        </section>

        {/* <!-- Section 5: Your Data Rights --> */}
        <section className="space-y-8 mt-12">
          <h2 className="text-2xl font-semibold text-purple-600">
            5. Your Data Rights
          </h2>
          <p>
            Depending on your jurisdiction, you may have the following rights
            regarding your personal information:
          </p>
          <ul className="list-disc list-inside space-y-4">
            <li>
              <strong className="font-semibold">Access & Correction:</strong>{" "}
              You can request access to or corrections to your personal data by
              contacting us.
            </li>
            <li>
              <strong className="font-semibold">Deletion:</strong> You may
              request the deletion of your personal information, subject to
              certain exceptions (e.g., when it’s necessary for legal or
              legitimate business purposes).
            </li>
            <li>
              <strong className="font-semibold">
                Opt-Out of Marketing Communications:
              </strong>{" "}
              You can opt-out of receiving promotional emails at any time by
              clicking the &quot;unsubscribe&quot; link in any marketing email
              or by contacting us.
            </li>
            <li>
              <strong className="font-semibold">Data Portability:</strong> You
              may request to receive a copy of your personal data in a
              structured, commonly used, and machine-readable format.
            </li>
            <li>
              <strong className="font-semibold">Object to Processing:</strong>{" "}
              You can object to the processing of your data in certain
              circumstances, such as for direct marketing.
            </li>
          </ul>
          <p>
            To exercise your rights, please contact us at{" "}
            <a href="mailto:your-email@example.com" className="text-purple-600">
              your-email@example.com
            </a>
            .
          </p>
        </section>

        {/* <!-- Section 6: Cookies and Tracking Technologies --> */}
        <section className="space-y-8 mt-12">
          <h2 className="text-2xl font-semibold text-purple-600">
            6. Cookies and Tracking Technologies
          </h2>
          <p>
            We use cookies and similar tracking technologies to enhance your
            browsing experience. Cookies are small text files stored on your
            device that allow us to remember your preferences and track website
            usage.
          </p>
          <p>
            You can control cookies through your browser settings, including
            blocking or deleting them. However, disabling cookies may affect the
            functionality of our website.
          </p>
        </section>

        {/* <!-- Section 7: Third-Party Links --> */}
        <section className="space-y-8 mt-12">
          <h2 className="text-2xl font-semibold text-purple-600">
            7. Third-Party Links
          </h2>
          <p>
            Our website may contain links to third-party websites, products, or
            services. We are not responsible for the privacy practices of these
            third parties, and we encourage you to review their privacy policies
            before providing any personal information.
          </p>
        </section>

        {/* <!-- Section 9: Changes to This Privacy Policy --> */}
        <section className="space-y-8 mt-12">
          <h2 className="text-2xl font-semibold text-purple-600">
            9. Changes to This Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices, legal obligations, or other factors. When
            we make significant changes, we will notify you through our website
            or other communication channels.
          </p>
          <p>
            Please review this Privacy Policy periodically to stay informed
            about how we are protecting your information.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyAndPolicy;
