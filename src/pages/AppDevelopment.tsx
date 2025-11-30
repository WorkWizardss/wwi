import { ArrowLeft, Smartphone, Tablet, Layers, Zap, CheckCircle2, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const AppDevelopment = () => {
  const navigate = useNavigate();

  const platforms = [
    { name: "Native Android", description: "Java & Kotlin for optimal Android performance" },
    { name: "Native iOS", description: "Swift for seamless iPhone and iPad experiences" },
    { name: "Cross-Platform", description: "React Native & Flutter for multi-platform deployment" },
  ];

  const features = [
    { icon: Smartphone, title: "Native Performance", description: "Optimized for speed and responsiveness on every device" },
    { icon: Tablet, title: "Adaptive Design", description: "Beautiful interfaces that adapt to any screen size" },
    { icon: Layers, title: "Scalable Architecture", description: "Built to grow with your user base" },
    { icon: Zap, title: "Offline Capability", description: "Work seamlessly even without internet connection" },
  ];

  const appTypes = [
    {
      title: "Business Applications",
      description: "Enterprise-grade apps for internal operations, CRM, inventory management, and workflow automation",
      examples: ["Employee Management", "Sales Tracking", "Inventory Systems"]
    },
    {
      title: "Consumer Applications",
      description: "Engaging apps for end-users with focus on user experience and performance",
      examples: ["E-commerce Apps", "Social Platforms", "Entertainment Apps"]
    },
    {
      title: "Educational Applications",
      description: "Learning platforms and educational tools for students and institutions",
      examples: ["E-learning Platforms", "Course Management", "Study Tools"]
    },
  ];

  const technologies = [
    "React Native", "Flutter", "Swift", "Kotlin", "Java",
    "Firebase", "GraphQL", "REST APIs", "SQLite", "Realm"
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
              App Development
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We create powerful mobile applications for Android and iOS that deliver exceptional user experiences. 
              From business solutions to consumer apps, we bring your mobile vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Multi-Platform Expertise
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gray-300 via-gray-600 to-gray-300 mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you need native performance or cross-platform efficiency, we've got you covered
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {platforms.map((platform, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-gray-200 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center">
                  <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-gray-900 to-gray-700 mb-6">
                    <Smartphone className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-foreground">
                    {platform.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {platform.description}
                  </p>
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
              App Features We Excel At
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

      {/* App Types */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Applications We Build
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gray-300 via-gray-600 to-gray-300 mx-auto mb-8"></div>
          </div>

          <div className="max-w-5xl mx-auto space-y-8">
            {appTypes.map((type, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 border-gray-200 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-2xl font-semibold mb-4 text-foreground">
                  {type.title}
                </h3>
                <p className="text-muted-foreground text-lg mb-6">
                  {type.description}
                </p>
                <div className="flex flex-wrap gap-3">
                  {type.examples.map((example, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-200"
                    >
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">{example}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Technologies & Tools
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gray-300 via-gray-600 to-gray-300 mx-auto mb-8"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="px-6 py-3 rounded-full bg-card border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="font-medium text-foreground">{tech}</span>
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
            <Users className="h-16 w-16 mx-auto mb-6 text-white" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Build Your Next App
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Turn your app idea into reality with our expert development team
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
              Start Your Project
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppDevelopment;