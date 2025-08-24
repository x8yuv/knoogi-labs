import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Eye, EyeOff, Lock, UserCheck, AlertCircle } from "lucide-react";

export default function PrivacyPolicy() {
  const privacyCards = [
    {
      icon: Eye,
      title: "What We Collect",
      color: "tech-blue",
      items: [
        "Contact form information (name, email, message)",
        "Technical data (IP address, browser type)",
        "Website usage analytics",
        "Communication preferences"
      ]
    },
    {
      icon: EyeOff,
      title: "What We DON'T Collect",
      color: "success-green",
      items: [
        "Personal financial information",
        "Social security numbers",
        "Passwords or sensitive credentials",
        "Location tracking data",
        "Biometric information"
      ]
    },
    {
      icon: Shield,
      title: "How We Keep It Safe",
      color: "innovation-purple",
      items: [
        "Encrypted data transmission (SSL/TLS)",
        "Secure server infrastructure",
        "Regular security audits",
        "Access controls and authentication",
        "Data backup and recovery systems"
      ]
    },
    {
      icon: UserCheck,
      title: "What We Share",
      color: "orange-500",
      items: [
        "Nothing without your explicit consent",
        "Only with trusted service providers",
        "When required by law",
        "Anonymous analytics data only"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 py-20 bg-gradient-to-br from-tech-blue/5 to-innovation-purple/5" data-testid="privacy-hero">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="w-20 h-20 bg-gradient-to-br from-tech-blue to-innovation-purple rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold font-display" data-testid="privacy-title">
              Privacy Policy
            </h1>
            <p className="text-lg text-professional-grey" data-testid="privacy-updated">
              Your privacy matters to us. Here's how we protect your information.
            </p>
            <Badge variant="outline" className="border-tech-blue text-tech-blue">
              Last updated: December 2024
            </Badge>
          </div>
        </div>
      </section>

      {/* Privacy Cards Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold font-display">Privacy at a Glance</h2>
            <p className="text-lg text-professional-grey max-w-3xl mx-auto">
              Understanding what we do and don't do with your information
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {privacyCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className={`w-12 h-12 bg-${card.color}/10 rounded-xl flex items-center justify-center`}>
                        <Icon className={`w-6 h-6 text-${card.color}`} />
                      </div>
                      <h3 className="text-xl font-semibold font-display" data-testid={`card-title-${index}`}>
                        {card.title}
                      </h3>
                    </div>
                    <ul className="space-y-3">
                      {card.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-3">
                          <div className={`w-2 h-2 bg-${card.color} rounded-full flex-shrink-0 mt-2`}></div>
                          <span className="text-professional-grey" data-testid={`card-item-${index}-${itemIndex}`}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Consent Section */}
          <Card className="bg-gradient-to-br from-tech-blue/5 to-innovation-purple/5 border-0 p-8 text-center">
            <CardContent className="p-0">
              <div className="w-16 h-16 bg-gradient-to-br from-tech-blue to-innovation-purple rounded-full flex items-center justify-center mx-auto mb-6">
                <UserCheck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold font-display mb-4">Your Consent is Required</h3>
              <p className="text-lg text-professional-grey mb-6 max-w-2xl mx-auto">
                We never share your information without your explicit permission. You have full control over your data and can withdraw consent at any time.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge className="bg-success-green text-white">Always with Permission</Badge>
                <Badge className="bg-tech-blue text-white">Full Control</Badge>
                <Badge className="bg-innovation-purple text-white">Withdraw Anytime</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-gray-50">
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