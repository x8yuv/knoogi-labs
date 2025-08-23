import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "./button";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X } from "lucide-react";
import logoSvg from "@/assets/knoogi-labs-logo.svg";

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200/20 dark:border-gray-800/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3" data-testid="logo-link">
            <img 
              src={logoSvg} 
              alt="Knoogi Labs Logo" 
              className="w-10 h-10"
              data-testid="logo-image"
            />
            <span className="text-2xl text-rich-black dark:text-white font-brand uppercase">
              <span style={{ fontWeight: 900 }}>KNOOGI</span>
              <span style={{ fontWeight: 800 }}> LABS</span>
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href}>
                <span 
                  className={`nav-link transition-colors ${
                    location === href 
                      ? "text-tech-blue dark:text-blue-400 font-medium" 
                      : "text-professional-grey dark:text-gray-300 hover:text-tech-blue dark:hover:text-blue-400"
                  }`}
                  data-testid={`nav-${label.toLowerCase()}`}
                >
                  {label}
                </span>
              </Link>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            <ThemeToggle />
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
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <div className="px-6 py-4 space-y-4">
              {navLinks.map(({ href, label }) => (
                <Link key={href} href={href} onClick={() => setIsOpen(false)}>
                  <span 
                    className={`block transition-colors ${
                      location === href 
                        ? "text-tech-blue dark:text-blue-400 font-medium" 
                        : "text-professional-grey dark:text-gray-300 hover:text-tech-blue dark:hover:text-blue-400"
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
