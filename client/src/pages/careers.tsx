import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Users, Briefcase } from "lucide-react";

export default function Careers() {
  const jobOpenings = [
    {
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Join our team to build cutting-edge web applications using React, Node.js, and modern development practices."
    },
    {
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      description: "Drive digital marketing strategies, campaign management, and help grow our client base."
    }
  ];

  const benefits = [
    {
      icon: MapPin,
      title: "Flexible Work",
      description: "All positions are fully remote - work from the comfort of your home and from anywhere"
    },
    {
      icon: Clock,
      title: "Work-Life Balance",
      description: "Flexible hours and generous PTO policy"
    },
    {
      icon: Users,
      title: "Great Team",
      description: "Collaborative environment with experienced professionals"
    },
    {
      icon: Briefcase,
      title: "Growth Opportunities",
      description: "Professional development and learning opportunities"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 py-20 bg-gradient-to-br from-tech-blue/5 to-innovation-purple/5" data-testid="careers-hero">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold font-display" data-testid="careers-title">
              Join Our Team
            </h1>
            <p className="text-xl text-professional-grey max-w-3xl mx-auto" data-testid="careers-description">
              Build the future with us. We're looking for talented individuals who are passionate about technology and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Company Stats Section */}
      <section className="py-16 bg-gradient-to-r from-tech-blue to-innovation-purple">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-display text-white mb-4">Growing Together</h2>
            <p className="text-blue-100 text-lg">Building the future, one project at a time</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-white mb-1">100+</div>
              <div className="text-blue-100 text-sm">Projects Delivered</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-white mb-1">50+</div>
              <div className="text-blue-100 text-sm">Happy Clients</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-white mb-1">24h</div>
              <div className="text-blue-100 text-sm">Response Time</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-3xl font-bold text-white mb-1">100%</div>
              <div className="text-blue-100 text-sm">Remote First</div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold font-display mb-6">Our Culture</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-success-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-rich-black mb-1">Innovation First</h3>
                    <p className="text-professional-grey">We encourage creative thinking and embrace new technologies</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-tech-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-rich-black mb-1">Collaborative Environment</h3>
                    <p className="text-professional-grey">Work alongside talented professionals who support each other</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-innovation-purple rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-rich-black mb-1">Growth Mindset</h3>
                    <p className="text-professional-grey">Continuous learning and professional development opportunities</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-tech-blue/20 to-innovation-purple/20 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute inset-0">
                  <div className="absolute top-4 right-4 w-32 h-32 bg-tech-blue/10 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-8 left-8 w-24 h-24 bg-innovation-purple/10 rounded-full blur-2xl"></div>
                </div>
                
                <div className="relative z-10">
                  <div className="text-6xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold font-display mb-3">Ready to Launch Your Career?</h3>
                  <p className="text-professional-grey mb-6">Join a team that values innovation, creativity, and personal growth. Let's build something amazing together.</p>
                  
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-tech-blue/10 text-tech-blue rounded-full text-sm font-medium">Remote-First</span>
                    <span className="px-3 py-1 bg-success-green/10 text-success-green rounded-full text-sm font-medium">Flexible Hours</span>
                    <span className="px-3 py-1 bg-innovation-purple/10 text-innovation-purple rounded-full text-sm font-medium">Growth Opportunities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold font-display" data-testid="benefits-title">Why Work With Us</h2>
            <p className="text-lg text-professional-grey">
              We believe in creating an environment where our team can thrive
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="text-center p-6">
                  <CardContent className="p-0 space-y-4">
                    <div className="w-12 h-12 bg-tech-blue/10 rounded-xl flex items-center justify-center mx-auto">
                      <Icon className="w-6 h-6 text-tech-blue" />
                    </div>
                    <h3 className="text-lg font-semibold" data-testid={`benefit-title-${index}`}>
                      {benefit.title}
                    </h3>
                    <p className="text-professional-grey text-sm" data-testid={`benefit-description-${index}`}>
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold font-display" data-testid="openings-title">Current Openings</h2>
            <p className="text-lg text-professional-grey">
              Explore opportunities to grow your career with us
            </p>
          </div>
          
          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2" data-testid={`job-title-${index}`}>
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-2">
                        <Badge variant="secondary">{job.department}</Badge>
                        <Badge variant="outline">{job.type}</Badge>
                        <Badge variant="outline" className="text-tech-blue border-tech-blue">
                          <MapPin className="w-3 h-3 mr-1" />
                          {job.location}
                        </Badge>
                      </div>
                    </div>
                    <Button className="bg-tech-blue hover:bg-blue-600 text-white mt-4 md:mt-0" data-testid={`apply-button-${index}`}>
                      Apply Now
                    </Button>
                  </div>
                  <p className="text-professional-grey" data-testid={`job-description-${index}`}>
                    {job.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-display mb-6" data-testid="contact-title">
            Don't See the Right Role?
          </h2>
          <p className="text-lg text-professional-grey mb-8" data-testid="contact-description">
            We're always looking for talented people. Send us your resume and tell us how you'd like to contribute to our team.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-tech-blue to-innovation-purple text-white hover:shadow-lg"
            data-testid="contact-button"
          >
            Get In Touch
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}