import { useState } from "react";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  CheckCircle,
  Linkedin,
  Twitter,
  Github,
  Instagram
} from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message Sent!",
        description: data.message || "Thank you for your message! We'll get back to you soon.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.service || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["Calgary, Alberta", "Canada T2P 1J9"],
      color: "tech-blue"
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (403) 555-0123"],
      color: "success-green"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contact@knoogi.com"],
      color: "innovation-purple"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM MST", "Saturday: 10:00 AM - 4:00 PM MST"],
      color: "orange-500"
    }
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", color: "text-blue-600" },
    { icon: Twitter, href: "#", color: "text-sky-500" },
    { icon: Github, href: "#", color: "text-gray-800" },
    { icon: Instagram, href: "#", color: "text-pink-600" }
  ];

  const services = [
    "AI Development",
    "App Development", 
    "Digital Marketing",
    "Media Creation",
    "Custom Development",
    "Strategic Consultation"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Contact Form & Spline Section */}
      <section className="min-h-screen pt-16 bg-white" data-testid="contact-main-section">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="max-w-2xl mx-auto">
            {/* Left Side - Contact Form */}
            <div className="space-y-8 animate-fadeIn flex flex-col justify-center">
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold font-display mb-4 text-rich-black leading-tight">
                  Let's{" "}
                  <span className="bg-gradient-to-r from-tech-blue to-innovation-purple bg-clip-text text-transparent">
                    Connect
                  </span>
                </h1>
                <p className="text-lg text-professional-grey mb-8 leading-relaxed">
                  Ready to bring your ideas to life? Get in touch with our team of experts.
                </p>
              </div>
              
              <h2 className="text-2xl font-bold font-display" data-testid="form-title">Send us a message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm font-semibold text-rich-black">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange("firstName", e.target.value)}
                      placeholder="Enter your first name"
                      className="border-gray-300 focus:border-tech-blue"
                      data-testid="input-first-name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sm font-semibold text-rich-black">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange("lastName", e.target.value)}
                      placeholder="Enter your last name"
                      className="border-gray-300 focus:border-tech-blue"
                      data-testid="input-last-name"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-semibold text-rich-black">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your.email@example.com"
                    className="border-gray-300 focus:border-tech-blue"
                    data-testid="input-email"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-semibold text-rich-black">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+1 (555) 123-4567"
                    className="border-gray-300 focus:border-tech-blue"
                    data-testid="input-phone"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="service" className="text-sm font-semibold text-rich-black">
                    Service Interest *
                  </Label>
                  <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
                    <SelectTrigger className="border-gray-300 focus:border-tech-blue" data-testid="select-service">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-semibold text-rich-black">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    placeholder="Tell us about your project..."
                    rows={5}
                    className="border-gray-300 focus:border-tech-blue resize-none"
                    data-testid="input-message"
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  size="lg"
                  className="w-full bg-tech-blue text-white hover:bg-blue-600 font-semibold"
                  disabled={contactMutation.isPending}
                  data-testid="button-submit"
                >
                  {contactMutation.isPending ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>
              </form>
            </div>
            
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8 animate-fadeIn">
              <h2 className="text-3xl font-bold font-display" data-testid="info-title">Contact Information</h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className={`w-12 h-12 bg-${info.color}/10 rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`text-${info.color} w-5 h-5`} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-rich-black mb-1" data-testid={`info-title-${index}`}>
                          {info.title}
                        </h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-professional-grey" data-testid={`info-detail-${index}-${detailIndex}`}>
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <Card className="bg-gradient-to-br from-tech-blue/5 to-innovation-purple/5 border-0">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-rich-black mb-3" data-testid="social-title">Follow Us</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => {
                      const Icon = social.icon;
                      return (
                        <a 
                          key={index}
                          href={social.href} 
                          className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-professional-grey hover:shadow-md transition-all duration-300 hover:scale-105"
                          style={{ color: 'inherit' }}
                          onMouseEnter={(e) => {
                            e.currentTarget.className = e.currentTarget.className.replace('text-professional-grey', social.color);
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.className = e.currentTarget.className.replace(social.color, 'text-professional-grey');
                          }}
                          data-testid={`social-link-${index}`}
                        >
                          <Icon className="w-5 h-5" />
                        </a>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Contact Options */}
      <section className="py-20 gradient-overlay">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12 animate-fadeIn">
            <h2 className="text-4xl font-bold font-display" data-testid="other-ways-title">Other Ways to Connect</h2>
            <p className="text-xl text-professional-grey max-w-3xl mx-auto" data-testid="other-ways-description">
              Choose the communication method that works best for you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white p-6 text-center hover:shadow-lg transition-all duration-300 animate-fadeIn">
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-tech-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-tech-blue" />
                </div>
                <h3 className="font-bold text-rich-black font-display mb-2" data-testid="call-title">
                  Schedule a Call
                </h3>
                <p className="text-professional-grey text-sm mb-4" data-testid="call-description">
                  Book a consultation to discuss your project requirements in detail.
                </p>
                <Button 
                  variant="outline" 
                  className="border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white"
                  data-testid="button-schedule-call"
                >
                  Schedule Call
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white p-6 text-center hover:shadow-lg transition-all duration-300 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-success-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-success-green" />
                </div>
                <h3 className="font-bold text-rich-black font-display mb-2" data-testid="email-title">
                  Direct Email
                </h3>
                <p className="text-professional-grey text-sm mb-4" data-testid="email-description">
                  Send us an email directly for quick questions or project inquiries.
                </p>
                <Button 
                  variant="outline" 
                  className="border-success-green text-success-green hover:bg-success-green hover:text-white"
                  data-testid="button-send-email"
                >
                  Send Email
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white p-6 text-center hover:shadow-lg transition-all duration-300 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-0">
                <div className="w-12 h-12 bg-innovation-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-innovation-purple" />
                </div>
                <h3 className="font-bold text-rich-black font-display mb-2" data-testid="quote-title">
                  Get a Quote
                </h3>
                <p className="text-professional-grey text-sm mb-4" data-testid="quote-description">
                  Request a detailed quote for your specific project requirements.
                </p>
                <Button 
                  variant="outline" 
                  className="border-innovation-purple text-innovation-purple hover:bg-innovation-purple hover:text-white"
                  data-testid="button-get-quote"
                >
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
