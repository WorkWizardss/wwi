import { ArrowRight, ArrowDown, Lightbulb, Users, Zap, Heart, MapPin, Clock, Briefcase } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import careersHero1 from "@/assets/careers-hero-1.jpg";
import careersHero2 from "@/assets/careers-hero-2.jpg";
import careersHero3 from "@/assets/careers-hero-3.jpg";

const openPositions = [
  {
    title: "Full Stack Developer",
    type: "Full Time",
    location: "Remote",
    description: "Build and maintain scalable web applications using modern frameworks. Work on both frontend and backend systems.",
  },
  {
    title: "UI/UX Designer",
    type: "Full Time",
    location: "Remote",
    description: "Design intuitive user interfaces and craft exceptional user experiences for web and mobile platforms.",
  },
  {
    title: "Mobile App Developer",
    type: "Full Time",
    location: "Remote",
    description: "Develop native and cross-platform mobile applications for Android and iOS with seamless performance.",
  },
  {
    title: "DevOps Engineer",
    type: "Full Time",
    location: "Remote",
    description: "Manage CI/CD pipelines, cloud infrastructure, and ensure smooth deployment workflows.",
  },
];

const values = [
  {
    icon: Lightbulb,
    number: "01",
    title: "Fueled by Curiosity",
    description: "We encourage experimentation and creative problem-solving. Every idea matters, every voice is heard.",
  },
  {
    icon: Zap,
    number: "02",
    title: "Move Fast, Build Smart",
    description: "We ship with speed and precision, iterating quickly while maintaining high quality standards.",
  },
  {
    icon: Heart,
    number: "03",
    title: "People First",
    description: "Flexible work, open culture, and genuine care for every team member's growth and wellbeing.",
  },
  {
    icon: Users,
    number: "04",
    title: "Grow Together",
    description: "Mentorship, learning budgets, and real ownership. Your career accelerates here.",
  },
];

const Careers = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-20 md:pb-0 bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-8 md:pb-12 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start mb-10 md:mb-16">
            <div className="animate-fade-in">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Join the company
                <br />
                with the bold
                <br />
                <span className="text-muted-foreground">new vision.</span>
              </h1>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "150ms" }}>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
                At Work Wizards Innovations, we're shaping the future of digital solutions. Join us to build cutting-edge web and mobile platforms, work with emerging technologies, and solve real-world problems — all while growing your career in a collaborative, remote-first environment.
              </p>
              <Button
                size="lg"
                onClick={() => document.getElementById("openings")?.scrollIntoView({ behavior: "smooth" })}
                className="group"
              >
                Job openings
                <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Hero Images */}
          <div className="grid grid-cols-3 gap-3 md:gap-5 animate-slide-up">
            <div className="aspect-square rounded-2xl md:rounded-3xl overflow-hidden">
              <img src={careersHero1} alt="Team collaboration" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="aspect-square rounded-2xl md:rounded-3xl overflow-hidden">
              <img src={careersHero2} alt="Developer presenting" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="aspect-square rounded-2xl md:rounded-3xl overflow-hidden">
              <img src={careersHero3} alt="Team brainstorming" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16 animate-fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full border border-border text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
              Careers
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Grounded and ground-breaking.
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
              We're changing the paradigm every day, with curiosity, vision and deep expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <Card
                  key={i}
                  className="p-6 md:p-8 border-border hover:shadow-lg transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <span className="inline-flex items-center justify-center px-2.5 py-1 rounded-full border border-border text-xs font-mono text-muted-foreground">
                      {value.number}
                    </span>
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Perks Section */}
      <section className="py-12 md:py-20 px-4 md:px-6 bg-secondary/30">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground mb-6">Why Work at WWI?</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8">
            {[
              { label: "Remote First", icon: MapPin },
              { label: "Flexible Hours", icon: Clock },
              { label: "Learning Budget", icon: Lightbulb },
              { label: "Team Events", icon: Heart },
            ].map((perk, i) => {
              const Icon = perk.icon;
              return (
                <div key={i} className="p-4 md:p-6 rounded-2xl bg-background border border-border hover:shadow-md transition-all">
                  <div className="mx-auto mb-3 p-3 rounded-xl bg-foreground/5 w-fit">
                    <Icon className="h-6 w-6 text-foreground" />
                  </div>
                  <p className="text-sm font-medium text-foreground">{perk.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" className="py-16 md:py-24 px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-14 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Open Positions</h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Find your next role and start building the future with us
            </p>
          </div>

          <div className="space-y-4 animate-slide-up">
            {openPositions.map((pos, i) => (
              <Card
                key={i}
                className="p-5 md:p-6 border-border hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 cursor-pointer group"
                onClick={() => navigate(`/careers/apply?position=${encodeURIComponent(pos.title)}`)}
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg md:text-xl font-semibold text-foreground mb-1 group-hover:text-foreground/80 transition-colors">
                      {pos.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">{pos.description}</p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" /> {pos.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-3 w-3" /> {pos.type}
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" className="group-hover:bg-foreground group-hover:text-background transition-all shrink-0">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* General Application */}
          <div className="mt-10 p-6 md:p-8 rounded-2xl bg-foreground text-background text-center animate-fade-in">
            <h3 className="text-xl md:text-2xl font-bold mb-2">Don't see your role?</h3>
            <p className="text-background/70 mb-5 text-sm md:text-base">
              We're always looking for talented people. Send us a general application and we'll reach out when a matching role opens up.
            </p>
            <Button
              variant="outline"
              className="border-background/20 bg-background/10 text-background hover:bg-background/20"
              onClick={() => navigate("/careers/apply")}
            >
              General Application
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
