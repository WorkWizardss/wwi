import { ArrowRight, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

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

export default CTA;
