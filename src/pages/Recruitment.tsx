import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { 
  Users, Globe, TrendingUp, Shield, Award, 
  CheckCircle, Target, Building, Briefcase,
  MapPin, Phone, Mail, Star
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Recruitment = () => {
  const services = [
    {
      id: 1,
      title: "International Talent Acquisition",
      description: "Global recruitment services connecting companies with top-tier international talent across various industries.",
      icon: Users,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Executive Search",
      description: "Specialized executive recruitment for C-level and senior management positions worldwide.",
      icon: Target,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      title: "Technical Staffing",
      description: "Expert recruitment for IT, engineering, healthcare, and other technical professionals.",
      icon: Building,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      title: "Bulk Recruitment",
      description: "Large-scale recruitment solutions for companies requiring multiple hires across various positions.",
      icon: Globe,
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "Contract Staffing",
      description: "Flexible staffing solutions for project-based and temporary employment requirements.",
      icon: Briefcase,
      color: "from-indigo-500 to-blue-500"
    },
    {
      id: 6,
      title: "Payroll Management",
      description: "Comprehensive payroll and HR administration services for international employees.",
      icon: CheckCircle,
      color: "from-teal-500 to-green-500"
    }
  ];

  const asiaAdvantages = [
    {
      title: "Cost-Effective Solutions",
      description: "Significantly lower recruitment and operational costs compared to Western markets while maintaining high quality standards.",
      icon: TrendingUp
    },
    {
      title: "Highly Skilled Workforce",
      description: "Access to a vast pool of educated, technically skilled, and English-proficient professionals.",
      icon: Award
    },
    {
      title: "Cultural Adaptability",
      description: "Asian professionals are known for their adaptability, work ethic, and ability to integrate into diverse work environments.",
      icon: Users
    },
    {
      title: "Time Zone Advantages",
      description: "Strategic positioning for 24/7 operations and extended business hours coverage across global markets.",
      icon: Globe
    },
    {
      title: "Strong Educational Foundation",
      description: "World-class educational institutions producing highly qualified graduates in STEM, business, and other fields.",
      icon: Building
    },
    {
      title: "Technology Expertise",
      description: "Leading expertise in emerging technologies, digital transformation, and innovative business solutions.",
      icon: Shield
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
              International Recruitment Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Connecting global businesses with exceptional talent from Asia and beyond
            </p>
          </div>
        </section>

        {/* Our Services */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
                Our Recruitment Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive recruitment solutions tailored to meet your specific business needs
              </p>
            </div>

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
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* International Recruitment from Asia */}
        <section className="py-20 bg-subtle-gradient">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
                Why Recruit from Asia?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Asia has emerged as a global talent powerhouse, offering exceptional professionals 
                with world-class skills and competitive advantages for international businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {asiaAdvantages.map((advantage, index) => {
                const Icon = advantage.icon;
                return (
                  <Card key={index} className="group hover-lift bg-card border border-border shadow-md hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                        {advantage.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {advantage.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Key Statistics */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
                Our Recruitment Success
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Proven track record of successful international placements
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center p-8 bg-primary text-primary-foreground hover-lift">
                <CardContent className="p-0">
                  <div className="text-4xl font-bold mb-2">5000+</div>
                  <div className="text-lg opacity-90">Successful Placements</div>
                </CardContent>
              </Card>
              <Card className="text-center p-8 bg-accent text-accent-foreground hover-lift">
                <CardContent className="p-0">
                  <div className="text-4xl font-bold mb-2">200+</div>
                  <div className="text-lg opacity-90">Client Companies</div>
                </CardContent>
              </Card>
              <Card className="text-center p-8 bg-success text-success-foreground hover-lift">
                <CardContent className="p-0">
                  <div className="text-4xl font-bold mb-2">15+</div>
                  <div className="text-lg opacity-90">Countries Served</div>
                </CardContent>
              </Card>
              <Card className="text-center p-8 bg-muted text-muted-dark hover-lift">
                <CardContent className="p-0">
                  <div className="text-4xl font-bold mb-2">95%</div>
                  <div className="text-lg opacity-90">Client Satisfaction</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Recruitment;