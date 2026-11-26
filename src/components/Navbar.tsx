import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact, onNavigateSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    onNavigateSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#090B10]/90 backdrop-blur-md border-b border-[#151B29] py-4 shadow-2xl' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between gap-8">
        
        {/* Zone 1: Brand Wordmark */}
        <a 
          href="#accueil" 
          onClick={(e) => { e.preventDefault(); handleNavClick('accueil'); }}
          className="group flex items-center gap-2 text-xl md:text-2xl font-bold tracking-tight text-[#E8E5DF] whitespace-nowrap shrink-0 font-editorial"
        >
          <span>ASMA</span>
          <span className="text-[#B89B65] text-xs font-sans tracking-widest uppercase border-l border-[#858891]/30 pl-2 hidden sm:inline-block">
            Digital Studio
          </span>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#858891]">
          <button 
            onClick={() => handleNavClick('accueil')} 
            className="hover:text-[#E8E5DF] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Accueil
          </button>
          <button 
            onClick={() => handleNavClick('projets')} 
            className="hover:text-[#E8E5DF] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Projets
          </button>
          <button 
            onClick={() => handleNavClick('services')} 
            className="hover:text-[#E8E5DF] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Services
          </button>
          <button 
            onClick={() => handleNavClick('apropos')} 
            className="hover:text-[#E8E5DF] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            À propos
          </button>
          <button 
            onClick={() => handleNavClick('contact')} 
            className="hover:text-[#E8E5DF] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            Contact
          </button>
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <button 
            onClick={onOpenContact}
            className="group relative inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#E8E5DF] text-[#090B10] text-xs font-semibold uppercase tracking-wider overflow-hidden transition-all duration-300 hover:bg-[#B89B65] hover:text-white cursor-pointer"
          >
            <span>Parlons projet</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#E8E5DF] p-2 focus:outline-none"
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#090B10]/98 border-b border-[#151B29] px-6 py-8 flex flex-col gap-6 md:hidden backdrop-blur-xl shadow-2xl animate-in slide-in-from-top duration-300">
          <button 
            onClick={() => handleNavClick('accueil')} 
            className="text-left text-lg font-editorial text-[#E8E5DF] hover:text-[#B89B65] transition-colors"
          >
            Accueil
          </button>
          <button 
            onClick={() => handleNavClick('projets')} 
            className="text-left text-lg font-editorial text-[#E8E5DF] hover:text-[#B89B65] transition-colors"
          >
            Projets Sélectionnés
          </button>
          <button 
            onClick={() => handleNavClick('services')} 
            className="text-left text-lg font-editorial text-[#E8E5DF] hover:text-[#B89B65] transition-colors"
          >
            Services
          </button>
          <button 
            onClick={() => handleNavClick('apropos')} 
            className="text-left text-lg font-editorial text-[#E8E5DF] hover:text-[#B89B65] transition-colors"
          >
            À propos
          </button>
          <button 
            onClick={() => handleNavClick('contact')} 
            className="text-left text-lg font-editorial text-[#E8E5DF] hover:text-[#B89B65] transition-colors"
          >
            Contact
          </button>
          <div className="pt-4 border-t border-[#151B29]">
            <button 
              onClick={() => { setMobileMenuOpen(false); onOpenContact(); }}
              className="w-full py-3 rounded-full bg-[#B89B65] text-white text-xs font-semibold uppercase tracking-wider text-center"
            >
              Parlons de votre projet
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
