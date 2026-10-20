/**
 * SectionTitle Component
 * 
 * Reusable header component for homepage sections.
 * Ensures consistent typography, badge styling, and subtitle spacing.
 */

export default function SectionTitle({
  badge,
  title,
  description,
  centered = true,
  isDark = false,
}) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border bg-amber-500/10 text-amber-600 border-amber-500/20">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
          {badge}
        </div>
      )}
      
      <h2
        className={`text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight leading-tight ${
          isDark ? 'text-white' : 'text-slate-900'
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed ${
            isDark ? 'text-slate-300' : 'text-slate-600'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
