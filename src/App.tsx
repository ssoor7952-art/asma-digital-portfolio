import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { ProjectModal } from './components/ProjectModal';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Project } from './data/projects';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenContact = () => {
    handleNavigateSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#090B10] text-[#E8E5DF] flex flex-col font-sans">
      
      <Navbar 
        onOpenContact={handleOpenContact}
        onNavigateSection={handleNavigateSection}
      />

      <main className="flex-1">
        <Hero 
          onExploreProjects={() => handleNavigateSection('projets')}
          onOpenContact={handleOpenContact}
        />

        <Projects 
          onSelectProject={(project) => setSelectedProject(project)}
        />

        <Services 
          onOpenContact={handleOpenContact}
        />

        <About />

        <Contact />
      </main>

      <Footer 
        onNavigateSection={handleNavigateSection}
        onOpenContact={handleOpenContact}
      />

      {selectedProject && (
        <ProjectModal 
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />
      )}

    </div>
  );
}
