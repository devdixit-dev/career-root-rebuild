import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CheckCircle, Users, Award, Clock, Shield, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import aboutTeamImage from "@/assets/about-team.jpg";

const About = () => {
  const whyChooseUs = [
    {
      icon: Users,
      title: "Experienced Consultants",
      description: "Our team consists of highly qualified education consultants with extensive experience in international admissions."
    },
    {
      icon: Award,
      title: "Customer Satisfaction",
      description: "We prioritize client satisfaction with personalized service and dedicated support throughout your journey."
    },
    {
      icon: Target,
      title: "One Stop Solution",
      description: "From initial consultation to visa processing and post-arrival support, we handle everything under one roof."
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description: "Each student is assigned a dedicated counselor who provides continuous guidance and support."
    },
    {
      icon: Shield,
      title: "Established Code of Ethics",
      description: "We maintain the highest standards of integrity and transparency in all our services and processes."
    },
    {
      icon: CheckCircle,
      title: "Quality Services",
      description: "Our comprehensive range of services ensures quality assistance at every step of your educational journey."
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
              About Career Root
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Empowering students and professionals to achieve their global education and career aspirations
            </p>
          </div>
        </section>

        {/* Know About Career Root */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
                    Know About Career Root
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded"></div>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Founded in 2009, Career Root has emerged as one of the leading international education 
                  consultancies, dedicated to bridging the gap between ambitious students and world-class 
                  educational opportunities. With our headquarters strategically located and a network of 
                  experienced consultants worldwide, we have successfully guided over 10,000 students 
                  in achieving their academic dreams.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Our journey began with a simple vision: to democratize access to quality international 
                  education. Over the years, we have built strong partnerships with prestigious universities 
                  across 25+ countries, ensuring that our students have access to the best educational 
                  opportunities available globally.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  What sets us apart is our holistic approach to education consulting. We don't just help 
                  with admissions; we provide comprehensive support from career counseling and university 
                  selection to visa processing and post-arrival assistance, ensuring a smooth transition 
                  for every student.
                </p>
              </div>

              <div className="space-y-6">
                <Card className="overflow-hidden shadow-lg">
                  <div className="h-80">
                    <img 
                      src={aboutTeamImage} 
                      alt="Career Root team of education consultants" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-subtle-gradient">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Our Mission */}
              <Card className="p-8 bg-primary text-primary-foreground hover-lift">
                <CardContent className="p-0 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-accent rounded-full flex items-center justify-center">
                    <Target className="h-8 w-8 text-accent-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                  <p className="text-primary-foreground/90 leading-relaxed">
                    To empower students and professionals by providing comprehensive, personalized guidance 
                    that opens doors to world-class educational opportunities and successful international careers. 
                    We are committed to making quality education accessible to all, regardless of their background 
                    or circumstances.
                  </p>
                </CardContent>
              </Card>

              {/* Our Vision */}
              <Card className="p-8 bg-accent text-accent-foreground hover-lift">
                <CardContent className="p-0 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-primary rounded-full flex items-center justify-center">
                    <Award className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                  <p className="text-accent-foreground/90 leading-relaxed">
                    To become the global leader in international education consulting, known for our integrity, 
                    innovation, and impact. We envision a world where geographical boundaries don't limit 
                    educational aspirations, and every student has the opportunity to pursue their dreams 
                    on a global stage.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
                Why Choose Career Root?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover what makes us the preferred choice for thousands of students worldwide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {whyChooseUs.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="group hover-lift bg-card border border-border shadow-md hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;