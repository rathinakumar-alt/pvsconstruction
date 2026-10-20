import { workProcessData } from '../data/workProcess';
import SectionTitle from '../components/SectionTitle';
import { MessageSquare, PenTool, Wrench, CheckCircle2, Check } from 'lucide-react';

const iconMap = {
  MessageSquare,
  PenTool,
  Wrench,
  CheckCircle2,
};

/**
 * WorkProcess Section Component
 * 
 * 4-step linear workflow showcasing how projects evolve from initial discovery
 * to final key handover and warranty protection.
 */
export default function WorkProcess() {
  return (
    <section id="process" aria-label="Our Construction Process" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      
      {/* Background Subtle Gradient Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionTitle
          badge="Structured Methodology"
          title="From Concept to Turnkey Handover in 4 Clear Steps"
          description="A disciplined execution framework engineered to prevent budget overruns, mitigate site risks, and guarantee structural quality."
          centered={true}
          isDark={true}
        />

        {/* 4-Step Process Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {/* Subtle connecting line for desktop view */}
          <div className="hidden lg:block absolute top-16 left-12 right-12 h-0.5 bg-gradient-to-r from-amber-500/30 via-amber-500/50 to-amber-500/30 -z-0" />

          {workProcessData.map((item) => {
            const Icon = iconMap[item.icon] || MessageSquare;
            return (
              <div
                key={item.step}
                className="relative bg-slate-950/70 border border-slate-800 rounded-3xl p-7 flex flex-col justify-between hover:border-amber-500/50 transition-all duration-300 group z-10"
              >
                <div>
                  {/* Step Number & Icon Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-amber-500/40 group-hover:text-amber-400 transition-colors">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-slate-800 text-amber-400 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-slate-950 transition-all duration-300 shadow-md">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Key Deliverable Highlights */}
                {item.highlights && (
                  <div className="pt-4 border-t border-slate-800/80 space-y-2">
                    {item.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
