import { Lightbulb, Shield, Sparkles, Clock } from "lucide-react";

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

const WhyChooseUs = () => {
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

export default WhyChooseUs;
