import Header from "@/components/Header";
import { Link } from "react-router-dom";
import { Handshake, GraduationCap, Rocket, Building2, ArrowRight } from "lucide-react";
import glowvaiLogo from "@/assets/glowvai-logo.png";
import mentneoLogo from "@/assets/mentneo-logo.png";

const collaborationTypes = [
  {
    icon: GraduationCap,
    title: "College Partnerships",
    description:
      "We collaborate with colleges and universities to bring our KNOWRA platform to students. Partner with us to empower your institution with cutting-edge educational technology.",
    cta: "Partner as a College",
  },
  {
    icon: Rocket,
    title: "Tech Collaboration with Startups",
    description:
      "We're open to collaborating with other startups on technology projects. Whether it's co-building products, sharing expertise, or joint ventures — let's innovate together.",
    cta: "Collaborate with Us",
  },
  {
    icon: Building2,
    title: "Hiring Partners",
    description:
      "Join us as a hiring partner to connect talented professionals with the right opportunities. We work with companies to bridge the gap between talent and industry needs.",
    cta: "Become a Hiring Partner",
  },
];

const existingPartners = [
  {
    name: "Glowvai",
    logo: glowvaiLogo,
    type: "Branding & Promotional Collaboration",
    description:
      "Glowvai partners with Work Wizards Innovations for branding, promotional strategies, and creative campaigns that amplify our digital presence.",
    website: "https://glowvai.com",
  },
  {
    name: "Mentneo",
    logo: mentneoLogo,
    type: "Hiring Partner",
    description:
      "Mentneo collaborates with us as a hiring partner, helping connect skilled professionals with meaningful career opportunities across our projects.",
    website: "https://mentneo.com",
  },
];

const Partners = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 md:pt-36 pb-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Handshake className="w-4 h-4" />
            Open for Collaboration
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Partner With{" "}
            <span className="text-primary">Work Wizards Innovations</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            We believe in the power of collaboration. Whether you're a college,
            startup, or enterprise — let's build something extraordinary
            together.
          </p>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Collaboration Types */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Ways to Collaborate
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Explore the different partnership opportunities we offer
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {collaborationTypes.map((collab) => (
              <div
                key={collab.title}
                className="bg-card border border-border rounded-2xl p-8 hover:border-primary/40 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <collab.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{collab.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {collab.description}
                </p>
                <Link
                  to="/#contact"
                  className="text-primary font-medium text-sm inline-flex items-center gap-1 hover:gap-2 transition-all"
                >
                  {collab.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Existing Partners */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Our Partners
          </h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
            Companies we proudly collaborate with
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {existingPartners.map((partner) => (
              <div
                key={partner.name}
                className="bg-card border border-border rounded-2xl p-8 flex flex-col items-center text-center hover:border-primary/40 transition-all duration-300"
              >
                <div className="w-24 h-24 rounded-2xl bg-white flex items-center justify-center mb-6 p-3">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-1">{partner.name}</h3>
                <span className="text-primary text-sm font-medium mb-4">
                  {partner.type}
                </span>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  {partner.description}
                </p>
                <a
                  href={partner.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-medium text-sm inline-flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Visit Website
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-muted-foreground mb-8">
            Reach out to discuss how we can collaborate and grow together.
          </p>
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
          >
            Contact Us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Partners;
