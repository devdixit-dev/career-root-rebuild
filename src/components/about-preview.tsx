import { ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Link } from "react-router-dom"

export function AboutPreview() {
  const highlights = [
    "15+ Years of Experience",
    "50+ Partner Universities",
    "1000+ Successful Placements",
    "24/7 Student Support"
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-foreground">
                About Career Root
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent rounded"></div>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Career Root is a leading international education consultancy and recruitment firm 
              dedicated to bridging the gap between ambitious students and world-class educational 
              opportunities. With over 15 years of experience, we have successfully guided thousands 
              of students in achieving their academic and career goals.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Our comprehensive services span from initial consultation to post-graduation support, 
              ensuring that every student receives personalized guidance throughout their educational journey. 
              We maintain strong partnerships with prestigious universities and institutions worldwide.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <span className="text-foreground font-medium">{highlight}</span>
                </div>
              ))}
            </div>
            {/* <a href="/about-us" target="_blank">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground group">
              Learn More About Us
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            </a> */}
          </div>

          {/* Image & Stats */}
          <div className="space-y-6">
            {/* Main Image Placeholder */}
            <Card className="overflow-hidden shadow-lg">
              <div className="h-80 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/30 flex items-center justify-center">
                <div className="text-center text-primary">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-3xl font-bold">CR</span>
                  </div>
                  <p className="text-lg font-semibold">Career Root Team</p>
                  <p className="text-sm opacity-75">Dedicated to Your Success</p>
                </div>
              </div>
            </Card>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center p-6 bg-primary text-primary-foreground">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold mb-1">98%</div>
                  <div className="text-sm opacity-90">Success Rate</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6 bg-accent text-accent-foreground">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold mb-1">25+</div>
                  <div className="text-sm opacity-90">Countries</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}