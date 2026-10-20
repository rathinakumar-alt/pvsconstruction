import { Star, Quote } from 'lucide-react';

/**
 * TestimonialCard Component
 * 
 * Displays verified or sample client reviews.
 * Prominently identifies sample content to ensure compliance and authenticity.
 */
export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between relative">
      {/* Top quotation icon & rating */}
      <div>
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-1 text-amber-500">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>

          <Quote className="w-8 h-8 text-slate-200" />
        </div>

        {/* Project Type Badge */}
        <div className="inline-block px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-100 text-slate-600 mb-4">
          {testimonial.projectType}
        </div>

        {/* Quote text */}
        <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic mb-6">
          "{testimonial.quote}"
        </p>
      </div>

      {/* Client Profile and Sample tag */}
      <div className="pt-5 border-t border-slate-100">
        <div className="flex items-center gap-3.5">
          <img
            src={testimonial.avatar}
            alt={testimonial.clientName}
            className="w-12 h-12 rounded-full object-cover ring-2 ring-amber-500/30"
          />
          <div>
            <h4 className="font-bold text-slate-900 text-sm">
              {testimonial.clientName}
            </h4>
            <p className="text-xs text-slate-500 leading-tight mt-0.5">
              {testimonial.role}
            </p>
          </div>
        </div>

        {testimonial.isSample && (
          <div className="mt-3 text-[10px] uppercase font-bold tracking-wider text-amber-600/80 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/50 inline-block">
            Sample Placeholder Testimonial
          </div>
        )}
      </div>
    </div>
  );
}
