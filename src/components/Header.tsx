import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: "Services", path: "/#services" },
    { name: "About Us", path: "/#about" },
    { name: "Careers", path: "/#careers" },
    { name: "Contact", path: "/#contact" },
  ];

  const moreLinks = [
    { name: "Web Services", path: "/web-services" },
    { name: "App Development", path: "/app-development" },
    { name: "Maintenance & Support", path: "/maintenance-support" },
    { name: "Products", path: "/products" },
  ];

  const handleNavClick = (path: string) => {
    setIsMenuOpen(false);
    if (path.startsWith("/#")) {
      const sectionId = path.replace("/#", "");
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
      <nav className="max-w-7xl mx-auto backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-lg">
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-xl font-bold bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent"
          >
            WorkWizards
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-xl hover:bg-white/10 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden px-6 pb-4 animate-fade-in">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-white/10 ${
                    isActive(link.path)
                      ? "text-primary bg-white/10"
                      : "text-foreground/80 hover:text-foreground"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="border-t border-white/10 my-2" />
              <p className="px-4 py-2 text-xs text-muted-foreground uppercase tracking-wider">More</p>
              {moreLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 hover:bg-white/10 text-foreground/80 hover:text-foreground"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
