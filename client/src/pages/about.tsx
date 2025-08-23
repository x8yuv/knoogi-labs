import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Building, Linkedin, Twitter, Github } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  const founders = [
    {
      name: "Deepika Misra",
      role: "Co-Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      description: "Deepika brings over 8 years of experience in technology leadership and business strategy. She specializes in AI implementation and digital transformation, helping businesses leverage cutting-edge technology for growth.",
      color: "tech-blue",
      socials: [
        { icon: Linkedin, href: "#" },
        { icon: Twitter, href: "#" }
      ]
    },
    {
      name: "Yuvraj Manchanda",
      role: "Co-Founder & CTO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      description: "Yuvraj is a full-stack developer and technology architect with expertise in scalable systems and modern development frameworks. He leads our technical vision and ensures delivery of high-quality solutions.",
      color: "innovation-purple",
      socials: [
        { icon: Linkedin, href: "#" },
        { icon: Github, href: "#" }
      ]
    }
  ];

  const milestones = [
    {
      year: "2019",
      title: "Company Founded",
      description: "Knoogi Labs was established in Alberta with a vision to bridge technology and business needs."
    },
    {
      year: "2020",
      title: "First Major Client",
      description: "Secured our first enterprise client and delivered a successful AI implementation project."
    },
    {
      year: "2021",
      title: "Team Expansion",
      description: "Grew our team to include specialists in mobile development and digital marketing."
    },
    {
      year: "2022",
      title: "AI Focus",
      description: "Expanded our AI capabilities with machine learning and automation solutions."
    },
    {
      year: "2023",
      title: "50+ Projects",
      description: "Reached the milestone of 50+ successful project deliveries across Canada."
    },
    {
      year: "2024",
      title: "Innovation Award",
      description: "Recognized as one of Alberta's top innovative technology companies."
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
              Founded in Alberta, Canada, we're passionate about creating innovative solutions that drive business growth and technological advancement.
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 animate-fadeIn">
              <h2 className="text-4xl font-bold font-display" data-testid="mission-title">Our Mission</h2>
              <p className="text-lg text-professional-grey leading-relaxed" data-testid="mission-text-1">
                At Knoogi Labs, we believe in the power of technology to transform businesses and improve lives. Our team combines technical expertise with creative innovation to deliver solutions that exceed expectations and drive real results.
              </p>
              <p className="text-lg text-professional-grey leading-relaxed" data-testid="mission-text-2">
                Based in the heart of Alberta, we understand the unique challenges and opportunities that Canadian businesses face in the digital landscape. We're committed to helping our clients succeed with cutting-edge technology and personalized service.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                <Card className="text-center p-6 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-center mb-2">
                      <Calendar className="w-6 h-6 text-tech-blue mr-2" />
                      <div className="text-3xl font-bold text-tech-blue font-display" data-testid="founded-year">2019</div>
                    </div>
                    <div className="text-professional-grey">Founded</div>
                  </CardContent>
                </Card>
                <Card className="text-center p-6 shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-center mb-2">
                      <Building className="w-6 h-6 text-innovation-purple mr-2" />
                      <div className="text-3xl font-bold text-innovation-purple font-display" data-testid="headquarters">Alberta</div>
                    </div>
                    <div className="text-professional-grey">Headquarters</div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="relative animate-fadeIn">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Modern office workspace with collaborative areas and natural lighting" 
                className="rounded-2xl shadow-2xl w-full h-auto"
                data-testid="office-image"
              />
              <Card className="absolute top-6 right-6 shadow-lg border-0">
                <CardContent className="p-3">
                  <div className="flex items-center space-x-2">
                    <MapPin className="text-success-green w-4 h-4" />
                    <span className="text-sm font-medium" data-testid="office-location">Alberta, Canada</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 gradient-overlay">
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
                  <div className="flex justify-center space-x-4">
                    {founder.socials.map((social, socialIndex) => {
                      const SocialIcon = social.icon;
                      return (
                        <a 
                          key={socialIndex} 
                          href={social.href} 
                          className={`text-professional-grey hover:text-${founder.color} transition-colors`}
                          data-testid={`founder-social-${index}-${socialIndex}`}
                        >
                          <SocialIcon className="w-5 h-5" />
                        </a>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16 animate-fadeIn">
            <h2 className="text-4xl font-bold font-display" data-testid="timeline-title">Our Journey</h2>
            <p className="text-xl text-professional-grey max-w-3xl mx-auto" data-testid="timeline-description">
              From humble beginnings to becoming a leading development firm in Alberta.
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
      <section className="py-20 gradient-overlay">
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
