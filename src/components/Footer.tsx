import React from 'react';

interface FooterProps {
  onNavigateSection: (sectionId: string) => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection }) => {
  return (
    <footer className="bg-[#090B10] border-t border-[#151B29] py-16 px-6 md:px-12 text-[#858891]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="flex flex-col items-center md:items-start gap-2">
          <a href="#accueil" onClick={(e) => { e.preventDefault(); onNavigateSection('accueil'); }} className="text-xl font-bold font-editorial text-[#E8E5DF]">
            ASMA — DIGITAL STUDIO
          </a>
          <p className="text-xs text-[#858891]">
            Création web, design digital & stratégie de communication.
          </p>
        </div>

        <div className="flex items-center gap-8 text-xs uppercase tracking-wider">
          <button onClick={() => onNavigateSection('projets')} className="hover:text-[#E8E5DF] transition-colors cursor-pointer">
            Projets
          </button>
          <button onClick={() => onNavigateSection('services')} className="hover:text-[#E8E5DF] transition-colors cursor-pointer">
            Services
          </button>
          <button onClick={() => onNavigateSection('apropos')} className="hover:text-[#E8E5DF] transition-colors cursor-pointer">
            À propos
          </button>
          <button onClick={() => onNavigateSection('contact')} className="hover:text-[#E8E5DF] transition-colors cursor-pointer">
            Contact
          </button>
        </div>

        <div className="text-xs text-[#858891] text-center md:text-right">
          <p>© {new Date().getFullYear()} ASMA Digital Studio.</p>
          <p className="mt-1">Tous droits réservés.</p>
        </div>

      </div>
    </footer>
  );
};
