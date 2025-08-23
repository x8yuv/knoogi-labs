import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import VenomBeam from "@/components/ui/venom-beam";
import Spline from '@splinetool/react-spline';
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
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Native and cross-platform mobile applications with stunning UI/UX and robust functionality.",
      gradient: "from-purple-50 to-pink-50",
      iconGradient: "from-innovation-purple to-pink-500",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Strategic digital marketing campaigns, SEO optimization, and data-driven growth solutions.",
      gradient: "from-green-50 to-teal-50",
      iconGradient: "from-success-green to-teal-500",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    },
    {
      icon: Video,
      title: "Media Creation",
      description: "Professional video production, graphic design, and multimedia content creation services.",
      gradient: "from-orange-50 to-red-50",
      iconGradient: "from-orange-500 to-red-500",
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    },
    {
      icon: Code,
      title: "Custom Development",
      description: "Tailored software solutions, web applications, and enterprise systems built to your specifications.",
      gradient: "from-indigo-50 to-blue-50",
      iconGradient: "from-indigo-500 to-tech-blue",
      image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
    },
    {
      icon: Handshake,
      title: "Strategic Consultation",
      description: "Technology strategy, digital transformation guidance, and technical architecture consulting.",
      gradient: "from-gray-50 to-slate-50",
      iconGradient: "from-slate-500 to-gray-600",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200"
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
      <VenomBeam className="min-h-screen flex items-center pt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fadeIn">
              <div className="space-y-6">
                <div className="flex items-center space-x-2 text-success-green">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-sm font-medium text-rich-black dark:text-white" data-testid="hero-location">From Alberta, Canada</span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight font-display text-rich-black dark:text-white">
                  Modern Development{" "}
                  <span className="bg-gradient-to-r from-success-green to-tech-blue bg-clip-text text-transparent">
                    Solutions
                  </span>
                </h1>
                <p className="text-xl text-professional-grey dark:text-gray-300 leading-relaxed" data-testid="hero-description">
                  Knoogi Labs specializes in AI, app development, digital marketing, media creation, and custom development services. We build the future, one innovation at a time.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    className="bg-tech-blue text-white hover:bg-blue-600 font-semibold"
                    data-testid="hero-get-started"
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="font-semibold border-professional-grey text-professional-grey hover:border-tech-blue hover:text-tech-blue"
                    data-testid="hero-view-work"
                  >
                    View Our Work
                  </Button>
                </Link>
              </div>
              
              <div className="flex items-center space-x-8 pt-8">
                {stats.map(({ value, label }, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-rich-black dark:text-white font-display" data-testid={`stat-value-${index}`}>
                      {value}
                    </div>
                    <div className="text-sm text-professional-grey dark:text-gray-300" data-testid={`stat-label-${index}`}>
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative animate-fadeIn">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Professional tech team collaborating in modern Alberta office" 
                className="rounded-2xl shadow-2xl w-full h-auto"
                data-testid="hero-image"
              />
              <Card className="absolute -bottom-6 -right-6 shadow-lg border-0">
                <CardContent className="p-6 bg-white/90 dark:bg-gray-900/80 border-gray-200 dark:border-gray-700">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-success-green rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-rich-black dark:text-white" data-testid="hero-status">Active Development</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </VenomBeam>

      {/* Interactive 3D Section */}
      <section className="py-20 bg-gradient-to-br from-tech-blue/5 to-innovation-purple/5 dark:from-tech-blue/10 dark:to-innovation-purple/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 animate-fadeIn">
            <h2 className="text-4xl lg:text-5xl font-bold font-display" data-testid="spline-title">
              Experience Innovation
            </h2>
            <p className="text-xl text-professional-grey dark:text-gray-300 max-w-3xl mx-auto" data-testid="spline-description">
              Interact with our 3D showcase to explore the cutting-edge technology we bring to every project.
            </p>
          </div>
          
          <div className="relative h-[600px] rounded-2xl overflow-hidden bg-white dark:bg-gray-900 shadow-2xl" data-testid="spline-container">
            <Spline
              scene="https://prod.spline.design/9mHsL1CzLn9iXY83/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
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
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index} 
                  className={`group bg-gradient-to-br ${service.gradient} p-8 hover:shadow-xl transition-all duration-300 border-0 animate-fadeIn`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-0 space-y-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${service.iconGradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className="text-white w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3 font-display" data-testid={`service-title-${index}`}>
                        {service.title}
                      </h3>
                      <p className="text-professional-grey" data-testid={`service-description-${index}`}>
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
