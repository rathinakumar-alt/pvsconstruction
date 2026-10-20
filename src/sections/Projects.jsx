import { useState } from 'react';
import { projectsData, projectCategories } from '../data/projects';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';

/**
 * Projects Section Component
 * 
 * Interactive portfolio showcasing sample architectural developments.
 * Uses beginner-friendly React useState to filter projects by category.
 */
export default function Projects({ onViewProjectDetails }) {
  // State for active category filter
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter projects based on the active category
  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" aria-label="Featured Projects Portfolio" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionTitle
          badge="Featured Portfolio"
          title="Milestone Projects Built with Precision"
          description="Explore our curated portfolio of residential villas, commercial towers, civic venues, and adaptive reuse restorations."
          centered={true}
        />

        {/* Category Filter Buttons (Beginner-friendly React useState) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {projectCategories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 ${
                  isActive
                    ? 'bg-amber-500 text-slate-950 shadow-md shadow-amber-500/20 scale-105'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Responsive Grid of Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={onViewProjectDetails}
            />
          ))}
        </div>

        {/* Empty state safeguard if no items match */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
            <p className="text-slate-500 text-sm">No projects found in this category.</p>
            <button
              type="button"
              onClick={() => setActiveCategory('All')}
              className="mt-3 px-4 py-2 bg-amber-500 text-slate-950 font-bold rounded-lg text-xs"
            >
              Reset Filter
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
