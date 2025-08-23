import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import aiDevelopmentImage from "@assets/ai-7977960_1920_1755937825207.jpg";
import appDevelopmentImage from "@assets/iphone-676726_1920_1755938088882.jpg";
import digitalMarketingImage from "@assets/online-marketing-1246457_1920_1755938312222.jpg";
import mediaCreationImage from "@assets/social-media-4140959_1920_1755938523787.jpg";
import customDevelopmentImage from "@assets/laptop-2620118_1920_1755938809797.jpg";
import strategicConsultationImage from "@assets/technology-298256_1920_1755939089659.jpg";
import { 
  Brain, 
  Smartphone, 
  TrendingUp, 
  Video, 
  Code, 
  Handshake,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Target
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Brain,
      title: "AI Development",
      description: "Harness the power of artificial intelligence to automate processes, gain insights, and drive innovation in your business.",
      longDescription: "Our AI development services include machine learning model creation, natural language processing, computer vision, predictive analytics, and intelligent automation systems. We work with cutting-edge frameworks and technologies to deliver AI solutions that provide real business value.",
      features: [
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision Systems",
        "Predictive Analytics",
        "Intelligent Automation",
        "AI Strategy Consulting"
      ],
      gradient: "from-blue-50 to-indigo-50",
      iconGradient: "from-tech-blue to-innovation-purple",
      image: aiDevelopmentImage,
      deliverables: ["AI Model", "Documentation", "Training", "Support"],
      timeline: "6-12 weeks"
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Create stunning mobile applications that engage users and drive business growth across iOS and Android platforms.",
      longDescription: "We specialize in native and cross-platform mobile app development using the latest technologies. Our apps are designed with user experience at the forefront, ensuring optimal performance and engagement across all devices.",
      features: [
        "Native iOS & Android Apps",
        "Cross-Platform Solutions",
        "UI/UX Design",
        "Backend Integration",
        "App Store Optimization",
        "Maintenance & Support"
      ],
      gradient: "from-purple-50 to-pink-50",
      iconGradient: "from-innovation-purple to-pink-500",
      image: appDevelopmentImage,
      deliverables: ["Mobile App", "Source Code", "Documentation", "Store Listing"],
      timeline: "8-16 weeks"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Amplify your online presence with data-driven marketing strategies that convert visitors into customers.",
      longDescription: "Our digital marketing services encompass SEO, social media marketing, content creation, email campaigns, and paid advertising. We use advanced analytics to optimize campaigns and maximize your return on investment.",
      features: [
        "Search Engine Optimization",
        "Social Media Marketing",
        "Content Strategy",
        "Email Campaigns",
        "Paid Advertising (PPC)",
        "Analytics & Reporting"
      ],
      gradient: "from-green-50 to-teal-50",
      iconGradient: "from-success-green to-teal-500",
      image: digitalMarketingImage,
      deliverables: ["Marketing Strategy", "Campaign Setup", "Content", "Reports"],
      timeline: "4-8 weeks"
    },
    {
      icon: Video,
      title: "Media Creation",
      description: "Professional multimedia content that tells your story and captivates your audience across all channels.",
      longDescription: "From concept to completion, we create compelling visual content including promotional videos, brand photography, graphic design, and interactive media that resonates with your target audience and strengthens your brand identity.",
      features: [
        "Video Production",
        "Graphic Design",
        "Brand Photography",
        "Animation & Motion Graphics",
        "Interactive Media",
        "Content Strategy"
      ],
      gradient: "from-orange-50 to-red-50",
      iconGradient: "from-orange-500 to-red-500",
      image: mediaCreationImage,
      deliverables: ["Media Assets", "Brand Guidelines", "Source Files", "Usage Rights"],
      timeline: "2-6 weeks"
    },
    {
      icon: Code,
      title: "Custom Development",
      description: "Tailored software solutions built to your exact specifications using modern technologies and best practices.",
      longDescription: "Whether you need a custom web application, enterprise software, or integration solutions, we build scalable, secure, and maintainable software that grows with your business needs and requirements.",
      features: [
        "Web Applications",
        "Enterprise Software",
        "API Development",
        "Database Design",
        "System Integration",
        "Legacy Modernization"
      ],
      gradient: "from-indigo-50 to-blue-50",
      iconGradient: "from-indigo-500 to-tech-blue",
      image: customDevelopmentImage,
      deliverables: ["Custom Software", "Source Code", "Documentation", "Training"],
      timeline: "8-20 weeks"
    },
    {
      icon: Handshake,
      title: "Strategic Consultation",
      description: "Expert guidance to help you navigate technology decisions and digital transformation initiatives.",
      longDescription: "Our strategic consultation services provide you with the insights and roadmap needed to make informed technology decisions, optimize your digital processes, and achieve your business objectives through strategic technology implementation.",
      features: [
        "Technology Assessment",
        "Digital Strategy",
        "Architecture Planning",
        "Process Optimization",
        "Technology Roadmap",
        "Implementation Support"
      ],
      gradient: "from-gray-50 to-slate-50",
      iconGradient: "from-slate-500 to-gray-600",
      image: strategicConsultationImage,
      deliverables: ["Strategy Document", "Recommendations", "Roadmap", "Action Plan"],
      timeline: "2-4 weeks"
    }
  ];

  const processSteps = [
    {
      icon: Users,
      title: "Discovery",
      description: "We start by understanding your business needs, goals, and challenges through detailed consultation."
    },
    {
      icon: Target,
      title: "Planning",
      description: "Our team develops a comprehensive project plan with clear timelines, milestones, and deliverables."
    },
    {
      icon: Code,
      title: "Development",
      description: "Using agile methodologies, we build your solution with regular updates and feedback sessions."
    },
    {
      icon: CheckCircle,
      title: "Delivery",
      description: "We deliver your completed project with full documentation, training, and ongoing support."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-overlay">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-6 animate-fadeIn">
            <h1 className="text-5xl lg:text-6xl font-bold font-display" data-testid="services-title">
              Our{" "}
              <span className="bg-gradient-to-r from-tech-blue to-innovation-purple bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-professional-grey max-w-3xl mx-auto leading-relaxed" data-testid="services-subtitle">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              
              return (
                <Card 
                  key={index} 
                  className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 animate-fadeIn"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`grid lg:grid-cols-2 gap-0 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
                    <div className={`order-2 ${!isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      <img 
                        src={service.image} 
                        alt={`${service.title} service illustration`} 
                        className="w-full h-64 lg:h-full object-cover"
                        data-testid={`service-image-${index}`}
                      />
                    </div>
                    <div className={`p-8 lg:p-12 order-1 ${!isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <CardContent className="p-0 space-y-6">
                        <div className={`w-16 h-16 bg-gradient-to-br ${service.iconGradient} rounded-xl flex items-center justify-center`}>
                          <Icon className="text-white w-8 h-8" />
                        </div>
                        
                        <div>
                          <h2 className="text-3xl font-bold font-display mb-4" data-testid={`service-title-${index}`}>
                            {service.title}
                          </h2>
                          <p className="text-professional-grey text-lg mb-6" data-testid={`service-description-${index}`}>
                            {service.longDescription}
                          </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold mb-3 flex items-center">
                              <CheckCircle className="w-4 h-4 text-success-green mr-2" />
                              Key Features
                            </h4>
                            <ul className="space-y-2">
                              {service.features.slice(0, 3).map((feature, featIndex) => (
                                <li key={featIndex} className="text-professional-grey text-sm flex items-center">
                                  <div className="w-1.5 h-1.5 bg-tech-blue rounded-full mr-2"></div>
                                  {feature}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold mb-3 flex items-center">
                              <Clock className="w-4 h-4 text-innovation-purple mr-2" />
                              Project Details
                            </h4>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between">
                                <span className="text-professional-grey text-sm">Timeline:</span>
                                <Badge variant="secondary" data-testid={`service-timeline-${index}`}>
                                  {service.timeline}
                                </Badge>
                              </div>
                              <div className="text-professional-grey text-sm">
                                <span className="font-medium">Deliverables:</span>
                                <div className="flex flex-wrap gap-1 mt-1">
                                  {service.deliverables.map((deliverable, delIndex) => (
                                    <Badge key={delIndex} variant="outline" className="text-xs">
                                      {deliverable}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <Link href="/contact">
                          <Button 
                            className="bg-tech-blue text-white hover:bg-blue-600 font-semibold"
                            data-testid={`service-cta-${index}`}
                          >
                            Get Started with {service.title}
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Button>
                        </Link>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 gradient-overlay">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 animate-fadeIn">
            <h2 className="text-4xl font-bold font-display" data-testid="process-title">Our Process</h2>
            <p className="text-xl text-professional-grey max-w-3xl mx-auto" data-testid="process-description">
              A proven methodology that ensures successful project delivery and exceeds client expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card 
                  key={index} 
                  className="bg-white p-6 text-center hover:shadow-lg transition-all duration-300 animate-fadeIn"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-tech-blue to-innovation-purple rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-sm font-bold text-tech-blue mb-2">
                      STEP {index + 1}
                    </div>
                    <h3 className="text-lg font-bold text-rich-black font-display mb-3" data-testid={`process-title-${index}`}>
                      {step.title}
                    </h3>
                    <p className="text-professional-grey text-sm" data-testid={`process-description-${index}`}>
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center animate-fadeIn">
          <h2 className="text-4xl font-bold font-display mb-6" data-testid="cta-title">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-professional-grey mb-8 max-w-2xl mx-auto" data-testid="cta-description">
            Let's discuss your needs and create a custom solution that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-tech-blue text-white hover:bg-blue-600 font-semibold"
                data-testid="cta-contact"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/about">
              <Button 
                variant="outline" 
                size="lg" 
                className="font-semibold border-professional-grey text-professional-grey hover:border-tech-blue hover:text-tech-blue"
                data-testid="cta-learn-more"
              >
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
