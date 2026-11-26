import React from 'react';
import { Sparkles, Award, Heart, Compass } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="apropos" className="py-28 px-6 md:px-12 bg-[#090B10] border-t border-[#151B29]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-20">
          <span className="text-[#B89B65] text-xs font-semibold uppercase tracking-widest block mb-4">
            03 // À propos
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#E8E5DF] font-editorial leading-tight">
            LA CRÉATIVITÉ <br />
            <span className="italic font-light text-[#B89B65]">AU SERVICE DU DIGITAL.</span>
          </h2>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Monograph Text */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6 text-base md:text-lg text-[#858891] leading-relaxed">
              <p className="text-xl md:text-2xl font-editorial text-[#E8E5DF] font-normal leading-relaxed">
                Je suis une freelance passionnée par la création digitale, le design web et la communication.
              </p>
              <p>
                J'accompagne les marques et les entreprises dans la création de leur présence digitale, à travers des expériences web modernes, des contenus créatifs et des solutions adaptées à leurs objectifs.
              </p>
              <p>
                Mon approche associe créativité, stratégie et attention aux détails. Chaque projet est pensé pour offrir une esthétique remarquable et une performance irréprochable.
              </p>
            </div>

            {/* Core Values / Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-[#151B29]">
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-full bg-[#151B29] border border-[#B89B65]/30 flex items-center justify-center text-[#B89B65] mb-4">
                  <Compass className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-[#E8E5DF]">Vision Stratégique</h4>
                <p className="text-xs text-[#858891]">Aligner design et objectifs business.</p>
              </div>

              <div className="space-y-2">
                <div className="w-10 h-10 rounded-full bg-[#151B29] border border-[#B89B65]/30 flex items-center justify-center text-[#B89B65] mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-[#E8E5DF]">Esthétique & Soin</h4>
                <p className="text-xs text-[#858891]">Un souci constant du détail visuel.</p>
              </div>

              <div className="space-y-2">
                <div className="w-10 h-10 rounded-full bg-[#151B29] border border-[#B89B65]/30 flex items-center justify-center text-[#B89B65] mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-[#E8E5DF]">Excellence Technique</h4>
                <p className="text-xs text-[#858891]">Sites fluides, rapides et adaptatifs.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#151B29] bg-[#151B29]/40 p-6 backdrop-blur-xl shadow-2xl">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000" 
                  alt="Asma Studio Workspace"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#090B10] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <p className="text-xs text-[#B89B65] uppercase tracking-widest font-semibold mb-1">Freelance Studio</p>
                  <p className="text-lg font-editorial text-[#E8E5DF]">Création web & design digital d'exception</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
