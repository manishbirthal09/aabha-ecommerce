import PolicyLayout from "../components/PolicyLayout";

export default function PrivacyPolicy() {
  return (
    <PolicyLayout title="Privacy Policy">
      <p>
        Aabha by Bhanu Priya respects your privacy and is committed to
        protecting your personal information. This Privacy Policy outlines
        how we collect, use, disclose, and safeguard your information when
        you visit our website aabhabybhanupriya.com and use our products and
        delivery services. By using our services, you agree to the terms of
        this Privacy Policy.
      </p>

      <h2 className="text-lg font-medium text-[#16271C] pt-4">
        1. Information We Collect
      </h2>
      <p>We may collect personal information from you in the following ways:</p>

      <h3 className="text-base font-medium text-[#16271C] pt-2">
        a. Personal Information You Provide
      </h3>
      <ul className="list-disc pl-5 space-y-1">
        <li>Full name</li>
        <li>Email address</li>
        <li>Phone number</li>
        <li>Billing and shipping address</li>
        <li>Payment details (processed via secure third-party gateway)</li>
        <li>Order details and special instructions</li>
      </ul>

      <h3 className="text-base font-medium text-[#16271C] pt-2">
        b. Automatically Collected Information
      </h3>
      <p>When you visit our website, we may automatically collect:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>IP address</li>
        <li>Browser type and version</li>
        <li>Device type</li>
        <li>Referring URLs</li>
        <li>Pages visited and time spent</li>
        <li>Cookies and similar technologies</li>
      </ul>

      <h2 className="text-lg font-medium text-[#16271C] pt-4">
        2. How We Use Your Information
      </h2>
      <p>We use the information we collect to:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Process and deliver your orders</li>
        <li>Send order confirmations and updates</li>
        <li>Respond to inquiries and provide customer support</li>
        <li>Improve our website and services</li>
        <li>Send promotional emails (if you opt in)</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2 className="text-lg font-medium text-[#16271C] pt-4">
        3. Sharing Your Information
      </h2>
      <p>
        We do not sell your personal information. We may share your
        information with:
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Payment processors (Razorpay)</li>
        <li>Delivery partners to fulfill your order</li>
        <li>Service providers (e.g., IT support, email marketing)</li>
      </ul>
      <p>
        All third-party service providers are required to maintain the
        confidentiality and security of your information.
      </p>

      <h2 className="text-lg font-medium text-[#16271C] pt-4">
        4. Cookies and Tracking Technologies
      </h2>
      <p>
        We use cookies and similar tools to enhance your experience, analyze
        site usage, and deliver personalized content. You can manage your
        cookie preferences through your browser settings.
      </p>

      <h2 className="text-lg font-medium text-[#16271C] pt-4">
        5. Data Security
      </h2>
      <p>
        We implement reasonable security measures to protect your data.
        However, no method of transmission over the Internet is 100% secure.
        We cannot guarantee absolute security.
      </p>

      <h2 className="text-lg font-medium text-[#16271C] pt-4">
        6. Your Rights and Choices
      </h2>
      <p>
        Depending on your location, you may have rights under applicable
        data protection laws, including:
      </p>
      <ul className="list-disc pl-5 space-y-1">
        <li>Accessing or correcting your information</li>
        <li>Deleting your data</li>
        <li>Opting out of marketing communications</li>
      </ul>
      <p>
        To exercise these rights, contact us at{" "}
        priyachoudhary1005@gmail.com.
      </p>

      <h2 className="text-lg font-medium text-[#16271C] pt-4">
        7. Third-Party Links
      </h2>
      <p>
        Our website may contain links to third-party websites. We are not
        responsible for their privacy practices and encourage you to read
        their privacy policies.
      </p>

      <h2 className="text-lg font-medium text-[#16271C] pt-4">
        8. Children's Privacy
      </h2>
      <p>
        Our services are not directed to individuals under 13. We do not
        knowingly collect personal information from children.
      </p>

      <h2 className="text-lg font-medium text-[#16271C] pt-4">
        9. Changes to This Policy
      </h2>
      <p>
        We may update this Privacy Policy from time to time. Changes will be
        posted on this page with an updated effective date.
      </p>

      <h2 className="text-lg font-medium text-[#16271C] pt-4">
        10. Contact Us
      </h2>
      <p>
        If you have any questions or concerns about this Privacy Policy,
        please contact us:
        <br />
        Aabhabybhanupriya.com
        <br />
        Email: priyachoudhary1005@gmail.com
        <br />
        Address: Patna, Bihar
      </p>
    </PolicyLayout>
  );
}