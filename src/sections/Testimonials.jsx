import { testimonialsData } from '../data/testimonials';
import SectionTitle from '../components/SectionTitle';
import TestimonialCard from '../components/TestimonialCard';
import { Info } from 'lucide-react';

/**
 * Testimonials Section Component
 * 
 * Displays client feedback cards rendered from testimonialsData.
 * Highlights sample placeholders transparently so future teams can update easily.
 */
export default function Testimonials() {
  return (
    <section aria-label="Client Testimonials and Feedback" className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionTitle
          badge="Client Perspectives"
          title="Reputation Founded on Structural Excellence"
          description="Read what our residential and commercial clients have to say about working alongside the PVS engineering and project teams."
          centered={true}
        />

        {/* Responsive Grid of 3 Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((item) => (
            <TestimonialCard key={item.id} testimonial={item} />
          ))}
        </div>

        {/* Developer / Client Notice Banner */}
        <div className="mt-12 max-w-2xl mx-auto p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-900 flex items-start gap-3">
          <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="font-bold">Content Note:</strong> These testimonial cards contain clearly labeled demonstration sample copy. To insert verified client reviews, simply update the records in <code className="px-1.5 py-0.5 rounded bg-white font-mono text-[11px] text-amber-950">src/data/testimonials.js</code>.
          </p>
        </div>

      </div>
    </section>
  );
}
