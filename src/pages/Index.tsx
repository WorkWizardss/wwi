import { useState } from "react";
import { ArrowRight, Globe, Smartphone, Settings, Package, Shield, Sparkles, Lightbulb, Clock, Users, Mail, Linkedin, Twitter, Instagram, Send, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
};

// Hero Section
const Hero = () => {
  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-background to-gray-50">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-6 animate-scale-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-200 mb-8">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-gray-700">Next-Gen Digital Solutions</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
              Work Wizards
            </span>
            <br />
            <span className="text-gray-800">Innovations</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto font-light">
            Innovating Web, Apps & Beyond
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              onClick={scrollToServices}
              className="group hover:shadow-xl transition-all duration-300"
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:bg-gray-100 transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-gray-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

// About Section
const About = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              About Us
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gray-300 via-gray-600 to-gray-300 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <h3 className="text-2xl font-semibold text-gray-800">
                Turning Ideas Into Digital Reality
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Work Wizards Innovations, we are a next-gen tech startup dedicated to providing innovative digital solutions that empower businesses and professionals.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our expertise spans custom web development, mobile app creation, ongoing technical support, and launching our own branded digital platforms that solve real-world problems.
              </p>
            </div>

            <div className="space-y-4 animate-slide-up">
              <div className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 hover:shadow-lg transition-all duration-300">
                <h4 className="font-semibold text-lg mb-2 text-gray-800">Our Mission</h4>
                <p className="text-muted-foreground">
                  To deliver cutting-edge digital solutions that drive innovation, efficiency, and growth for our clients and users.
                </p>
              </div>
              
              <div className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 hover:shadow-lg transition-all duration-300">
                <h4 className="font-semibold text-lg mb-2 text-gray-800">Our Vision</h4>
                <p className="text-muted-foreground">
                  To be the leading force in digital transformation, creating products and services that shape the future of technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Services Section
const Services = () => {
  const navigate = useNavigate();
  
  const services = [
    {
      icon: Globe,
      title: "Web Services",
      description: "Custom websites tailored for businesses and professionals with modern design and functionality.",
      path: "/services/web"
    },
    {
      icon: Smartphone,
      title: "App Development",
      description: "Native Android & iOS applications for business and personal use cases with seamless user experiences.",
      path: "/services/app"
    },
    {
      icon: Settings,
      title: "Maintenance & Support",
      description: "Ongoing technical support for your websites and apps to ensure optimal performance and reliability.",
      path: "/services/maintenance"
    },
    {
      icon: Package,
      title: "Our Products",
      description: "Innovative branded digital platforms designed to solve real-world problems and enhance productivity.",
      path: "/products"
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gray-300 via-gray-600 to-gray-300 mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions designed to elevate your business
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group border-gray-200 bg-card animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => navigate(service.path)}
            >
              <div className="mb-6 inline-flex p-4 rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 group-hover:from-gray-900 group-hover:to-gray-700 transition-all duration-300">
                <service.icon className="h-8 w-8 text-gray-700 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-card-foreground group-hover:text-gray-900 transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
              <div className="mt-4 flex items-center text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};


// Why Choose Us Section
const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Cutting-edge solutions that push the boundaries of what's possible in digital technology.",
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Robust, tested, and dependable systems you can trust for your critical business needs.",
    },
    {
      icon: Sparkles,
      title: "AI Integration",
      description: "Harness the power of artificial intelligence to automate and enhance your workflows.",
    },
    {
      icon: Clock,
      title: "Long-term Support",
      description: "Ongoing maintenance and updates to keep your digital assets performing at their best.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Why Choose Us
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gray-300 via-gray-600 to-gray-300 mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We deliver excellence through innovation, reliability, and unwavering commitment
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="relative group animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl transform group-hover:scale-105 transition-transform duration-300"></div>
                
                <div className="relative p-8 rounded-2xl border border-gray-200 bg-card hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="p-4 rounded-xl bg-gradient-to-br from-gray-900 to-gray-700 shadow-lg">
                        <reason.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-semibold mb-3 text-card-foreground">
                        {reason.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl p-12 md:p-16 relative overflow-hidden shadow-2xl animate-fade-in">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            
            <div className="relative z-10 text-center text-white">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Transform Your Digital Presence?
              </h2>
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Join forces with Work Wizards Innovations and bring your vision to life with cutting-edge technology.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg"
                  className="bg-white text-gray-900 hover:bg-gray-100 group shadow-xl"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Users className="mr-2 h-5 w-5" />
                  Work With Us
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-white/20 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
                >
                  Join Our Journey
                </Button>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12 border-t border-white/10">
                <div>
                  <div className="text-3xl font-bold mb-2">100+</div>
                  <div className="text-sm text-gray-300">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">50+</div>
                  <div className="text-sm text-gray-300">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-sm text-gray-300">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Section
const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const contactSchema = z.object({
    name: z.string().trim().nonempty({ message: "Name cannot be empty" }).max(100),
    email: z.string().trim().email({ message: "Invalid email address" }).max(255),
    message: z.string().trim().nonempty({ message: "Message cannot be empty" }).max(1000),
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const parsed = contactSchema.safeParse(formData);
    if (!parsed.success) {
      const firstError = parsed.error.issues[0]?.message ?? "Please check the form and try again.";
      toast({ title: "Invalid input", description: firstError, variant: "destructive" });
      return;
    }

    try {
      const response = await fetch('https://formsubmit.co/ajax/workwizardsinnovations.official@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Contact from ${formData.name}`,
        }),
      });

      if (response.ok) {
        toast({
          title: "Message Sent Successfully!",
          description: "We'll get back to you as soon as possible.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or email us directly.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gray-300 via-gray-600 to-gray-300 mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can help bring your ideas to life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <form onSubmit={handleSubmit} className="space-y-6 animate-slide-up">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                  className="w-full"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={6}
                  required
                  className="w-full resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full group">
                Send Message
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>

            <div className="space-y-8 animate-slide-up" style={{ animationDelay: "100ms" }}>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Connect With Us</h3>
                <p className="text-muted-foreground mb-6">
                  Follow us on social media to stay updated with our latest innovations and products.
                </p>
                
                <div className="space-y-3">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-gray-900 group-hover:bg-gray-800 transition-colors">
                      <Linkedin className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-medium text-gray-700">LinkedIn</span>
                  </a>

                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-gray-900 group-hover:bg-gray-800 transition-colors">
                      <Twitter className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-medium text-gray-700">Twitter</span>
                  </a>

                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-gray-900 group-hover:bg-gray-800 transition-colors">
                      <Instagram className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-medium text-gray-700">Instagram</span>
                  </a>

                  <a
                    href="tel:+919618131779"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-gray-900 group-hover:bg-gray-800 transition-colors">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-medium text-gray-700">+91 9618131779</span>
                  </a>

                  <a
                    href="mailto:workwizardsinnovations.official@gmail.com"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-gray-900 group-hover:bg-gray-800 transition-colors">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <span className="font-medium text-gray-700 text-sm">workwizardsinnovations.official@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer Section
const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 border-t border-gray-700">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Work Wizards Innovations</h3>
              <p className="text-gray-400 text-sm">
                Innovating Web, Apps & Beyond
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <button 
                    onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <button 
                    onClick={scrollToTop}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Back to Top
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400 text-sm">
              © 2025 Work Wizards Innovations. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Index;
