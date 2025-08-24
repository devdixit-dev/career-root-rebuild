import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FileText, Users, CheckCircle, Plane, 
  GraduationCap, Globe, Shield, Star,
  MapPin, ExternalLink 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const StudyAbroad = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const workProcess = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "Free consultation to understand your goals, preferences, and academic background.",
      icon: Users,
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: 2,
      title: "Course & University Selection",
      description: "Expert guidance in choosing the right course and university based on your profile.",
      icon: GraduationCap,
      color: "from-green-500 to-emerald-500"
    },
    {
      step: 3,
      title: "Application Preparation",
      description: "Complete assistance with application forms, documents, and submission process.",
      icon: FileText,
      color: "from-purple-500 to-pink-500"
    },
    {
      step: 4,
      title: "Visa Processing",
      description: "Comprehensive visa guidance and documentation support for successful approval.",
      icon: Shield,
      color: "from-orange-500 to-red-500"
    },
    {
      step: 5,
      title: "Pre-Departure Support",
      description: "Essential briefings, accommodation assistance, and travel arrangements.",
      icon: Globe,
      color: "from-indigo-500 to-blue-500"
    },
    {
      step: 6,
      title: "Post-Arrival Assistance",
      description: "Continuous support after arrival including settlement and academic guidance.",
      icon: Plane,
      color: "from-teal-500 to-green-500"
    }
  ];

  const countries = [
    {
      id: 1,
      name: "United States",
      code: "US",
      flag: "🇺🇸",
      universities: "4000+",
      programs: "All Levels",
      intakeMonths: "Aug, Jan, May",
      description: "Home to world's top universities with diverse academic programs and research opportunities.",
      highlights: ["Silicon Valley Tech Hub", "Ivy League Universities", "Research Excellence", "Work Opportunities"]
    },
    {
      id: 2,
      name: "United Kingdom",
      code: "UK",
      flag: "🇬🇧",
      universities: "150+",
      programs: "All Levels",
      intakeMonths: "Sep, Jan, May",
      description: "Rich academic heritage with shorter degree duration and globally recognized qualifications.",
      highlights: ["Historic Universities", "1-Year Masters", "Post-Study Work Visa", "Cultural Diversity"]
    },
    {
      id: 3,
      name: "Canada",
      code: "CA",
      flag: "🇨🇦",
      universities: "200+",
      programs: "All Levels",
      intakeMonths: "Sep, Jan, May",
      description: "High-quality education with excellent post-graduation work opportunities and immigration pathways.",
      highlights: ["Immigration Friendly", "Quality Education", "Multicultural Society", "Work Permits"]
    },
    {
      id: 4,
      name: "Australia",
      code: "AU",
      flag: "🇦🇺",
      universities: "150+",
      programs: "All Levels",
      intakeMonths: "Feb, Jul",
      description: "World-class universities with strong industry connections and beautiful lifestyle.",
      highlights: ["High Living Standards", "Industry Connections", "Research Opportunities", "Beautiful Cities"]
    },
    {
      id: 5,
      name: "Germany",
      code: "DE",
      flag: "🇩🇪",
      universities: "400+",
      programs: "All Levels",
      intakeMonths: "Oct, Apr",
      description: "Engineering excellence with low-cost education and strong job market for graduates.",
      highlights: ["Engineering Hub", "Low/No Tuition Fees", "Strong Economy", "Research Focus"]
    },
    {
      id: 6,
      name: "France",
      code: "FR",
      flag: "🇫🇷",
      universities: "300+",
      programs: "All Levels",
      intakeMonths: "Sep, Feb",
      description: "Rich cultural heritage with excellent programs in arts, business, and engineering.",
      highlights: ["Cultural Capital", "Business Schools", "Art & Design", "EU Access"]
    },
    {
      id: 7,
      name: "Netherlands",
      code: "NL",
      flag: "🇳🇱",
      universities: "100+",
      programs: "All Levels",
      intakeMonths: "Sep, Feb",
      description: "High-quality English-taught programs with innovative teaching methods and international outlook.",
      highlights: ["English Programs", "Innovation Hub", "High Quality", "Liberal Society"]
    },
    {
      id: 8,
      name: "New Zealand",
      code: "NZ",
      flag: "🇳🇿",
      universities: "40+",
      programs: "All Levels",
      intakeMonths: "Feb, Jul",
      description: "World-class education in a safe, friendly environment with stunning natural beauty.",
      highlights: ["Safe Environment", "Natural Beauty", "Quality Education", "Adventure Sports"]
    },
    {
      id: 9,
      name: "Singapore",
      code: "SG",
      flag: "🇸🇬",
      universities: "30+",
      programs: "All Levels",
      intakeMonths: "Aug, Jan",
      description: "Gateway to Asia with top-ranked universities and excellent business opportunities.",
      highlights: ["Asian Hub", "Business Opportunities", "Modern Infrastructure", "Cultural Diversity"]
    },
    {
      id: 10,
      name: "Ireland",
      code: "IE",
      flag: "🇮🇪",
      universities: "50+",
      programs: "All Levels",
      intakeMonths: "Sep, Jan",
      description: "Friendly culture with strong tech industry presence and EU membership benefits.",
      highlights: ["Tech Industry", "EU Benefits", "Friendly Culture", "English Speaking"]
    },
    {
      id: 11,
      name: "Sweden",
      code: "SE",
      flag: "🇸🇪",
      universities: "50+",
      programs: "All Levels",
      intakeMonths: "Aug, Jan",
      description: "Innovation-focused education with high living standards and excellent work-life balance.",
      highlights: ["Innovation Focus", "High Living Standards", "Sustainability", "Work-Life Balance"]
    },
    {
      id: 12,
      name: "Switzerland",
      code: "CH",
      flag: "🇨🇭",
      universities: "30+",
      programs: "All Levels",
      intakeMonths: "Sep, Feb",
      description: "World-renowned education system with strong focus on research and development.",
      highlights: ["Research Excellence", "High Quality", "Beautiful Landscapes", "Multilingual Environment"]
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
              Study Abroad
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your future with world-class international education opportunities
            </p>
          </div>
        </section>

        {/* Work Process */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
                Our Work Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A systematic approach to ensure your successful journey to international education
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {workProcess.map((process) => {
                const Icon = process.icon;
                return (
                  <Card key={process.step} className="group hover-lift bg-card border border-border shadow-md hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${process.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="w-8 h-8 mx-auto mb-4 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                        {process.step}
                      </div>
                      <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                        {process.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {process.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Countries We Represent */}
        <section className="py-20 bg-subtle-gradient">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
                Countries We Represent
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Explore study opportunities in top educational destinations worldwide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {countries.map((country) => (
                <Card 
                  key={country.id} 
                  className="group hover-lift bg-card border border-border shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedCountry(country)}
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {country.flag}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                      {country.name}
                    </h3>
                    <div className="space-y-2 text-sm text-muted-foreground mb-4">
                      <p><span className="font-medium">Universities:</span> {country.universities}</p>
                      <p><span className="font-medium">Intakes:</span> {country.intakeMonths}</p>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {country.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default StudyAbroad;