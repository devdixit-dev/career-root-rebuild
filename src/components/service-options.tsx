import { GraduationCap, BookOpen, Users, Briefcase, Building } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const services = [
  {
    id: 1,
    title: "Short Term Courses",
    description: "Professional development and skill enhancement programs for career advancement",
    icon: BookOpen,
    image: "/api/placeholder/400/250",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    title: "Diploma/Pathway Programs",
    description: "Foundation and pathway programs leading to bachelor's and master's degrees",
    icon: GraduationCap,
    image: "/api/placeholder/400/250",
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 3,
    title: "Bachelor's Studies",
    description: "Comprehensive undergraduate programs in top universities worldwide",
    icon: Users,
    image: "/api/placeholder/400/250",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 4,
    title: "Master's Studies",
    description: "Advanced graduate programs for specialized knowledge and research",
    icon: Building,
    image: "/api/placeholder/400/250",
    color: "from-orange-500 to-red-500"
  }
]

export function ServiceOptions() {
  return (
    <section className="py-20 bg-subtle-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive education and career solutions tailored to your goals and aspirations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card 
                key={service.id} 
                className="group hover-lift bg-card border border-border shadow-md hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-0">
                  {/* Image Placeholder with Icon */}
                  <div className={`h-48 bg-gradient-to-br ${service.color} flex items-center justify-center relative overflow-hidden`}>
                    <Icon className="h-16 w-16 text-white/80" />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
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
            )
          })}
        </div>
      </div>
    </section>
  )
}