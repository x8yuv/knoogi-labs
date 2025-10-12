import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Building, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import yuvrajPhoto from "@assets/IMG_7245_1755975266928.jpg";
import deepikaPhoto from "@assets/Screenshot_20250823-125352_1755975358809.png";

export default function About() {
  const founders = [
    {
      name: "Deepika Misra",
      role: "Co-Founder & CEO",
      image: deepikaPhoto,
      description: "Deepika leads Knoogi Labs with a passion for creating technology that solves real-world problems. She drives the vision behind platforms like Immigrid and Satori.care, making essential services more accessible to Canadians.",
      color: "tech-blue"
    },
    {
      name: "Yuvraj Manchanda",
      role: "Co-Founder & CTO",
      image: yuvrajPhoto,
      description: "Yuvraj architects the technical infrastructure behind platforms like Immigrid and Satori.care, ensuring scalable and user-friendly solutions. His expertise in AI and modern development brings innovative ideas to life.",
      color: "innovation-purple"
    }
  ];

  const milestones = [
    {
      year: "2023",
      title: "Immigrid Platform Launch",
      description: "Launched Immigrid.com, an AI-powered immigration directory that helps newcomers find immigration consultants and lawyers across Canada."
    },
    {
      year: "2024",
      title: "Satori.care Launch",
      description: "Introduced Satori.care, a mental health and wellness platform helping people find balance through accessible therapy and psychological support."
    },
    {
      year: "2024",
      title: "AI Innovation",
      description: "Integrated advanced AI technologies across our platforms to enhance user experience and streamline service discovery."
    },
    {
      year: "2025",
      title: "Expanding Impact",
      description: "Continuing to develop innovative solutions that make immigration and mental health services more accessible to Canadians."
    }
  ];

  const platforms = [
    {
      name: "Immigrid",
      url: "https://immigrid.com",
      description: "An AI-powered immigration directory that helps newcomers find immigration consultants, lawyers, and essential services across Canada. Making the search for the right immigration expert simple and efficient.",
      tagline: "Your #1 Immigration Directory",
      color: "tech-blue"
    },
    {
      name: "Satori.care",
      url: "https://satori.care",
      description: "A mental health and wellness platform dedicated to helping individuals find balance through accessible therapy and psychological support services.",
      tagline: "Find Balance",
      color: "innovation-purple"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 gradient-overlay">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-6 animate-fadeIn">
            <h1 className="text-5xl lg:text-6xl font-bold font-display" data-testid="about-title">
              About{" "}
              <span className="bg-gradient-to-r from-tech-blue to-innovation-purple bg-clip-text text-transparent">
                Knoogi Labs
              </span>
            </h1>
            <p className="text-xl text-professional-grey max-w-3xl mx-auto leading-relaxed" data-testid="about-subtitle">
              We build AI-powered platforms that make essential services more accessible. From immigration to mental health, we're transforming how Canadians connect with the support they need.
            </p>
            <div className="flex items-center justify-center space-x-2 text-tech-blue">
              <MapPin className="w-5 h-5" />
              <span className="font-medium" data-testid="about-location">Alberta, Canada</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fadeIn">
            <h2 className="text-4xl font-bold font-display" data-testid="mission-title">Our Mission</h2>
            <p className="text-lg text-professional-grey leading-relaxed" data-testid="mission-text-1">
              At Knoogi Labs, we believe technology should make essential services accessible to everyone. We've built platforms like Immigrid and Satori.care to connect Canadians with the immigration and mental health support they need.
            </p>
            <p className="text-lg text-professional-grey leading-relaxed" data-testid="mission-text-2">
              Based in Alberta, we leverage AI and modern technology to break down barriers. Our platforms serve thousands of users, from newcomers navigating Canadian immigration to individuals seeking mental wellness support.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 animate-fadeIn">
            <h2 className="text-4xl font-bold font-display" data-testid="founders-title">Meet Our Founders</h2>
            <p className="text-xl text-professional-grey max-w-3xl mx-auto" data-testid="founders-description">
              The visionary leaders behind Knoogi Labs, bringing together decades of experience in technology and business.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {founders.map((founder, index) => (
              <Card 
                key={index} 
                className="bg-white p-8 shadow-lg text-center hover:shadow-xl transition-all duration-300 animate-fadeIn"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-0 space-y-6">
                  <img 
                    src={founder.image} 
                    alt={`Professional portrait of ${founder.name}`} 
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                    data-testid={`founder-image-${index}`}
                  />
                  <div>
                    <h3 className="text-2xl font-bold text-rich-black font-display" data-testid={`founder-name-${index}`}>
                      {founder.name}
                    </h3>
                    <p className={`text-${founder.color} font-semibold mt-1`} data-testid={`founder-role-${index}`}>
                      {founder.role}
                    </p>
                  </div>
                  <p className="text-professional-grey leading-relaxed" data-testid={`founder-description-${index}`}>
                    {founder.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Platforms Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 animate-fadeIn">
            <h2 className="text-4xl font-bold font-display" data-testid="platforms-title">Our Platforms</h2>
            <p className="text-xl text-professional-grey max-w-3xl mx-auto" data-testid="platforms-description">
              Innovative solutions that connect Canadians with essential services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {platforms.map((platform, index) => (
              <Card 
                key={index} 
                className="bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300 animate-fadeIn"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className={`text-3xl font-bold text-${platform.color} font-display`} data-testid={`platform-name-${index}`}>
                      {platform.name}
                    </h3>
                    <a 
                      href={platform.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`text-${platform.color} hover:underline font-medium`}
                      data-testid={`platform-link-${index}`}
                    >
                      Visit →
                    </a>
                  </div>
                  <p className="text-sm font-semibold text-professional-grey" data-testid={`platform-tagline-${index}`}>
                    {platform.tagline}
                  </p>
                  <p className="text-professional-grey leading-relaxed" data-testid={`platform-description-${index}`}>
                    {platform.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 gradient-overlay">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 animate-fadeIn">
            <h2 className="text-4xl font-bold font-display" data-testid="timeline-title">Our Journey</h2>
            <p className="text-xl text-professional-grey max-w-3xl mx-auto" data-testid="timeline-description">
              Building platforms that make a real difference in people's lives.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-tech-blue"></div>
            
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-8 animate-fadeIn`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className={`w-full max-w-md ${index % 2 === 0 ? 'mr-auto lg:mr-8' : 'ml-auto lg:ml-8'} shadow-lg hover:shadow-xl transition-shadow`}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-tech-blue to-innovation-purple rounded-full flex items-center justify-center text-white font-bold">
                        {milestone.year.slice(-2)}
                      </div>
                      <div>
                        <div className="text-lg font-bold text-tech-blue font-display" data-testid={`milestone-year-${index}`}>
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-bold text-rich-black" data-testid={`milestone-title-${index}`}>
                          {milestone.title}
                        </h3>
                      </div>
                    </div>
                    <p className="text-professional-grey" data-testid={`milestone-description-${index}`}>
                      {milestone.description}
                    </p>
                  </CardContent>
                </Card>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-tech-blue rounded-full border-4 border-white shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-tech-blue/10 to-innovation-purple/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center animate-fadeIn">
          <h2 className="text-4xl font-bold font-display mb-6" data-testid="cta-title">
            Ready to Work with Us?
          </h2>
          <p className="text-xl text-professional-grey mb-8 max-w-2xl mx-auto" data-testid="cta-description">
            Let's discuss how we can help bring your ideas to life with our expertise and Canadian values.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-tech-blue text-white hover:bg-blue-600 font-semibold"
                data-testid="cta-contact"
              >
                Get In Touch
              </Button>
            </Link>
            <Link href="/services">
              <Button 
                variant="outline" 
                size="lg" 
                className="font-semibold border-professional-grey text-professional-grey hover:border-tech-blue hover:text-tech-blue"
                data-testid="cta-services"
              >
                View Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
