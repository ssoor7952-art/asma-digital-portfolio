import React from 'react';
import { ArrowDown, Sparkles, ArrowRight } from 'lucide-react';

interface HeroProps {
  onExploreProjects: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects, onOpenContact }) => {
  return (
    <section id="accueil" className="relative h-screen min-h-[700px] flex flex-col justify-between pt-32 pb-16 px-6 md:px-12 bg-[#090B10] overflow-hidden">
      
      {/* Full screen background image: abstract digital design studio composition with zero people */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/src/assets/images/hero_digital_abstract_studio_1795647632475.jpg" 
          alt="Immersive Digital Creative Experience"
          className="w-full h-full object-cover object-center scale-105 animate-in fade-in duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Layered dark gradients for editorial depth and absolute readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#090B10]/95 via-[#090B10]/80 to-[#090B10]/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090B10] via-transparent to-[#090B10]/60" />
      </div>

      {/* Main Hero Centered / Left Content */}
      <div className="max-w-7xl mx-auto w-full my-auto z-10 flex flex-col items-start justify-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#151B29]/80 border border-[#B89B65]/30 text-[#B89B65] text-xs font-medium uppercase tracking-widest mb-8 backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ASMA — DIGITAL STUDIO</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-[#E8E5DF] leading-[1.05] mb-8 font-editorial max-w-5xl">
          LE DIGITAL <br />
          <span className="italic font-light text-[#B89B65]">PREND UNE AUTRE</span> <br />
          DIMENSION.
        </h1>

        <p className="text-lg md:text-xl text-[#E8E5DF]/80 max-w-2xl font-normal leading-relaxed mb-10">
          Nous imaginons et créons des expériences digitales qui donnent vie aux marques, captivent les visiteurs et valorisent les entreprises.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
          <button 
            onClick={onExploreProjects}
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#B89B65] text-[#090B10] text-xs font-bold uppercase tracking-widest transition-all duration-300 hover:bg-[#E8E5DF] cursor-pointer shadow-xl shadow-[#B89B65]/20"
          >
            <span>DÉCOUVRIR MES PROJETS</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button 
            onClick={onOpenContact}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#151B29]/90 border border-[#B89B65]/40 text-[#E8E5DF] text-xs font-semibold uppercase tracking-widest transition-all duration-300 hover:bg-[#151B29] hover:border-[#B89B65] cursor-pointer backdrop-blur-sm"
          >
            <span>PARLONS DE VOTRE PROJET</span>
          </button>
        </div>

      </div>

      {/* Discreet Scroll Indicator */}
      <div className="max-w-7xl mx-auto w-full px-6 md:px-12 z-10 flex items-center justify-between text-xs text-[#858891] border-t border-[#E8E5DF]/10 pt-6">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#B89B65] animate-ping" />
          <span>Disponible pour nouveaux projets</span>
        </div>
        <button 
          onClick={onExploreProjects}
          className="flex items-center gap-2 hover:text-[#E8E5DF] transition-colors cursor-pointer"
        >
          <span>Défiler pour explorer</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </button>
      </div>

    </section>
  );
};
