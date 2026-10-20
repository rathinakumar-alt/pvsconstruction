import { useEffect } from 'react';
import { X, MapPin, Calendar, Layers, Clock, DollarSign, Award, CheckCircle } from 'lucide-react';

/**
 * ProjectModal Component
 * 
 * Provides an accessible, responsive pop-up modal showcasing comprehensive
 * details about a selected construction project.
 */
export default function ProjectModal({ project, onClose, onRequestQuoteForProject }) {
  // Listen for Escape key to dismiss modal
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        onClose();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 my-8 flex flex-col max-h-[90vh]">
        {/* Modal Header with Close Button */}
        <div className="relative aspect-[16/9] w-full bg-slate-900 shrink-0">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project modal"
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-900/80 text-white hover:bg-amber-500 hover:text-slate-950 flex items-center justify-center transition-colors shadow-lg backdrop-blur-md"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title on Image */}
          <div className="absolute bottom-5 left-6 right-6">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500 text-slate-950 mb-2">
              {project.category}
            </span>
            <h3 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.name}
            </h3>
            <div className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm mt-1">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{project.location}</span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {/* Quick Specs Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs">
            <div className="space-y-1">
              <span className="text-slate-400 flex items-center gap-1 font-medium">
                <Calendar className="w-3.5 h-3.5 text-amber-500" /> Completion
              </span>
              <p className="font-bold text-slate-800 text-sm">{project.year}</p>
            </div>
            <div className="space-y-1">
              <span className="text-slate-400 flex items-center gap-1 font-medium">
                <Layers className="w-3.5 h-3.5 text-amber-500" /> Total Area
              </span>
              <p className="font-bold text-slate-800 text-sm">{project.area}</p>
            </div>
            <div className="space-y-1">
              <span className="text-slate-400 flex items-center gap-1 font-medium">
                <Clock className="w-3.5 h-3.5 text-amber-500" /> Duration
              </span>
              <p className="font-bold text-slate-800 text-sm">{project.stats?.duration || '18 Months'}</p>
            </div>
            <div className="space-y-1">
              <span className="text-slate-400 flex items-center gap-1 font-medium">
                <Award className="w-3.5 h-3.5 text-amber-500" /> Project Scope
              </span>
              <p className="font-bold text-slate-800 text-sm truncate">{project.stats?.scope || 'EPC General'}</p>
            </div>
          </div>

          {/* Detailed Narrative */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">
              Project Overview & Engineering
            </h4>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              {project.fullDescription}
            </p>
          </div>

          {/* Key Deliverables */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">
              Standard Milestone Deliverables
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Structural Civil & Foundation Integrity</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>HVAC & Energy Efficient MEP Installation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Zero OSHA Violations & Site Audits</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Complete Turnkey Handover & Warranties</span>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-slate-400">
              *Project details and metrics provided for illustrative portfolio demonstration.
            </p>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-colors"
              >
                Close
              </button>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onRequestQuoteForProject(project);
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-amber-500 text-slate-950 text-sm font-bold hover:bg-amber-400 transition-colors shadow-sm"
              >
                Inquire Similar Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
