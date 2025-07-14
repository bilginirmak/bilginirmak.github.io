import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
        : 'bg-transparent'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-gradient-to-r from-amber-100 to-rose-100 py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-center items-center space-x-6 text-sm text-amber-800">
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4" />
            <span>+1(514)625-5598</span>
          </div>
          <div className="hidden sm:flex items-center space-x-2">
            <Mail className="w-4 h-4" />
            <span>astridbeauty55@gmail.com</span>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>Sherbrooke & Hutchison, Montreal</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-amber-800">
            ASTRID
            <div className="text-sm font-light text-amber-600 tracking-wider">
              BEAUTY HOME STUDIO
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['Home', 'Services', 'Pricing', 'About', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-amber-800 hover:text-rose-600 transition-colors duration-200 font-medium"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-amber-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-amber-200">
            {['Home', 'Services', 'Pricing', 'About', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left py-2 text-amber-800 hover:text-rose-600 transition-colors duration-200"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;