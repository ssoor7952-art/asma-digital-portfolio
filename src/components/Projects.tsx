import React from 'react';
import { PROJECTS, Project } from '../data/projects';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  return (
    <section id="projets" className="py-28 px-6 md:px-12 bg-[#090B10] border-t border-[#151B29]">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-[#B89B65] text-xs font-semibold uppercase tracking-widest block mb-4">
              01 // Réalisations
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#E8E5DF] font-editorial leading-tight">
              DES PROJETS. <br />
              <span className="italic font-light text-[#B89B65]">DES UNIVERS.</span> <br />
              DES EXPÉRIENCES.
            </h2>
          </div>
          <p className="text-[#858891] max-w-md text-sm md:text-base leading-relaxed">
            Chaque réalisation est conçue comme une pièce unique, alliant direction artistique exigeante, ergonomie intuitive et performances techniques.
          </p>
        </div>

        {/* Projects Grid / List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {PROJECTS.map((project, index) => (
            <div 
              key={project.id}
              className={`group flex flex-col ${index % 2 === 1 ? 'lg:translate-y-16' : ''}`}
            >
              {/* Image Container */}
              <div 
                onClick={() => onSelectProject(project)}
                className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#151B29] border border-[#151B29] cursor-pointer mb-6"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#090B10] via-transparent to-transparent z-10 opacity-40 group-hover:opacity-20 transition-opacity" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Number Badge */}
                <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-[#090B10]/80 backdrop-blur-md border border-[#B89B65]/30 text-[#B89B65] text-xs font-mono">
                  {project.number}
                </div>

                {/* Quick overlay action */}
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-[#090B10]/40 backdrop-blur-xs">
                  <span className="px-6 py-3 rounded-full bg-[#E8E5DF] text-[#090B10] text-xs font-bold uppercase tracking-wider shadow-2xl">
                    Voir les détails
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between text-xs text-[#858891]">
                  <span className="text-[#B89B65] font-medium uppercase tracking-wider">{project.category}</span>
                  <span>{project.client}</span>
                </div>

                <h3 
                  onClick={() => onSelectProject(project)}
                  className="text-2xl md:text-3xl font-bold text-[#E8E5DF] font-editorial hover:text-[#B89B65] transition-colors cursor-pointer"
                >
                  {project.title}
                </h3>

                <p className="text-sm text-[#858891] leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                <div className="flex items-center gap-6 pt-3">
                  <button 
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#E8E5DF] hover:text-[#B89B65] transition-colors cursor-pointer group/btn"
                  >
                    <span>Découvrir le projet</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>

                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#858891] hover:text-[#E8E5DF] transition-colors"
                  >
                    <span>Visiter le site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
