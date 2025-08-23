import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "./button";
import { Menu, X, MapPin } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2" data-testid="logo-link">
            <div className="w-8 h-8 gradient-tech rounded-lg flex items-center justify-center">
              <MapPin className="text-white text-sm" />
            </div>
            <span className="text-xl font-bold text-rich-black font-display">Knoogi Labs</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href}>
                <span 
                  className={`nav-link transition-colors ${
                    location === href 
                      ? "text-tech-blue font-medium" 
                      : "text-professional-grey hover:text-tech-blue"
                  }`}
                  data-testid={`nav-${label.toLowerCase()}`}
                >
                  {label}
                </span>
              </Link>
            ))}
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="mobile-menu-button"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-6 py-4 space-y-4">
              {navLinks.map(({ href, label }) => (
                <Link key={href} href={href} onClick={() => setIsOpen(false)}>
                  <span 
                    className={`block transition-colors ${
                      location === href 
                        ? "text-tech-blue font-medium" 
                        : "text-professional-grey hover:text-tech-blue"
                    }`}
                    data-testid={`mobile-nav-${label.toLowerCase()}`}
                  >
                    {label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
