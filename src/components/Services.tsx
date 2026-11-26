import React, { useState } from 'react';
import { SERVICES, ServiceItem } from '../data/projects';
import { Check, ChevronRight } from 'lucide-react';

interface ServicesProps {
  onOpenContact: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenContact }) => {
  const [activeService, setActiveService] = useState<string | null>(SERVICES[0].id);

  return (
    <section id="services" className="py-28 px-6 md:px-12 bg-[#090B10] border-t border-[#151B29]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-[#B89B65] text-xs font-semibold uppercase tracking-widest block mb-4">
              02 // Expertise & Prestations
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#E8E5DF] font-editorial leading-tight">
              DU CONCEPT <br />
              <span className="italic font-light text-[#B89B65]">À LA RÉALISATION.</span>
            </h2>
          </div>
          <p className="text-[#858891] max-w-md text-sm md:text-base leading-relaxed">
            Une approche globale et sur mesure pour propulser votre marque sur tous les canaux digitaux avec élégance et efficacité.
          </p>
        </div>

        {/* Services Accordion / Grid List */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: List of Services */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-[#151B29]">
            {SERVICES.map((service) => {
              const isActive = activeService === service.id;
              return (
                <div 
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`py-8 transition-all cursor-pointer group ${
                    isActive ? 'opacity-100' : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-6">
                      <span className={`text-xs font-mono transition-colors ${isActive ? 'text-[#B89B65]' : 'text-[#858891]'}`}>
                        {service.number}
                      </span>
                      <h3 className="text-xl md:text-2xl font-editorial font-bold text-[#E8E5DF] group-hover:text-[#B89B65] transition-colors">
                        {service.title}
                      </h3>
                    </div>
                    <div className={`w-8 h-8 rounded-full border border-[#151B29] flex items-center justify-center transition-transform ${isActive ? 'rotate-90 bg-[#B89B65] text-[#090B10]' : 'text-[#858891]'}`}>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>

                  {isActive && (
                    <div className="mt-6 pl-12 space-y-4 animate-in fade-in duration-300">
                      <p className="text-sm md:text-base text-[#858891] leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        {service.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-xs text-[#E8E5DF]">
                            <Check className="w-3.5 h-3.5 text-[#B89B65]" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Callout Card */}
          <div className="lg:col-span-5 relative">
            <div className="sticky top-32 rounded-3xl bg-[#151B29] border border-[#B89B65]/30 p-8 md:p-10 space-y-8 backdrop-blur-xl shadow-2xl">
              <span className="text-xs text-[#B89B65] uppercase tracking-widest font-semibold block">
                Accompagnement Sur Mesure
              </span>
              <h3 className="text-3xl font-editorial text-[#E8E5DF] leading-tight">
                Prêt à donner vie à votre vision digitale ?
              </h3>
              <p className="text-sm text-[#858891] leading-relaxed">
                Chaque projet fait l'objet d'une écoute attentive, d'une stratégie adaptée et d'un suivi rigoureux de la conception au déploiement.
              </p>
              <button 
                onClick={onOpenContact}
                className="w-full py-4 rounded-full bg-[#B89B65] text-[#090B10] text-xs font-bold uppercase tracking-widest hover:bg-[#E8E5DF] transition-colors cursor-pointer text-center shadow-lg"
              >
                Discuter de votre besoin
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
