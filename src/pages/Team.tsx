import { ArrowLeft, Linkedin, Mail, Calendar, Users, Rocket, Handshake } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import venkatImg from "@/assets/team-venkat.jpg";
import santhoshImg from "@/assets/team-santhosh.jpeg";
import govindImg from "@/assets/team-govind.jpeg";
import charanImg from "@/assets/team-charan.jpeg";
import prudhviImg from "@/assets/team-prudhvi.jpeg";
const milestones = [
  { icon: Calendar, date: "Sep 2025", text: "Founded by a team of 5 passionate innovators" },
  { icon: Rocket, date: "Dec 2025", text: "First collaboration with Glowvai" },
  { icon: Users, date: "Early 2026", text: "Team stabilized with stronger strategies" },
  { icon: Handshake, date: "Feb 2026", text: "Began working with active clients" },
];

const teamMembers = [
  {
    name: "Nalla Venkat",
    role: "Founder & Chief Executive Officer (CEO)",
    description:
      "Nalla Venkat is the founder of Work Wizards Innovations and the visionary behind the company's mission and long-term strategy. He leads the organization by defining its direction, identifying new opportunities, and driving innovation across all projects. Venkat focuses on building strong partnerships, guiding the development of new technologies, and ensuring that the company continuously evolves to meet future industry demands.",
    initials: "NV",
    image: venkatImg,
  },
  {
    name: "Santhosh Boppudi",
    role: "Co-Founder & Chief Technology Officer (CTO)",
    description:
      "Santhosh Boppudi leads the technological development at Work Wizards Innovations. As CTO, he is responsible for designing the company's technical architecture, overseeing software development, and ensuring that the products are built using efficient and scalable technologies. He plays a key role in transforming ideas into functional digital platforms and maintaining the technological backbone of the organization.",
    initials: "SB",
    image: santhoshImg,
  },
  {
    name: "Govinda Sai Ram Thammisetty",
    role: "Chief Operating Officer (COO)",
    description:
      "Govinda Sai Ram Thammisetty manages the operational structure of the company. As COO, he ensures that projects are executed efficiently and that team coordination remains smooth across all activities. He focuses on operational planning, resource management, and maintaining the workflow required to deliver successful products and services.",
    initials: "GT",
    image: govindImg,
  },
  {
    name: "Charan Teja Rajanala",
    role: "Chief Marketing Officer (CMO)",
    description:
      "Charan Teja Rajanala is responsible for the marketing strategy and brand development of Work Wizards Innovations. As CMO, he focuses on promoting the company's products, expanding market reach, and building a strong brand presence. His work involves digital marketing strategies, partnership outreach, and ensuring that the company's innovations reach the right audience.",
    initials: "CR",
    image: charanImg,
  },
  {
    name: "Prudhvi Duvvu",
    role: "Chief Financial Officer (CFO)",
    description:
      "Prudhvi Duvvu oversees the financial planning and management of Work Wizards Innovations. As CFO, he is responsible for managing financial resources, budgeting, and ensuring sustainable financial growth. He plays an important role in maintaining financial stability while supporting the company's expansion and long-term business strategy.",
    initials: "PD",
  },
];

const Team = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background pb-20 md:pb-0">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-muted/30">
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
              Our Story & Team
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-muted-foreground/30 via-primary to-muted-foreground/30 mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The passionate leaders behind Work Wizards Innovations, committed
              to driving digital transformation and delivering excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Team Members - Zigzag Layout (FIRST) */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-foreground">
            Meet the Leadership
          </h2>

          <div className="max-w-5xl mx-auto space-y-16">
            {teamMembers.map((member, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={member.name}
                  className={`flex flex-col md:flex-row items-center gap-8 md:gap-12 animate-fade-in ${
                    !isEven ? "md:flex-row-reverse" : ""
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-36 h-36 md:w-44 md:h-44 rounded-2xl bg-gradient-to-br from-primary/80 to-primary flex items-center justify-center shadow-lg">
                      <span className="text-4xl md:text-5xl font-bold text-primary-foreground">
                        {member.initials}
                      </span>
                    </div>
                  </div>
                  <div className={`flex-1 text-center md:text-left ${!isEven ? "md:text-right" : ""}`}>
                    <h3 className="text-2xl font-bold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm font-semibold text-primary mb-4">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      {member.description}
                    </p>
                    <div className={`flex gap-3 mt-4 justify-center ${isEven ? "md:justify-start" : "md:justify-end"}`}>
                      <button className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors">
                        <Linkedin className="h-4 w-4 text-muted-foreground" />
                      </button>
                      <button className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Journey Section (AFTER members) */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-foreground">
              Our Journey
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed text-base md:text-lg">
              <p>
                Work Wizards Innovations began its journey on <strong className="text-foreground">26 September 2025</strong>, when a small but determined team of five passionate innovators came together with a shared vision — to build impactful technology solutions and create meaningful innovation.
              </p>
              <p>
                Like many early-stage startups, the beginning was filled with challenges. As a newly formed team, we faced several obstacles related to funding, infrastructure, and gaining practical experience in managing large-scale online services. While exploring and experimenting with cloud technologies and digital platforms, we encountered unexpected technical and operational challenges that tested our resilience as a team.
              </p>
              <p>
                However, instead of allowing these difficulties to stop us, we treated them as valuable lessons. Through persistence, continuous learning, and strong teamwork, we gradually improved our understanding of the technologies we were working with and built a stronger foundation for our projects.
              </p>
              <p>
                A major milestone in our journey came in <strong className="text-foreground">December 2025</strong>, when Work Wizards Innovations achieved its first collaboration with <strong className="text-foreground">Glowvai</strong>. This partnership marked an important step forward and gave the team the confidence that our ideas and efforts were moving in the right direction.
              </p>
              <p>
                As we entered 2026, the team became more stable and focused. The early struggles had strengthened our mindset and helped us build better strategies for development and innovation.
              </p>
              <p>
                By <strong className="text-foreground">February 2026</strong>, Work Wizards Innovations had begun working with active clients, marking a significant transition from a small experimental team into a growing technology startup.
              </p>
              <p className="italic text-foreground/80 border-l-4 border-primary pl-4">
                Today, our journey stands as a reminder that every challenge is an opportunity to grow. The lessons we learned in our early days continue to guide us as we move forward with bigger ambitions, stronger technology, and a clear vision for the future. And this is only the beginning of the story for Work Wizards Innovations.
              </p>
            </div>

            {/* Timeline Milestones */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {milestones.map((m, i) => (
                <div
                  key={i}
                  className="bg-card border border-border rounded-xl p-5 text-center animate-fade-in"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                    <m.icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-sm font-bold text-foreground mb-1">{m.date}</p>
                  <p className="text-xs text-muted-foreground">{m.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
