import React from 'react';
import { Project, PROJECTS } from '../data/projects';
import { X, ExternalLink, ChevronLeft, ChevronRight, CheckCircle2, Layers } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onSelectProject }) => {
  if (!project) return null;

  const currentIndex = PROJECTS.findIndex(p => p.id === project.id);
  const prevProject = PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#090B10]/90 backdrop-blur-xl overflow-y-auto animate-in fade-in duration-300">
      
      <div className="relative w-full max-w-5xl bg-[#151B29] border border-[#B89B65]/30 rounded-3xl overflow-hidden shadow-2xl text-[#E8E5DF] my-auto">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 md:px-10 py-6 border-b border-[#090B10]">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-[#090B10] border border-[#B89B65]/30 text-[#B89B65] text-xs font-mono">
              {project.number}
            </span>
            <span className="text-xs uppercase tracking-widest text-[#858891]">{project.category}</span>
          </div>

          <button 
            onClick={onClose}
            className="p-2 rounded-full bg-[#090B10] text-[#E8E5DF] hover:bg-[#B89B65] hover:text-[#090B10] transition-colors cursor-pointer"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 md:p-10 max-h-[80vh] overflow-y-auto space-y-12">
          
          {/* Title & Description Intro */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold font-editorial text-[#E8E5DF]">
                {project.title}
              </h2>
              <p className="text-lg text-[#858891] leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="lg:col-span-4 bg-[#090B10] p-6 rounded-2xl border border-[#151B29] space-y-4">
              <div>
                <span className="text-xs text-[#858891] uppercase tracking-wider block mb-1">Secteur</span>
                <span className="text-sm font-semibold text-[#E8E5DF]">{project.sector}</span>
              </div>
              <div>
                <span className="text-xs text-[#858891] uppercase tracking-wider block mb-1">Client</span>
                <span className="text-sm font-semibold text-[#E8E5DF]">{project.client}</span>
              </div>
              <div className="pt-2">
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#B89B65] text-[#090B10] text-xs font-bold uppercase tracking-wider hover:bg-[#E8E5DF] transition-colors cursor-pointer"
                >
                  <span>Visiter le site en direct</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Goal & Key Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-[#090B10]">
            <div className="space-y-4">
              <h3 className="text-xl font-editorial text-[#B89B65] flex items-center gap-2">
                <Layers className="w-5 h-5" />
                <span>Objectif du projet</span>
              </h3>
              <p className="text-sm text-[#858891] leading-relaxed bg-[#090B10]/50 p-6 rounded-2xl border border-[#151B29]">
                {project.goal}
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-editorial text-[#B89B65] flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                <span>Fonctionnalités clés</span>
              </h3>
              <ul className="space-y-3 bg-[#090B10]/50 p-6 rounded-2xl border border-[#151B29]">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#858891]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B89B65] mt-2 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Desktop & Mobile Mockup Previews */}
          <div className="space-y-6 pt-6 border-t border-[#090B10]">
            <h3 className="text-xl font-editorial text-[#E8E5DF]">Aperçus Desktop & Mobile</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8 rounded-2xl overflow-hidden border border-[#090B10] bg-[#090B10] shadow-xl">
                <div className="bg-[#090B10] px-4 py-3 border-b border-[#151B29] flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="text-xs text-[#858891] ml-4 font-mono truncate">{project.url}</span>
                </div>
                <img 
                  src={project.mockupDesktop} 
                  alt={`${project.title} Desktop`}
                  className="w-full h-auto object-cover max-h-[400px]"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="lg:col-span-4 flex justify-center">
                <div className="w-[240px] rounded-3xl overflow-hidden border-4 border-[#090B10] bg-[#090B10] shadow-2xl">
                  <div className="bg-[#090B10] py-2 flex justify-center">
                    <span className="w-16 h-1 rounded-full bg-[#151B29]" />
                  </div>
                  <img 
                    src={project.mockupMobile} 
                    alt={`${project.title} Mobile`}
                    className="w-full h-auto object-cover max-h-[380px]"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Gallery Visuals */}
          <div className="space-y-6 pt-6 border-t border-[#090B10]">
            <h3 className="text-xl font-editorial text-[#E8E5DF]">Galerie Visuelle</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((imgUrl, i) => (
                <div key={i} className="rounded-2xl overflow-hidden border border-[#090B10] aspect-[16/10]">
                  <img 
                    src={imgUrl} 
                    alt={`${project.title} gallery ${i}`}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Technologies used */}
          <div className="pt-6 border-t border-[#090B10] flex flex-wrap items-center gap-3">
            <span className="text-xs uppercase tracking-wider text-[#858891] mr-2">Technologies :</span>
            {project.technologies.map((tech, i) => (
              <span key={i} className="px-3.5 py-1 rounded-full bg-[#090B10] border border-[#B89B65]/20 text-[#B89B65] text-xs font-medium">
                {tech}
              </span>
            ))}
          </div>

        </div>

        {/* Modal Footer Navigation */}
        <div className="px-6 md:px-10 py-6 border-t border-[#090B10] bg-[#090B10]/60 flex items-center justify-between">
          <button 
            onClick={() => onSelectProject(prevProject)}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#858891] hover:text-[#E8E5DF] transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Projet précédent</span>
          </button>

          <button 
            onClick={() => onSelectProject(nextProject)}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#858891] hover:text-[#E8E5DF] transition-colors cursor-pointer"
          >
            <span>Projet suivant</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
};
