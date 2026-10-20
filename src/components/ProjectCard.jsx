import { MapPin, ArrowUpRight, Calendar, Maximize2 } from 'lucide-react';

/**
 * ProjectCard Component
 * 
 * Displays individual projects within the responsive grid of the Projects section.
 * Includes thumbnail photography, category tag, metadata badges, location,
 * and a trigger to view in-depth project details.
 */
export default function ProjectCard({ project, onViewDetails }) {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col">
      {/* Project Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
        <img
          src={project.image}
          alt={project.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-slate-900/80 backdrop-blur-md text-amber-400 border border-amber-500/30">
            {project.category}
          </span>
        </div>

        {/* Quick View Button overlay */}
        <button
          type="button"
          onClick={() => onViewDetails(project)}
          aria-label={`View details for ${project.name}`}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/90 hover:bg-amber-500 hover:text-white text-slate-900 flex items-center justify-center shadow-lg backdrop-blur-sm transition-all duration-200 opacity-90 group-hover:opacity-100"
        >
          <Maximize2 className="w-4 h-4" />
        </button>

        {/* Area / Year Badges on Image Bottom */}
        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white/90">
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-amber-400" />
            {project.year}
          </span>
          <span className="font-semibold text-slate-200">{project.area}</span>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Location */}
          <div className="flex items-center gap-1.5 text-xs font-medium text-slate-500 mb-2">
            <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
            <span className="truncate">{project.location}</span>
          </div>

          {/* Project Title */}
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors mb-2.5">
            {project.name}
          </h3>

          {/* Short Description */}
          <p className="text-slate-600 text-sm leading-relaxed line-clamp-2 mb-4">
            {project.shortDescription}
          </p>
        </div>

        {/* Interactive View Details Action */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
          <button
            type="button"
            onClick={() => onViewDetails(project)}
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-amber-600 transition-colors group/link"
          >
            <span>View Project</span>
            <ArrowUpRight className="w-4 h-4 text-amber-500 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </button>
          
          <span className="text-xs font-medium text-slate-400">
            {project.stats?.scope || 'Contract'}
          </span>
        </div>
      </div>
    </div>
  );
}
