import { whyChooseUsData } from '../data/whyChooseUs';
import SectionTitle from '../components/SectionTitle';
import { ShieldCheck, Users, Coins, Clock, HardHat, HeartHandshake } from 'lucide-react';

const iconMap = {
  ShieldCheck,
  Users,
  Coins,
  Clock,
  HardHat,
  HeartHandshake,
};

/**
 * WhyChooseUs Section Component
 * 
 * Highlights the 6 core pillars that define the company's reputation,
 * standard of work, and project delivery guarantee.
 */
export default function WhyChooseUs() {
  return (
    <section id="why-us" aria-label="Why Choose PVS Construction" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionTitle
          badge="Our Competitive Edge"
          title="Why Leading Developers & Homeowners Choose Us"
          description="Built on transparency, certified engineering expertise, and an unwavering commitment to zero-defect execution."
          centered={true}
        />

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUsData.map((item) => {
            const Icon = iconMap[item.icon] || ShieldCheck;
            return (
              <div
                key={item.id}
                className="group p-8 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-card-hover hover:border-amber-500/40 transition-all duration-300 relative flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: Icon and Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200/80 text-amber-600 flex items-center justify-center shadow-sm group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-slate-200/60 text-slate-700">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/50 flex items-center text-xs font-semibold text-amber-600">
                  <span>Standard Company Commitment</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
