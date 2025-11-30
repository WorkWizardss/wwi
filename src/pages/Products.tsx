import { ArrowLeft, FileText, Download, Shield, Sparkles, CheckCircle2, Clock, GraduationCap, BookOpen, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Products = () => {
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2025-11-01T04:30:00+05:30');

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const viadocsFeatures = [
    { icon: FileText, text: "Edit, Convert & Compress PDFs" },
    { icon: Shield, text: "Secure Digital Signatures" },
    { icon: Download, text: "Merge & Split Documents" },
    { icon: Sparkles, text: "AI-Powered Document Creation" },
  ];

  const knowraFeatures = [
    { icon: BookOpen, title: "Smart Learning Tools", description: "Personalized study plans and progress tracking" },
    { icon: Brain, title: "AI-Powered Insights", description: "Intelligent recommendations based on learning patterns" },
    { icon: GraduationCap, title: "Comprehensive Resources", description: "Curated educational content for all subjects" },
    { icon: Clock, title: "Time Management", description: "Built-in study timers and productivity tools" },
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
              Our Products
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We design and develop our own innovative digital platforms that solve real-world problems. 
              Each product is built with cutting-edge technology and user-centric design.
            </p>
          </div>
        </div>
      </section>

      {/* Viadocs - Launched Product */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-500/30 mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-400">Now Live</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Viadocs
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                The all-in-one PDF platform with AI-powered document creation
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 animate-slide-up">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Viadocs is our debut product—a comprehensive PDF management platform designed for students, 
                  professionals, and businesses who need powerful document tools at their fingertips.
                </p>
                
                <div className="space-y-4">
                  {viadocsFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 group">
                      <div className="p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
                        <feature.icon className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-gray-200">{feature.text}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  size="lg" 
                  className="bg-white text-gray-900 hover:bg-gray-100 mt-8"
                >
                  Try Viadocs Now
                </Button>
              </div>

              <div className="animate-scale-in">
                <Card className="p-8 bg-white/5 border-white/10 backdrop-blur-sm">
                  <div className="aspect-video bg-gradient-to-br from-white/10 to-white/5 rounded-xl flex items-center justify-center mb-6 border border-white/10">
                    <FileText className="h-24 w-24 text-white/40" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    All-in-One PDF Solution
                  </h3>
                  <p className="text-gray-300">
                    Edit, convert, compress, and create PDFs with AI assistance. 
                    Everything you need in one powerful platform.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KNOWRA - Coming Soon */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Clock className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Coming Soon</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                KNOWRA
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A revolutionary student-centric platform designed to enhance learning and productivity
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
              <div className="space-y-8 animate-slide-up">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-foreground">
                    Empowering Students
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    KNOWRA is our next big innovation—a comprehensive platform built specifically for students. 
                    It combines smart learning tools, AI-powered insights, and productivity features to help 
                    students achieve their academic goals.
                  </p>
                </div>

                <div className="space-y-6">
                  {knowraFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="flex gap-4 p-6 rounded-xl border border-gray-200 bg-card hover:shadow-lg transition-all duration-300 animate-fade-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex-shrink-0">
                        <div className="p-3 rounded-lg bg-gradient-to-br from-gray-900 to-gray-700">
                          <feature.icon className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold mb-1 text-foreground">
                          {feature.title}
                        </h4>
                        <p className="text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="animate-scale-in">
                <Card className="p-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white border-gray-700">
                  <h3 className="text-2xl font-bold mb-6 text-center">Launching In</h3>
                  
                  <div className="grid grid-cols-4 gap-4 mb-8">
                    {[
                      { label: "Days", value: timeLeft.days },
                      { label: "Hours", value: timeLeft.hours },
                      { label: "Minutes", value: timeLeft.minutes },
                      { label: "Seconds", value: timeLeft.seconds },
                    ].map((item, index) => (
                      <div key={index} className="text-center">
                        <div className="bg-white/5 rounded-xl p-4 mb-2 border border-white/10">
                          <div className="text-3xl font-bold text-white">
                            {String(item.value).padStart(2, '0')}
                          </div>
                        </div>
                        <div className="text-sm text-gray-400">{item.label}</div>
                      </div>
                    ))}
                  </div>

                  <Button 
                    size="lg" 
                    className="w-full bg-white text-gray-900 hover:bg-gray-100"
                    onClick={() => {
                      navigate("/");
                      setTimeout(() => {
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                  >
                    Get Notified at Launch
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Product Philosophy */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our Product Philosophy
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gray-300 via-gray-600 to-gray-300 mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              We don't just build products—we create solutions that make a real difference. 
              Every product we launch is designed with careful attention to user needs, 
              built with cutting-edge technology, and refined through continuous feedback.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 border-gray-200">
                <div className="text-4xl font-bold text-primary mb-2">01</div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">User-Centric</h3>
                <p className="text-muted-foreground">
                  Every feature is designed with users in mind
                </p>
              </Card>
              <Card className="p-6 border-gray-200">
                <div className="text-4xl font-bold text-primary mb-2">02</div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Innovation First</h3>
                <p className="text-muted-foreground">
                  We leverage the latest technology to solve problems
                </p>
              </Card>
              <Card className="p-6 border-gray-200">
                <div className="text-4xl font-bold text-primary mb-2">03</div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Continuous Growth</h3>
                <p className="text-muted-foreground">
                  Regular updates and improvements based on feedback
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center text-white animate-fade-in">
            <Sparkles className="h-16 w-16 mx-auto mb-6 text-white" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Stay Updated on Our Products
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Be the first to know about new features, product launches, and exclusive updates
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
              Subscribe for Updates
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;