import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
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
      <section className="min-h-screen pt-16 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900 relative overflow-hidden" data-testid="hero-section">
        {/* Animated background cubes */}
        <div className="absolute inset-0 opacity-20">
          <div className="cube-float absolute top-20 right-20 w-16 h-16 bg-tech-blue rounded-lg animate-bounce" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
          <div className="cube-float absolute top-40 right-40 w-12 h-12 bg-innovation-purple rounded-lg animate-bounce" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
          <div className="cube-float absolute top-60 right-60 w-20 h-20 bg-success-green rounded-lg animate-bounce" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
          <div className="cube-float absolute bottom-40 right-32 w-14 h-14 bg-tech-blue rounded-lg animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '3.5s' }}></div>
          <div className="cube-float absolute bottom-20 right-16 w-18 h-18 bg-innovation-purple rounded-lg animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '4.5s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl space-y-8 z-10 relative">
            <div className="space-y-6">
              <div className="flex items-center space-x-2 text-success-green">
                <CheckCircle className="w-4 h-4" />
                <span className="text-sm font-medium text-rich-black dark:text-white" data-testid="hero-location">From Alberta, Canada</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight font-display text-rich-black dark:text-white">
                Innovation Meets{" "}
                <span className="bg-gradient-to-r from-tech-blue to-innovation-purple bg-clip-text text-transparent">
                  Excellence
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-professional-grey dark:text-gray-300 leading-relaxed">
                Knoogi Labs delivers cutting-edge technology solutions from Alberta, Canada. 
                We specialize in AI development, custom applications, and digital transformation 
                that drives real business results.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-tech-blue text-white hover:bg-blue-600 font-semibold text-lg px-8 py-4"
                  data-testid="hero-get-started"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/services">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="font-semibold border-2 border-tech-blue text-tech-blue hover:bg-tech-blue hover:text-white text-lg px-8 py-4"
                  data-testid="hero-view-services"
                >
                  View Our Services
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center space-x-8 pt-8">
              {stats.map(({ value, label }, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-rich-black dark:text-white font-display" data-testid={`stat-value-${index}`}>
                    {value}
                  </div>
                  <div className="text-sm text-professional-grey dark:text-gray-300" data-testid={`stat-label-${index}`}>
                    {label}
                  </div>
                </div>
              ))}
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
