import { ArrowRight, PhoneCall, Calendar } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

/**
 * CallToAction Section Component
 * 
 * High-conversion banner encouraging prospective clients to initiate contact,
 * schedule an on-site consultation, or phone the project management office.
 */
export default function CallToAction({ onOpenQuoteModal }) {
  function scrollToContact(e) {
    e.preventDefault();
    const element = document.querySelector('#contact');
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
    <section aria-label="Call to Action" className="py-20 lg:py-24 bg-slate-900 relative overflow-hidden">
      
      {/* Background Architectural Texture with Overlay */}
      <div className="absolute inset-0 z-0 opacity-15">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80"
          alt="Architectural structure texture"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-400 border border-amber-500/30 mb-6">
          <Calendar className="w-3.5 h-3.5" />
          <span>Accepting New Inquiries for Q3 & Q4</span>
        </div>

        {/* Powerful Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
          Ready to Build Something Exceptional?
        </h2>

        {/* Short Description */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10">
          Whether you are developing a flagship commercial campus, designing a custom private residence, or undertaking a complex structural restoration, our senior team is ready to assist.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            onClick={scrollToContact}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-amber-500 text-slate-950 font-extrabold text-base hover:bg-amber-400 active:scale-95 transition-all duration-200 shadow-xl shadow-amber-500/25"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-5 h-5" />
          </a>

          <button
            type="button"
            onClick={onOpenQuoteModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-base border border-slate-700 transition-all duration-200"
          >
            <span>Get an Estimate</span>
          </button>
        </div>

        {/* Direct Phone Assistance */}
        <div className="mt-8 pt-8 border-t border-slate-800/80 inline-flex items-center gap-3 text-xs sm:text-sm text-slate-400">
          <PhoneCall className="w-4 h-4 text-amber-400" />
          <span>Prefer direct discussion? Speak with an estimator today at:</span>
          <a href={`tel:${companyInfo.contact.phoneClean}`} className="text-amber-400 font-bold hover:underline">
            {companyInfo.contact.phone}
          </a>
        </div>

      </div>
    </section>
  );
}
