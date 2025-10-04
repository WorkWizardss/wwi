import { useState, useEffect } from "react";
import { Sparkles, FileText, Download, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductHighlight = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 10,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 10);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const features = [
    { icon: FileText, text: "Edit, Convert & Compress PDFs" },
    { icon: Shield, text: "Secure Digital Signatures" },
    { icon: Download, text: "Merge & Split Documents" },
    { icon: Sparkles, text: "AI-Powered Document Creation" },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
              <Sparkles className="h-4 w-4 text-white" />
              <span className="text-sm font-medium">Coming Soon</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Introducing Viadocs
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The all-in-one PDF platform with AI-powered document creation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-6 animate-slide-up">
              <p className="text-lg text-gray-300 leading-relaxed">
                Viadocs is our flagship product designed for students, professionals, and businesses who need powerful PDF tools at their fingertips.
              </p>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
                      <feature.icon className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-gray-200">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-scale-in">
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-white/10 shadow-2xl">
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
                >
                  Get Notified at Launch
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlight;
