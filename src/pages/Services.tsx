import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { 
  BookOpen, GraduationCap, Users, Briefcase, Building, 
  Globe, FileText, UserCheck, Headphones, Shield, 
  TrendingUp, Award, Clock, CheckCircle, Star 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "University Selection Guidance",
      description: "Expert assistance in choosing the right university based on your academic profile and career goals.",
      icon: Building,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Application Processing",
      description: "Complete support for university applications including document preparation and submission.",
      icon: FileText,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: "Visa Consultation",
      description: "Comprehensive visa guidance and documentation support for student and work visas.",
      icon: Shield,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      title: "Career Counseling",
      description: "Professional career guidance to help you make informed decisions about your future.",
      icon: TrendingUp,
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Scholarship Assistance",
      description: "Help you find and apply for scholarships and financial aid opportunities.",
      icon: Award,
      color: "from-indigo-500 to-blue-500"
    },
    {
      id: 6,
      title: "Test Preparation",
      description: "Comprehensive coaching for IELTS, TOEFL, GRE, GMAT, and other standardized tests.",
      icon: BookOpen,
      color: "from-teal-500 to-green-500"
    },
    {
      id: 7,
      title: "Pre-Departure Briefing",
      description: "Essential information and orientation sessions before you travel to your destination.",
      icon: Globe,
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 8,
      title: "Accommodation Support",
      description: "Assistance in finding suitable accommodation options in your destination country.",
      icon: Building,
      color: "from-yellow-500 to-orange-500"
    },
    {
      id: 9,
      title: "Post-Arrival Services",
      description: "Continued support after arrival including airport pickup and initial settlement assistance.",
      icon: UserCheck,
      color: "from-cyan-500 to-blue-500"
    },
    {
      id: 10,
      title: "Language Training",
      description: "English language training programs to improve your communication skills.",
      icon: Users,
      color: "from-violet-500 to-purple-500"
    },
    {
      id: 11,
      title: "Interview Preparation",
      description: "Mock interviews and coaching to help you succeed in university and visa interviews.",
      icon: Headphones,
      color: "from-emerald-500 to-teal-500"
    },
    {
      id: 12,
      title: "Document Attestation",
      description: "Complete document verification and attestation services for international use.",
      icon: CheckCircle,
      color: "from-rose-500 to-pink-500"
    },
    {
      id: 13,
      title: "Work Permit Assistance",
      description: "Support for obtaining work permits and employment authorization in destination countries.",
      icon: Briefcase,
      color: "from-blue-600 to-indigo-600"
    },
    {
      id: 14,
      title: "Alumni Network",
      description: "Connect with our extensive alumni network for mentorship and career opportunities.",
      icon: Users,
      color: "from-green-600 to-emerald-600"
    },
    {
      id: 15,
      title: "24/7 Support",
      description: "Round-the-clock assistance and emergency support for all our students abroad.",
      icon: Clock,
      color: "from-purple-600 to-violet-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-subtle-gradient">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              What We Offer
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive education and career services designed to support you at every step of your journey
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Card 
                    key={service.id} 
                    className="group hover-lift bg-card border border-border shadow-md hover:shadow-xl transition-all duration-300"
                  >
                    <CardContent className="p-0">
                      {/* Icon Header */}
                      <div className={`h-32 bg-gradient-to-br ${service.color} flex items-center justify-center relative overflow-hidden`}>
                        <Icon className="h-12 w-12 text-white/90 group-hover:scale-110 transition-transform duration-300" />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors" />
                      </div>
                      
                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {service.description}
                        </p>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all"
                        >
                          Learn More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let our experienced consultants guide you through every step of your international education journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90"
              >
                <Star className="mr-2 h-5 w-5" />
                Book Free Consultation
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <Headphones className="mr-2 h-5 w-5" />
                Contact Our Experts
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;