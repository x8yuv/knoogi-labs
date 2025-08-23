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
      <section className="min-h-screen pt-16 relative overflow-hidden" data-testid="hero-section">
        <div className="w-full h-full">
          <Spline
            scene="https://prod.spline.design/O4KW31BYKC1a4M1N/scene.splinecode"
            style={{ width: '100%', height: '100vh', minHeight: '500px' }}
            className="hidden md:block"
          />
          {/* Mobile fallback */}
          <div className="md:hidden flex items-center justify-center h-screen bg-gradient-to-br from-tech-blue/10 to-innovation-purple/10">
            <div className="text-center px-6">
              <h1 className="text-4xl font-bold font-display mb-4 text-rich-black">
                Welcome to{" "}
                <span className="bg-gradient-to-r from-tech-blue to-innovation-purple bg-clip-text text-transparent">
                  Knoogi Labs
                </span>
              </h1>
              <p className="text-lg text-professional-grey mb-8">
                Modern development solutions from Alberta, Canada
              </p>
              <Link href="/services">
                <Button className="bg-tech-blue text-white hover:bg-blue-600 font-semibold">
                  Explore Our Services
                </Button>
              </Link>
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
