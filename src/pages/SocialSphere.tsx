import { ArrowLeft, Check, Phone, Mail, Star, Zap, Users, BarChart3, Megaphone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const maintenancePlan = {
  name: "Social Media Maintenance Plan",
  description: "For businesses that already have content and need professional management support.",
  pricing: [
    { label: "Up to 4 social media handles", price: "₹1,999/mo" },
    { label: "5 or more handles", price: "₹2,499/mo" },
  ],
  features: [
    "Social media handle management (posting provided content)",
    "Maintenance of Meta Ads, Google AdSense & Adestra",
    "Dedicated support hours",
    "Regular posting & account activity management",
    "Basic engagement handling",
  ],
  note: "Discounts available for quarterly, half-yearly & annual plans. Contact The Social Sphere team for offers.",
};

const allInclusivePlans = [
  {
    name: "WWI ESSENTIAL",
    price: "₹5,499",
    period: "/month",
    popular: false,
    features: [
      "Account/handle management (up to 4 handles)",
      "Ad platform management (AdSense, Meta Ads, Adestra)",
      "Lead handling",
      "24x7 support available",
      "12 static creatives",
      "4 story creatives",
      "2 AI-generated videos/reels",
      "Caption writing & hashtag strategy",
      "Content scheduling",
      "Basic profile optimization",
      "Monthly performance report",
      "AI image-based branded content",
    ],
  },
  {
    name: "WWI GROWTH",
    price: "₹7,999",
    period: "/month",
    popular: true,
    features: [
      "Management of 6 social media platforms",
      "Ad platform management (AdSense, Meta Ads, Adestra)",
      "Lead handling",
      "24x7 support available",
      "16–20 posts/month",
      "9–12 story creatives",
      "4 AI-generated short videos/reels",
      "Creative design & caption writing",
      "Monthly content calendar",
      "Competitor analysis",
      "Basic engagement management",
      "Monthly analytics report",
      "AI visuals + typography video content",
    ],
  },
  {
    name: "WWI PREMIUM BRAND",
    price: "₹11,999",
    period: "/month",
    popular: false,
    features: [
      "Ad platform management (AdSense, Meta Ads, Adestra)",
      "Lead handling",
      "24x7 priority support",
      "Unlimited social media platforms",
      "20–30 posts/month",
      "12–20 story creatives",
      "6–8 AI-generated reels/videos",
      "Premium branded creative designs",
      "Motion graphics content",
      "Typography campaign videos",
      "Advanced audience engagement support",
      "Detailed performance reporting",
      "Campaign strategy & creative planning",
    ],
  },
];

const SocialSphere = () => {
  const navigate = useNavigate();

  const scrollToPricing = () => {
    document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 py-12 md:py-20">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-8 text-gray-300 hover:text-white hover:bg-white/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>

          <div className="max-w-4xl animate-fade-in">
            <Badge className="mb-4 bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/20">
              by Work Wizards Innovations
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                The Social Sphere
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-300 mb-3 font-medium">
              AI-Powered Content Creation & Social Media Management
            </p>
            <p className="text-base md:text-lg text-gray-400 max-w-3xl mb-8 leading-relaxed">
              A subscription-based AI-powered social media growth engine designed to help businesses
              scale their digital presence with consistent content, ad management, and audience engagement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={scrollToPricing}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white border-0 shadow-lg shadow-blue-500/25"
              >
                View Plans
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={scrollToPricing}
                className="border-gray-600 text-gray-200 hover:bg-white/10 bg-transparent"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="border-y border-gray-800 bg-gray-900/80 backdrop-blur">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-800">
            {[
              { icon: Megaphone, label: "AI Content" },
              { icon: BarChart3, label: "Analytics" },
              { icon: Users, label: "Engagement" },
              { icon: Zap, label: "24/7 Support" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-2 py-4 md:py-5 text-gray-400">
                <item.icon className="h-4 w-4 md:h-5 md:w-5 text-blue-400" />
                <span className="text-xs md:text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Choose Your Plan
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
              Flexible plans designed for every stage of your social media journey
            </p>
          </div>

          {/* Maintenance Plan */}
          <div className="max-w-3xl mx-auto mb-16 animate-fade-in">
            <h3 className="text-xl md:text-2xl font-semibold mb-6 text-center text-gray-200">
              Entry-Level Plan
            </h3>
            <Card className="bg-gray-800/60 border-gray-700 backdrop-blur p-6 md:p-8 hover:border-blue-500/40 transition-all duration-300 hover:scale-[1.01]">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1">
                  <h4 className="text-xl md:text-2xl font-bold text-white mb-2">{maintenancePlan.name}</h4>
                  <p className="text-gray-400 mb-4">{maintenancePlan.description}</p>

                  <div className="flex flex-wrap gap-3 mb-6">
                    {maintenancePlan.pricing.map((p, i) => (
                      <div key={i} className="bg-gray-700/50 rounded-lg px-4 py-2 border border-gray-600">
                        <span className="text-xl md:text-2xl font-bold text-blue-400">{p.price}</span>
                        <span className="text-gray-400 text-sm block">{p.label}</span>
                      </div>
                    ))}
                  </div>

                  <ul className="space-y-2">
                    {maintenancePlan.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                        <Check className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-4 text-xs text-gray-500 italic">{maintenancePlan.note}</p>
                </div>

                <div className="md:text-right">
                  <Button
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white w-full md:w-auto"
                    onClick={() => {
                      document.getElementById("enterprise")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* All-Inclusive Plans */}
          <div className="animate-fade-in">
            <h3 className="text-xl md:text-2xl font-semibold mb-8 text-center text-gray-200">
              All-Inclusive Plans
            </h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {allInclusivePlans.map((plan, index) => (
                <Card
                  key={index}
                  className={`relative bg-gray-800/60 backdrop-blur p-6 md:p-7 flex flex-col transition-all duration-300 hover:scale-[1.03] ${
                    plan.popular
                      ? "border-blue-500 shadow-lg shadow-blue-500/20 ring-1 ring-blue-500/30"
                      : "border-gray-700 hover:border-gray-600"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 px-4 py-1 hover:from-blue-600 hover:to-purple-600">
                        <Star className="h-3 w-3 mr-1" /> Most Popular
                      </Badge>
                    </div>
                  )}

                  <div className="mb-6">
                    <h4 className="text-lg font-bold text-white mb-2">{plan.name}</h4>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                        {plan.price}
                      </span>
                      <span className="text-gray-500 text-sm">{plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 flex-1 mb-6">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                        <Check className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-2">
                    <Button
                      className={`w-full ${
                        plan.popular
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white"
                          : "bg-gray-700 hover:bg-gray-600 text-white"
                      }`}
                      onClick={() => {
                        document.getElementById("enterprise")?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      Get Started
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full text-gray-400 hover:text-white hover:bg-white/5"
                      onClick={() => {
                        document.getElementById("enterprise")?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      Contact Us
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise / Contact */}
      <section id="enterprise" className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-gray-950">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              WWI Enterprise / Contact
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-gray-400 mb-10 text-base md:text-lg">
              For large businesses, agencies, and custom requirements — reach out to our team.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 max-w-lg mx-auto mb-8">
              <a
                href="tel:+919618131779"
                className="flex items-center justify-center gap-3 p-4 rounded-xl bg-gray-800/60 border border-gray-700 hover:border-blue-500/40 transition-all hover:scale-[1.02]"
              >
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-200 text-sm">+91 96181 31779</span>
              </a>
              <a
                href="tel:+919492033686"
                className="flex items-center justify-center gap-3 p-4 rounded-xl bg-gray-800/60 border border-gray-700 hover:border-blue-500/40 transition-all hover:scale-[1.02]"
              >
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-200 text-sm">+91 94920 33686</span>
              </a>
            </div>

            <a
              href="mailto:thesocialsphere@wwi.org.in"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gray-800/60 border border-gray-700 hover:border-purple-500/40 transition-all hover:scale-[1.02]"
            >
              <Mail className="h-5 w-5 text-purple-400" />
              <span className="text-gray-200 text-sm">thesocialsphere@wwi.org.in</span>
            </a>

            <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/20">
              <p className="text-gray-300 text-sm md:text-base italic">
                "The Social Sphere by Work Wizards Innovations – A premium AI-powered social media growth solution for modern businesses."
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialSphere;
