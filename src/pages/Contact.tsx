import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { useState } from "react";
import {
  MapPin, Phone, Mail, Clock, Send,
  User, MessageCircle, Globe, Building
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    service: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // You would typically send this data to your backend
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Address",
      details: [
        "26, Haribhakti Society, 5, Samarpan Society",
        "Race Course Rd, Vadodara",
        "Gujarat 390007"
      ]
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: [
        "Main Office: +91 79840 99069"
      ]
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: [
        "General: hello@careerroot.in"
      ]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9:00 AM - 5:00 PM",
        "Saturday: 10:00 AM - 5:00 PM",
        "Sunday: Closed"
      ]
    }
  ];

  const services = [
    "Study Abroad Consultation",
    "University Application",
    "Visa Assistance",
    "Career Counseling",
    "International Recruitment",
    "HR Staffing Solutions",
    "Test Preparation",
    "Scholarship Guidance",
    "Other"
  ];

  const countries = [
    "United States", "United Kingdom", "Canada", "Australia",
    "Germany", "France", "Netherlands", "New Zealand",
    "Singapore", "Ireland", "Sweden", "Switzerland", "Other"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-subtle-gradient">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get in touch with our expert consultants for personalized guidance on your education and career journey
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <Card className="shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                      <MessageCircle className="mr-3 h-6 w-6 text-primary" />
                      Send Us a Message
                    </CardTitle>
                    <p className="text-muted-foreground">
                      Fill out the form below and we'll get back to you within 24 hours.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name Fields */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                            className="mt-1"
                          />
                        </div>
                      </div>

                      {/* Email & Phone */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="mt-1"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="mt-1"
                          />
                        </div>
                      </div>

                      {/* Country & Service */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="country">Country of Interest</Label>
                          <Select onValueChange={(value) => handleSelectChange("country", value)}>
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Select a country" />
                            </SelectTrigger>
                            <SelectContent>
                              {countries.map((country) => (
                                <SelectItem key={country} value={country}>
                                  {country}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label htmlFor="service">Service Required *</Label>
                          <Select onValueChange={(value) => handleSelectChange("service", value)}>
                            <SelectTrigger className="mt-1">
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                              {services.map((service) => (
                                <SelectItem key={service} value={service}>
                                  {service}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={5}
                          className="mt-1"
                          placeholder="Please describe your requirements or questions..."
                        />
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                        size="lg"
                      >
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-4 text-foreground">
                    Get in Touch
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    We're here to help you achieve your educational and career goals.
                    Reach out to us through any of the following channels.
                  </p>
                </div>

                {/* Contact Info Cards */}
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <Card key={index} className="hover-lift bg-card border border-border shadow-md hover:shadow-lg transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                              <Icon className="h-6 w-6 text-white" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold mb-2 text-foreground">
                                {info.title}
                              </h3>
                              <div className="space-y-1">
                                {info.details.map((detail, idx) => (
                                  <p key={idx} className="text-muted-foreground">
                                    {detail}
                                  </p>
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section Placeholder */}
        <section className="py-20 bg-subtle-gradient">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-foreground">
                Visit Our Office
              </h2>
              <p className="text-lg text-muted-foreground">
                Located in the heart of the business district for easy accessibility
              </p>
            </div>

            <Card className="overflow-hidden shadow-lg">
              <div className="h-96 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/30 flex items-center justify-center">
                <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg">
                  <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.112684015122!2d73.162845!3d22.306958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8bac7291a3b%3A0x517c93b57be2a8db!2sVadodara!5e0!3m2!1sen!2sin!4v1690567891234!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;