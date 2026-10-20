import { CheckCircle2, Target, Eye, Compass, ArrowRight } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

/**
 * About Section Component
 * 
 * Showcases company origin, structural engineering philosophy,
 * mission and vision pillars, and architectural photography.
 */
export default function About({ onOpenQuoteModal }) {
  function handleLearnMore(e) {
    e.preventDefault();
    const element = document.querySelector('#why-us');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }

  return (
    <section id="about" aria-label="About PVS Construction" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Showcase with Experience Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 aspect-[4/3] sm:aspect-[16/11]">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
                alt="Architects and engineers reviewing architectural blueprints on site"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            </div>

            {/* Floating Experience Badge */}
            <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:right-6 bg-slate-900 text-white p-5 sm:p-6 rounded-2xl shadow-xl border border-slate-800 max-w-xs">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-black text-xl shrink-0">
                  25+
                </div>
                <div>
                  <h4 className="font-extrabold text-white text-sm">Years of Craftsmanship</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Engineered with unwavering structural integrity</p>
                </div>
              </div>
            </div>

            {/* Small decorative grid element */}
            <div className="hidden sm:block absolute -top-6 -left-6 w-24 h-24 bg-amber-500/10 rounded-2xl -z-10" />
          </div>

          {/* Right Column: Copy & Principles */}
          <div className="lg:col-span-6 space-y-6">
            <SectionTitle
              badge="About Our Company"
              title="Transforming Architectural Blueprints into Enduring Structures"
              description="Founded on the principles of engineering precision and client partnership, PVS Construction provides turnkey construction, planning, and management services across residential and commercial sectors."
              centered={false}
            />

            {/* Construction Philosophy */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Our Construction Philosophy</h4>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mt-1">
                    Every structure we build is rooted in uncompromising structural safety, thoughtful sustainability, transparent communication, and meticulous craftsmanship.
                  </p>
                </div>
              </div>
            </div>

            {/* Mission & Vision Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-slate-200/80">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-1.5">
                  <Target className="w-4 h-4 text-amber-500" />
                  <span>Our Mission</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  To deliver highest-tier construction outcomes on time and within budget, elevating modern built environments for communities and enterprises.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm mb-1.5">
                  <Eye className="w-4 h-4 text-amber-500" />
                  <span>Our Vision</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  To remain an industry benchmark for sustainable building methods, engineering innovation, and ethical general contracting.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={handleLearnMore}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-colors"
              >
                <span>Learn More About Our Standards</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-amber-500/80 text-amber-700 bg-amber-500/10 hover:bg-amber-500/20 font-bold text-sm transition-colors"
              >
                <span>Request Company Consultation</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
