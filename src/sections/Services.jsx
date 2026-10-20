import { servicesData } from '../data/services';
import SectionTitle from '../components/SectionTitle';
import ServiceCard from '../components/ServiceCard';

/**
 * Services Section Component
 * 
 * Renders the 6 core construction services utilizing React's Array.map()
 * method over data configured in src/data/services.js.
 */
export default function Services({ onSelectService }) {
  return (
    <section id="services" aria-label="Our Construction Services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionTitle
          badge="Comprehensive Services"
          title="Engineered Construction Services Tailored to Every Scale"
          description="From private architectural residences to massive commercial complexes, our multidisciplinary team provides turnkey construction capabilities from inception to ribbon-cutting."
          centered={true}
        />

        {/* Responsive Grid of 6 Service Cards rendered via Array.map() */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelectService={onSelectService}
            />
          ))}
        </div>

        {/* Bottom Service Advisory Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800">
          <div>
            <h4 className="text-lg font-bold text-white">Have a unique or multi-phase construction project?</h4>
            <p className="text-sm text-slate-400 mt-1">Our civil engineers and estimators can draft a custom scope of work and feasibility matrix.</p>
          </div>
          <button
            type="button"
            onClick={() => onSelectService(servicesData[0])}
            className="shrink-0 px-6 py-3 rounded-xl bg-amber-500 text-slate-950 font-bold text-sm hover:bg-amber-400 transition-colors"
          >
            Schedule Technical Assessment
          </button>
        </div>

      </div>
    </section>
  );
}
