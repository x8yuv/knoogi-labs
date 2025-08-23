import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import Spline from '@splinetool/react-spline';
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
  Star,
  CheckCircle
} from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: Brain,
      title: "AI Development",
      description: "Cutting-edge artificial intelligence solutions, machine learning models, and intelligent automation systems.",
      gradient: "from-blue-50 to-indigo-50",
      iconGradient: "from-tech-blue to-innovation-purple",
      image: aiDevelopmentImage
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Native and cross-platform mobile applications with stunning UI/UX and robust functionality.",
      gradient: "from-purple-50 to-pink-50",
      iconGradient: "from-innovation-purple to-pink-500",
      image: appDevelopmentImage
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Strategic digital marketing campaigns, SEO optimization, and data-driven growth solutions.",
      gradient: "from-green-50 to-teal-50",
      iconGradient: "from-success-green to-teal-500",
      image: digitalMarketingImage
    },
    {
      icon: Video,
      title: "Media Creation",
      description: "Professional video production, graphic design, and multimedia content creation services.",
      gradient: "from-orange-50 to-red-50",
      iconGradient: "from-orange-500 to-red-500",
      image: mediaCreationImage
    },
    {
      icon: Code,
      title: "Custom Development",
      description: "Tailored software solutions, web applications, and enterprise systems built to your specifications.",
      gradient: "from-indigo-50 to-blue-50",
      iconGradient: "from-indigo-500 to-tech-blue",
      image: customDevelopmentImage
    },
    {
      icon: Handshake,
      title: "Strategic Consultation",
      description: "Technology strategy, digital transformation guidance, and technical architecture consulting.",
      gradient: "from-gray-50 to-slate-50",
      iconGradient: "from-slate-500 to-gray-600",
      image: strategicConsultationImage
    }
  ];

  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "5+", label: "Years Experience" }
  ];

  const features = [
    "Expert Development Team",
    "Canadian-Based Support",
    "Modern Technology Stack",
    "24/7 Project Monitoring"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="h-screen pt-16 relative overflow-hidden" data-testid="hero-section">
        {/* Desktop Spline */}
        <div className="hidden md:block w-full h-full">
          <Spline
            scene="https://prod.spline.design/O4KW31BYKC1a4M1N/scene.splinecode"
            style={{ 
              width: '100%', 
              height: '100%'
            }}
            className="w-full h-full"
          />
        </div>
        
        {/* Mobile Hero */}
        <div className="md:hidden w-full h-full bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900 relative">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-tech-blue/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-32 right-8 w-96 h-96 bg-innovation-purple/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-success-green/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-10">
            <div style={{
              backgroundImage: `
                linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }} className="w-full h-full dark:hidden"></div>
            <div style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }} className="w-full h-full hidden dark:block"></div>
          </div>
          
          {/* Content */}
          <div className="relative z-10 flex items-center justify-center h-full px-6">
            <div className="text-center max-w-sm mx-auto">
              {/* Logo/Icon */}
              <div className="mb-8 relative">
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-tech-blue to-innovation-purple rounded-3xl shadow-2xl flex items-center justify-center mb-6 animate-bounce">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-success-green rounded-full animate-ping"></div>
              </div>
              
              {/* Main heading */}
              <h1 className="text-4xl font-bold font-display mb-4 text-rich-black dark:text-white leading-tight">
                Welcome to{" "}
                <span className="bg-gradient-to-r from-tech-blue to-innovation-purple bg-clip-text text-transparent">
                  Knoogi Labs
                </span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-lg text-professional-grey dark:text-gray-300 mb-8 leading-relaxed">
                Modern development solutions from the heart of Alberta, Canada. Building the future with innovative technology.
              </p>
              
              {/* Action buttons */}
              <div className="space-y-4">
                <Link href="/services">
                  <Button className="bg-gradient-to-r from-tech-blue to-innovation-purple text-white hover:shadow-lg hover:scale-105 transition-all duration-300 font-semibold w-full py-3 rounded-xl">
                    Explore Our Services
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" className="w-full py-3 border-2 border-tech-blue/30 dark:border-white/30 text-tech-blue dark:text-white hover:bg-tech-blue dark:hover:bg-white hover:text-white dark:hover:text-slate-900 transition-all duration-300 rounded-xl backdrop-blur-sm">
                    Get In Touch
                  </Button>
                </Link>
              </div>
              
              {/* Scroll indicator */}
              <div className="mt-12 animate-bounce">
                <svg className="w-6 h-6 text-tech-blue/60 dark:text-white/60 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 animate-fadeIn">
            <h2 className="text-4xl lg:text-5xl font-bold font-display" data-testid="services-title">Our Services</h2>
            <p className="text-xl text-professional-grey max-w-3xl mx-auto" data-testid="services-description">
              We offer comprehensive development solutions to help your business thrive in the digital landscape.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index} 
                  className={`group bg-gradient-to-br ${service.gradient} p-4 md:p-8 hover:shadow-xl transition-all duration-300 border-0 animate-fadeIn`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0 space-y-4 md:space-y-6">
                    <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${service.iconGradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="text-white w-6 h-6 md:w-8 md:h-8" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3 font-display" data-testid={`service-title-${index}`}>
                        {service.title}
                      </h3>
                      <p className="text-sm md:text-base text-professional-grey" data-testid={`service-description-${index}`}>
                        {service.description}
                      </p>
                    </div>
                    <img 
                      src={service.image} 
                      alt={`${service.title} illustration`} 
                      className="rounded-xl w-full h-32 object-cover"
                      data-testid={`service-image-${index}`}
                    />
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12 animate-fadeIn">
            <Link href="/services">
              <Button 
                size="lg" 
                className="bg-tech-blue text-white hover:bg-blue-600 font-semibold"
                data-testid="view-all-services"
              >
                View All Services
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 gradient-overlay">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 animate-fadeIn">
            <h2 className="text-4xl lg:text-5xl font-bold font-display" data-testid="features-title">
              Why Choose Knoogi Labs?
            </h2>
            <p className="text-xl text-professional-grey max-w-3xl mx-auto" data-testid="features-description">
              We combine technical expertise with Canadian values to deliver exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="bg-white p-6 text-center hover:shadow-lg transition-all duration-300 animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <Star className="w-8 h-8 text-tech-blue mx-auto mb-4" />
                  <h3 className="font-semibold text-rich-black" data-testid={`feature-${index}`}>
                    {feature}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
