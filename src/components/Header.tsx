import { Link, useLocation } from "react-router-dom";
import wwiLogo from "@/assets/wwi-logo.svg";
import { Home, Briefcase, Users, GraduationCap, Mail, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/" && !location.hash;
    if (path.startsWith("/#")) {
      return location.hash === path.replace("/", "");
    }
    return location.pathname === path;
  };

  const navLinks = [
    { name: "Services", path: "/#services" },
    { name: "About Us", path: "/#about" },
    { name: "Careers", path: "/#careers" },
    { name: "Contact", path: "/#contact" },
  ];

  const mobileNavLinks = [
    { name: "Home", path: "/", icon: Home },
    { name: "Services", path: "/#services", icon: Briefcase },
    { name: "About", path: "/#about", icon: Users },
    { name: "Careers", path: "/#careers", icon: GraduationCap },
    { name: "Contact", path: "/#contact", icon: Mail },
  ];

  const moreLinks = [
    { name: "Careers", path: "/careers" },
    { name: "Web Services", path: "/services/web" },
    { name: "App Development", path: "/services/app" },
    { name: "Maintenance & Support", path: "/services/maintenance" },
    { name: "Products", path: "/products" },
    { name: "About Us", path: "/team" },
  ];

  const handleNavClick = (path: string) => {
    if (path.startsWith("/#")) {
      const sectionId = path.replace("/#", "");
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      {/* Desktop Header - Fixed Top */}
      <header className="fixed top-0 left-0 right-0 z-50 hidden md:block">
        <nav className="w-full backdrop-blur-xl bg-background/80 border-b border-border shadow-sm">
          <div className="flex items-center justify-between px-8 py-3 max-w-7xl mx-auto">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center gap-2 text-xl font-bold text-foreground"
            >
              <img src={wwiLogo} alt="WWI Logo" className="h-6 w-auto" />
              Work Wizards Innovations
            </Link>

            {/* Desktop Navigation */}
            <div className="flex items-center gap-1">
              <Link
                to="/"
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-white/10 ${
                  isActive("/")
                    ? "text-primary bg-white/10"
                    : "text-foreground/80 hover:text-foreground"
                }`}
              >
                Home
              </Link>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-white/10 ${
                    isActive(link.path)
                      ? "text-primary bg-white/10"
                      : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              {/* More Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-white/10 text-foreground/80 hover:text-foreground flex items-center gap-1 outline-none">
                  More
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="backdrop-blur-xl bg-background/95 border border-white/20 rounded-xl shadow-xl mt-2">
                  {moreLinks.map((link) => (
                    <DropdownMenuItem key={link.name} asChild>
                      <Link
                        to={link.path}
                        className="cursor-pointer px-4 py-2 text-sm hover:bg-white/10 rounded-lg"
                      >
                        {link.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Header - Fixed Top (Logo + More only) */}
      <header className="fixed top-0 left-0 right-0 z-50 md:hidden">
        <nav className="w-full backdrop-blur-xl bg-background/80 border-b border-border shadow-sm">
          <div className="flex items-center justify-between px-4 py-2.5">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center gap-2 text-sm font-bold text-foreground whitespace-nowrap"
            >
              <img src={wwiLogo} alt="WWI Logo" className="h-5 w-auto" />
              Work Wizards Innovations
            </Link>

            {/* More Dropdown for Mobile */}
            <DropdownMenu>
              <DropdownMenuTrigger className="px-3 py-1.5 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-white/10 text-foreground/80 hover:text-foreground flex items-center gap-1 outline-none border border-white/20">
                More
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="backdrop-blur-xl bg-background/95 border border-white/20 rounded-xl shadow-xl mt-2 mr-4">
                {moreLinks.map((link) => (
                  <DropdownMenuItem key={link.name} asChild>
                    <Link
                      to={link.path}
                      className="cursor-pointer px-4 py-2 text-sm hover:bg-white/10 rounded-lg"
                    >
                      {link.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
      </header>

    </>
  );
};

export default Header;
