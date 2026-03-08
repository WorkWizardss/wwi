import { ArrowLeft, Linkedin, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";

const teamMembers = [
  {
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    description:
      "Visionary leader with 15+ years in tech, driving innovation and strategic growth at Work Wizards Innovations.",
    initials: "RK",
  },
  {
    name: "Priya Sharma",
    role: "Co-Founder & CTO",
    description:
      "Technology architect passionate about building scalable systems and leading engineering excellence.",
    initials: "PS",
  },
  {
    name: "Amit Verma",
    role: "Chief Operating Officer",
    description:
      "Operations expert ensuring seamless delivery and client satisfaction across all projects.",
    initials: "AV",
  },
  {
    name: "Sneha Reddy",
    role: "Managing Director",
    description:
      "Strategic business leader fostering partnerships and expanding the company's market presence.",
    initials: "SR",
  },
  {
    name: "Vikram Patel",
    role: "Chief Financial Officer",
    description:
      "Financial strategist ensuring sustainable growth and sound fiscal management.",
    initials: "VP",
  },
];

const Team = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-gray-50">
        <div className="container mx-auto px-6">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-8 group"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Button>

          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Meet Our Team
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-gray-300 via-gray-600 to-gray-300 mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The passionate leaders behind Work Wizards Innovations, committed
              to driving digital transformation and delivering excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card
                key={member.name}
                className="p-8 text-center hover:shadow-xl transition-all duration-300 animate-fade-in border-gray-200"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center mx-auto mb-5">
                  <span className="text-xl font-bold text-white">
                    {member.initials}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {member.name}
                </h3>
                <p className="text-sm font-semibold text-primary mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
                <div className="flex justify-center gap-3 mt-5">
                  <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                    <Linkedin className="h-4 w-4 text-gray-600" />
                  </button>
                  <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                    <Mail className="h-4 w-4 text-gray-600" />
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
