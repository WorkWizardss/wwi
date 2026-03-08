import { Link, useLocation } from "react-router-dom";
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
    { name: "Web Services", path: "/web-services" },
    { name: "App Development", path: "/app-development" },
    { name: "Maintenance & Support", path: "/maintenance-support" },
    { name: "Products", path: "/products" },
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
      <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3 hidden md:block">
        <nav className="max-w-7xl mx-auto backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-6 py-3">
            {/* Logo */}
            <Link 
              to="/" 
              className="text-xl font-bold text-black"
            >
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
      <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3 md:hidden">
        <nav className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-4 py-2">
            {/* Logo */}
            <Link 
              to="/" 
              className="text-xl font-bold text-black"
            >
              Work Wizards <br />Innovations
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

      {/* Mobile Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="backdrop-blur-xl bg-background/95 border-t border-white/20 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
          <div className="flex items-center justify-around py-2 px-1">
            {mobileNavLinks.map((link) => {
              const Icon = link.icon;
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all duration-300 min-w-[60px] ${
                    active
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }`}
                >
                  <Icon className={`h-5 w-5 ${active ? "scale-110" : ""} transition-transform`} />
                  <span className="text-[10px] font-medium">{link.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
        {/* Safe area for bottom */}
        <div className="h-safe-area-inset-bottom bg-background/95" />
      </nav>
    </>
  );
};

export default Header;
