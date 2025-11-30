import { ArrowLeft, Code2, Palette, Zap, CheckCircle2, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const WebServices = () => {
  const navigate = useNavigate();

  const technologies = [
    { name: "React.js", description: "Modern UI library for dynamic interfaces" },
    { name: "Node.js", description: "Server-side JavaScript runtime" },
    { name: "Express.js", description: "Fast, minimalist web framework" },
    { name: "Python", description: "Versatile backend programming" },
    { name: "Tailwind CSS", description: "Utility-first CSS framework" },
    { name: "TypeScript", description: "Type-safe JavaScript" },
  ];

  const features = [
    { icon: Code2, title: "Clean Code Architecture", description: "Well-structured, maintainable code following industry best practices" },
    { icon: Palette, title: "Modern Design", description: "Beautiful, responsive designs that work flawlessly on all devices" },
    { icon: Zap, title: "Lightning Fast", description: "Optimized performance for exceptional user experience" },
    { icon: Globe, title: "SEO Optimized", description: "Built with search engine optimization in mind" },
  ];

  const process = [
    { step: "01", title: "Discovery", description: "We understand your business goals and target audience" },
    { step: "02", title: "Design", description: "Create stunning mockups and prototypes" },
    { step: "03", title: "Development", description: "Build with high-end frameworks and technologies" },
    { step: "04", title: "Testing", description: "Rigorous quality assurance and testing" },
    { step: "05", title: "Launch", description: "Deploy and monitor your web application" },
    { step: "06", title: "Support", description: "Ongoing maintenance and updates" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-12 bg-gradient-to-b from-gray-50 to-background border-b">
        <div className="container mx-auto px-6">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-8 hover:bg-gray-100 animate-fade-in"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          
          <div className="max-w-4xl animate-fade-in" style={{ animationDelay: "100ms" }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
              Web Services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We craft exceptional web experiences using cutting-edge technologies and frameworks. 
              From concept to deployment, we deliver high-performance web solutions tailored to your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Technologies We Use */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              High-End Technologies
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gray-300 via-gray-600 to-gray-300 mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We leverage the most powerful and modern frameworks to build robust, scalable web applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {technologies.map((tech, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-gray-200 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {tech.name}
                    </h3>
                    <p className="text-muted-foreground">
                      {tech.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What We Deliver
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gray-300 via-gray-600 to-gray-300 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex gap-6 p-8 rounded-2xl border border-gray-200 bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-gray-900 to-gray-700">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Our Development Process
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gray-300 via-gray-600 to-gray-300 mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that ensures quality and timely delivery
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {process.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-6 p-6 rounded-xl border border-gray-200 bg-card hover:shadow-lg transition-all duration-300 hover:translate-x-2 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">{item.step}</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2 text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-lg">
                      {item.description}
                    </p>
                  </div>
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center text-white animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build Your Web Presence?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Let's create something amazing together with cutting-edge technology
            </p>
            <Button
              size="lg"
              className="bg-white text-gray-900 hover:bg-gray-100"
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebServices;