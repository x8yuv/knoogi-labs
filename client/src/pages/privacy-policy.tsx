import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-16 py-20 bg-gradient-to-br from-tech-blue/5 to-innovation-purple/5" data-testid="privacy-hero">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold font-display" data-testid="privacy-title">
              Privacy Policy
            </h1>
            <p className="text-lg text-professional-grey" data-testid="privacy-updated">
              Last updated: December 2024
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            <h2 className="text-2xl font-semibold mb-4" data-testid="section-information-collection">
              Information We Collect
            </h2>
            <p className="text-professional-grey mb-6">
              At Knoogi Labs, we collect information to provide better services to our users. We collect information in the following ways:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-professional-grey">
              <li>Information you give us directly through contact forms or communications</li>
              <li>Information we get from your use of our services and website</li>
              <li>Technical information such as IP addresses and browser types</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4" data-testid="section-use-information">
              How We Use Information
            </h2>
            <p className="text-professional-grey mb-6">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-professional-grey">
              <li>Provide, maintain, and improve our services</li>
              <li>Process and respond to your inquiries and requests</li>
              <li>Send you updates about our services (with your consent)</li>
              <li>Analyze and understand how our services are used</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4" data-testid="section-information-sharing">
              Information Sharing
            </h2>
            <p className="text-professional-grey mb-6">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-professional-grey">
              <li>With your explicit consent</li>
              <li>For legal reasons or to protect our rights</li>
              <li>With service providers who assist in our operations (under strict confidentiality agreements)</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4" data-testid="section-data-security">
              Data Security
            </h2>
            <p className="text-professional-grey mb-8">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>

            <h2 className="text-2xl font-semibold mb-4" data-testid="section-cookies">
              Cookies and Tracking
            </h2>
            <p className="text-professional-grey mb-8">
              We use cookies and similar tracking technologies to improve your experience on our website. You can control cookie preferences through your browser settings.
            </p>

            <h2 className="text-2xl font-semibold mb-4" data-testid="section-your-rights">
              Your Rights
            </h2>
            <p className="text-professional-grey mb-6">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 mb-8 space-y-2 text-professional-grey">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to or restrict certain processing of your information</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-4" data-testid="section-contact-us">
              Contact Us
            </h2>
            <p className="text-professional-grey mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-professional-grey mb-2">
                <strong>Email:</strong> privacy@knoogilabs.com
              </p>
              <p className="text-professional-grey mb-2">
                <strong>Address:</strong> Calgary, Alberta, Canada
              </p>
              <p className="text-professional-grey">
                <strong>Phone:</strong> +1 (403) 555-0123
              </p>
            </div>

            <h2 className="text-2xl font-semibold mb-4 mt-8" data-testid="section-changes">
              Changes to This Policy
            </h2>
            <p className="text-professional-grey">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}