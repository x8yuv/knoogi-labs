import { Link } from "wouter";
import { Leaf } from "lucide-react";
import logoImage from "@assets/Untitled design_1755937773022.png";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src={logoImage} 
                alt="Knoogi Labs Logo" 
                className="w-10 h-10"
                data-testid="footer-logo-image"
              />
              <span className="text-2xl font-brand uppercase text-white">
                <span style={{ fontWeight: 900 }}>KNOOGI</span>
                <span style={{ fontWeight: 800 }}> LABS</span>
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Modern development solutions from the heart of Alberta, Canada. Building the future with innovative technology.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 font-display">Services</h4>
            <div className="space-y-2">
              <Link href="/services">
                <span className="block text-gray-300 hover:text-white transition-colors" data-testid="footer-ai-link">
                  AI Development
                </span>
              </Link>
              <Link href="/services">
                <span className="block text-gray-300 hover:text-white transition-colors" data-testid="footer-app-link">
                  App Development
                </span>
              </Link>
              <Link href="/services">
                <span className="block text-gray-300 hover:text-white transition-colors" data-testid="footer-marketing-link">
                  Digital Marketing
                </span>
              </Link>
              <Link href="/services">
                <span className="block text-gray-300 hover:text-white transition-colors" data-testid="footer-media-link">
                  Media Creation
                </span>
              </Link>
              <Link href="/services">
                <span className="block text-gray-300 hover:text-white transition-colors" data-testid="footer-custom-link">
                  Custom Development
                </span>
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 font-display">Company</h4>
            <div className="space-y-2">
              <Link 
                href="/about"
                className="block text-gray-300 md:hover:text-white transition-none" 
                style={{ touchAction: 'manipulation' }}
                onClick={() => window.scrollTo(0, 0)}
                data-testid="footer-about-link"
              >
                About Us
              </Link>
              <span className="block text-gray-300 md:hover:text-white transition-none cursor-pointer" 
                style={{ touchAction: 'manipulation' }}
                data-testid="footer-team-link">
                Our Team
              </span>
              <Link 
                href="/careers"
                className="block text-gray-300 md:hover:text-white transition-none" 
                style={{ touchAction: 'manipulation' }}
                onClick={() => window.scrollTo(0, 0)}
                data-testid="footer-careers-link"
              >
                Careers
              </Link>
              <Link 
                href="/contact"
                className="block text-gray-300 md:hover:text-white transition-none" 
                style={{ touchAction: 'manipulation' }}
                onClick={() => window.scrollTo(0, 0)}
                data-testid="footer-contact-link"
              >
                Contact
              </Link>
              <Link 
                href="/privacy-policy"
                className="block text-gray-300 md:hover:text-white transition-none" 
                style={{ touchAction: 'manipulation' }}
                onClick={() => window.scrollTo(0, 0)}
                data-testid="footer-privacy-link"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 font-display">Contact</h4>
            <div className="space-y-2 text-gray-300">
              <p data-testid="footer-address">Calgary, Alberta, Canada</p>
              <p data-testid="footer-email">hello@knoogilabs.com</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm" data-testid="footer-copyright">
            © 2025 Knoogi Labs. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 mt-4 md:mt-0">
            <Leaf className="text-success-green w-4 h-4" />
            <span className="text-sm text-gray-300" data-testid="footer-canadian">Proudly Canadian</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
