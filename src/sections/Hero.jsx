import { ArrowRight, HardHat, Award, ShieldCheck, ChevronDown } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

/**
 * Hero Section Component
 * 
 * Full-width hero section featuring high-impact architectural visuals,
 * primary headline, company expertise summary, and dual CTA actions.
 */
export default function Hero({ onOpenQuoteModal }) {
  function scrollToProjects(e) {
    e.preventDefault();
    const element = document.querySelector('#projects');
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
    <section
      id="home"
      aria-label="Welcome to PVS Construction"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 lg:py-28 overflow-hidden bg-slate-950"
    >
      {/* High-Resolution Architectural Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=2000&q=85"
          alt="Modern architectural construction site with steel engineering"
          className="w-full h-full object-cover object-center scale-105"
        />
        {/* Layered Dark Overlay with subtle gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide bg-amber-500/10 text-amber-400 border border-amber-500/30 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
            <span>Premier Engineering & General Contracting</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            Building Your Vision.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-orange-400">
              Constructing Your Future.
            </span>
          </h1>

          {/* Short Description */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl font-normal">
            PVS Construction delivers world-class residential residences, expansive commercial infrastructure, and precision architectural renovations. We build with engineering rigor, unyielding safety standards, and timeless craftsmanship.
          </p>

          {/* Primary and Secondary CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-14">
            <button
              type="button"
              onClick={onOpenQuoteModal}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-amber-500 text-slate-950 font-extrabold text-base tracking-wide hover:bg-amber-400 active:scale-95 transition-all duration-200 shadow-xl shadow-amber-500/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="#projects"
              onClick={scrollToProjects}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-white font-bold text-base border border-slate-700/80 backdrop-blur-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              <span>Explore Our Projects</span>
            </a>
          </div>

          {/* Trust Highlights Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-slate-800/80 text-xs sm:text-sm text-slate-300">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
              <span className="font-medium">Licensed & Fully Insured</span>
            </div>
            <div className="flex items-center gap-2.5">
              <HardHat className="w-5 h-5 text-amber-400 shrink-0" />
              <span className="font-medium">Zero-Harm Safety Protocol</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Award className="w-5 h-5 text-amber-400 shrink-0" />
              <span className="font-medium">Guaranteed On-Time Delivery</span>
            </div>
          </div>

        </div>
      </div>

      {/* Down Scroll Arrow Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 text-slate-400 text-xs animate-bounce opacity-75">
        <span>Scroll Down</span>
        <ChevronDown className="w-4 h-4 text-amber-400" />
      </div>
    </section>
  );
}
