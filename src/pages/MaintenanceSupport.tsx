import { ArrowLeft, Settings, Shield, Zap, Clock, Wrench, HeadphonesIcon, CheckCircle2, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const MaintenanceSupport = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Wrench,
      title: "Technical Maintenance",
      description: "Regular updates, bug fixes, and performance optimization to keep your systems running smoothly",
    },
    {
      icon: Shield,
      title: "Security Updates",
      description: "Proactive security monitoring and patches to protect against vulnerabilities",
    },
    {
      icon: TrendingUp,
      title: "Performance Monitoring",
      description: "24/7 monitoring and optimization to ensure peak performance",
    },
    {
      icon: HeadphonesIcon,
      title: "Technical Support",
      description: "Dedicated support team ready to resolve your tech issues quickly",
    },
  ];

  const supportLevels = [
    {
      title: "Basic Support",
      features: [
        "Bug fixes and minor updates",
        "Email support (48hr response)",
        "Monthly performance reports",
        "Security patches",
      ],
      ideal: "Small businesses with stable applications"
    },
    {
      title: "Premium Support",
      features: [
        "Priority bug fixes and updates",
        "24/7 email & phone support",
        "Weekly performance monitoring",
        "Feature enhancements",
        "Database optimization",
      ],
      ideal: "Growing businesses requiring active maintenance"
    },
    {
      title: "Enterprise Support",
      features: [
        "Dedicated support team",
        "Real-time monitoring & alerts",
        "Immediate critical issue response",
        "Custom feature development",
        "Infrastructure management",
        "SLA guarantees",
      ],
      ideal: "Large organizations with mission-critical systems"
    },
  ];

  const whatWeCover = [
    { icon: Settings, text: "Application Updates & Patches" },
    { icon: Shield, text: "Security Monitoring & Fixes" },
    { icon: Zap, text: "Performance Optimization" },
    { icon: Clock, text: "Uptime Monitoring" },
    { icon: Wrench, text: "Bug Fixing & Debugging" },
    { icon: TrendingUp, text: "Scalability Improvements" },
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
              Maintenance & Support
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We don't just build your digital solutions—we ensure they stay secure, performant, and up-to-date. 
              Our pay-as-you-go model gives you full technical support without the burden of a full-time tech team.
            </p>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Complete Tech Management
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gray-300 via-gray-600 to-gray-300 mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From routine maintenance to critical support, we handle all your technical needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex gap-6 p-8 rounded-2xl border border-gray-200 bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-gray-900 to-gray-700">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Levels */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Flexible Support Plans
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gray-300 via-gray-600 to-gray-300 mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the level of support that fits your needs with our pay-as-you-go model
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {supportLevels.map((level, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-gray-200 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-2xl font-bold mb-6 text-foreground">
                  {level.title}
                </h3>
                
                <div className="space-y-4 mb-8">
                  {level.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6 border-t border-gray-200">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Ideal for:</span> {level.ideal}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Cover */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What We Cover
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gray-300 via-gray-600 to-gray-300 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whatWeCover.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-6 rounded-xl border border-gray-200 bg-card hover:shadow-lg transition-all duration-300 hover:translate-x-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-3 rounded-lg bg-gradient-to-br from-gray-900 to-gray-700">
                  <item.icon className="h-5 w-5 text-white" />
                </div>
                <span className="font-medium text-foreground">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pay As You Go */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="p-12 border-gray-200 animate-fade-in">
              <div className="text-center">
                <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-gray-900 to-gray-700 mb-6">
                  <Zap className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                  Pay-As-You-Go Pricing
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  No long-term contracts or hidden fees. Pay only for the support and maintenance you need, when you need it. 
                  Scale up or down based on your requirements without any commitment.
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="p-6 rounded-xl bg-gray-50 border border-gray-200">
                    <div className="text-3xl font-bold text-foreground mb-2">No</div>
                    <div className="text-sm text-muted-foreground">Long-term Contracts</div>
                  </div>
                  <div className="p-6 rounded-xl bg-gray-50 border border-gray-200">
                    <div className="text-3xl font-bold text-foreground mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">Monitoring Available</div>
                  </div>
                  <div className="p-6 rounded-xl bg-gray-50 border border-gray-200">
                    <div className="text-3xl font-bold text-foreground mb-2">100%</div>
                    <div className="text-sm text-muted-foreground">Transparency</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center text-white animate-fade-in">
            <HeadphonesIcon className="h-16 w-16 mx-auto mb-6 text-white" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Need Technical Support?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Let us handle your tech issues while you focus on growing your business
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
              Get Support Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MaintenanceSupport;