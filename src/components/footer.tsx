import { Link } from "react-router-dom"
import { MapPin, Phone, Mail, Globe, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "What We Offer", href: "/services" },
    { name: "Study Abroad", href: "/study-abroad" },
    { name: "Contact Us", href: "/contact" },
  ]

  const countries = [
    "United States", "United Kingdom", "Canada", "Australia",
    "Germany", "France", "Netherlands", "New Zealand",
    "Singapore", "Ireland", "Sweden", "Switzerland"
  ]

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-6">
              <div>
                <h3 className="text-xl font-bold">Career Root</h3>
                <p className="text-sm opacity-80">Education & Career Solutions</p>
              </div>
            </div>
            <p className="text-sm opacity-90 leading-relaxed">
              Your trusted partner for international education and career opportunities. 
              Connecting students with world-class universities and professionals with global careers.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <nav className="space-y-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-sm opacity-90 hover:opacity-100 hover:text-accent transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-6">Contact Details</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 opacity-80" />
                <div className="text-sm opacity-90">
                  <p>26, Haribhakti Society</p>
                  <p>5, Samarpan Society</p>
                  <p>Race Course Rd</p>
                  <p>Vadodara - 390007</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 opacity-80" />
                <a href="tel:+917778978988" className="text-sm opacity-90">+91 77789 78988</a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 opacity-80" />
                <a href="mailto:study@gogpl.in" className="text-sm opacity-90">study@gogpl.in</a>
              </div>
              {/* <div className="flex items-center space-x-3">
                <Globe className="h-5 w-5 opacity-80" />
                <span className="text-sm opacity-90">www.careerroot.com</span>
              </div> */}
            </div>
          </div>

          {/* Countries */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mb-6">Countries We Serve</h4>
            <div className="grid grid-cols-1 gap-2">
              {countries.map((country) => (
                <span key={country} className="text-sm opacity-90 hover:opacity-100 hover:text-accent transition-colors cursor-pointer">
                  {country}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-primary-foreground/20" />
      
      {/* Copyright */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-80">
          <p>© 2025 Career Root. All rights reserved.</p>
          {/* <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Cookie Policy</a>
          </div> */}
        </div>
      </div>
    </footer>
  )
}