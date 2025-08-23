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