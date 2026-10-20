import { statisticsData } from '../data/statistics';
import { Award, Briefcase, Smile, Users } from 'lucide-react';

const statIcons = {
  exp: Award,
  projects: Briefcase,
  clients: Smile,
  team: Users,
};

/**
 * Statistics Section Component
 * 
 * Renders key business milestones from the statisticsData array.
 * Includes a subtle disclaimer banner clarifying placeholder data.
 */
export default function Statistics() {
  return (
    <section aria-label="Company Statistics" className="relative -mt-10 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl border border-slate-200/80">
        
        {/* Responsive 4-Column Stat Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {statisticsData.map((stat, idx) => {
            const Icon = statIcons[stat.id] || Award;
            return (
              <div
                key={stat.id}
                className={`flex flex-col items-start ${
                  idx !== 0 ? 'pt-6 sm:pt-0 sm:pl-8' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                    {stat.value}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mt-1">
                  {stat.label}
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-normal">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Informative placeholder caption */}
        <div className="mt-6 pt-6 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
          <span>*Demonstration metrics. Figures represent sample historical milestone goals.</span>
          <span className="hidden sm:inline font-medium text-amber-600">Continuous Growth & Excellence</span>
        </div>
      </div>
    </section>
  );
}
