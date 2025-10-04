import { Globe, Smartphone, Settings, Package } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Globe,
    title: "Web Services",
    description: "Custom websites tailored for businesses and professionals with modern design and functionality.",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Native Android & iOS applications for business and personal use cases with seamless user experiences.",
  },
  {
    icon: Settings,
    title: "Maintenance & Support",
    description: "Ongoing technical support for your websites and apps to ensure optimal performance and reliability.",
  },
  {
    icon: Package,
    title: "Our Products",
    description: "Innovative branded digital platforms designed to solve real-world problems and enhance productivity.",
  },
];

const Services = () => {
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
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
