import {
  Home,
  Building2,
  Hammer,
  Compass,
  PaintBucket,
  ClipboardCheck,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

// Map icon strings from servicesData to Lucide React icon components
const iconMap = {
  Home,
  Building2,
  Hammer,
  Compass,
  PaintBucket,
  ClipboardCheck,
};

/**
 * ServiceCard Component
 * 
 * Displays individual construction services with an icon, title, short description,
 * key deliverables checklist, and a call-to-action button.
 */
export default function ServiceCard({ service, onSelectService }) {
  const IconComponent = iconMap[service.icon] || Building2;

  return (
    <div className="group flex flex-col justify-between bg-white rounded-2xl p-7 border border-slate-200/80 shadow-card hover:shadow-card-hover hover:border-amber-500/50 transition-all duration-300 relative overflow-hidden">
      {/* Decorative top accent line on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        {/* Service Header: Icon & Image Badge */}
        <div className="flex items-center justify-between mb-6">
          <div className="w-14 h-14 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-slate-900 group-hover:scale-105 transition-all duration-300 shadow-sm">
            <IconComponent className="w-7 h-7" />
          </div>
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
            Phase Spec
          </span>
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
          {service.title}
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          {service.shortDescription}
        </p>

        {/* Features Checklist */}
        {service.features && (
          <ul className="space-y-2.5 mb-8 border-t border-slate-100 pt-5">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2.5 text-xs font-medium text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Action CTA */}
      <button
        type="button"
        onClick={() => onSelectService(service)}
        className="inline-flex items-center justify-between w-full pt-4 border-t border-slate-100 text-sm font-semibold text-slate-900 hover:text-amber-600 group/btn transition-colors"
      >
        <span>Request Service Proposal</span>
        <span className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover/btn:bg-amber-500 group-hover/btn:text-white transition-all duration-200">
          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
        </span>
      </button>
    </div>
  );
}
