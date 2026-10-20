import {
  HardHat,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowUp,
  ShieldCheck,
} from 'lucide-react';
import { companyInfo } from '../data/companyInfo';
import { servicesData } from '../data/services';

// Crisp, standalone SVG icons for social platforms
function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.79v8.37H6.46v-8.37M7.86 6.32a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24Z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function YoutubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

const socialIcons = {
  Linkedin: LinkedinIcon,
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  Youtube: YoutubeIcon,
};

/**
 * Footer Component
 * 
 * Comprehensive website footer containing company credentials,
 * services taxonomy, direct contact channels, social links, and copyright.
 */
export default function Footer({ onOpenQuoteModal }) {
  const currentYear = new Date().getFullYear();

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  function handleNavClick(e, href) {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-14 border-b border-slate-900">
          
          {/* Col 1: Branding & Philosophy */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-black shadow-md shadow-amber-500/20">
                <HardHat className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                PVS <span className="text-amber-500 text-base uppercase tracking-widest font-extrabold">Construction</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              {companyInfo.shortDescription}
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-amber-500" />
              <span>Licensed, Bonded & Insured General Contractor</span>
            </div>

            {/* Social Channels */}
            <div className="pt-2 flex items-center gap-2.5">
              {companyInfo.socialLinks.map((item) => {
                const IconComponent = socialIcons[item.icon] || LinkedinIcon;
                return (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit our ${item.name} page`}
                    className="w-9 h-9 rounded-xl bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-slate-300 flex items-center justify-center transition-all duration-200 border border-slate-800"
                  >
                    <IconComponent />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              Navigation
            </h4>
            <ul className="space-y-3 text-sm">
              {companyInfo.navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-amber-400 transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={onOpenQuoteModal}
                  className="text-amber-400 hover:text-amber-300 font-semibold"
                >
                  Request a Free Quote →
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              Our Services
            </h4>
            <ul className="space-y-3 text-sm">
              {servicesData.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    onClick={(e) => handleNavClick(e, '#services')}
                    className="hover:text-amber-400 transition-colors inline-block"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Information */}
          <div className="space-y-3.5">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              Headquarters
            </h4>

            <div className="flex items-start gap-3 text-sm">
              <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-1" />
              <span>{companyInfo.contact.address}</span>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <Phone className="w-4 h-4 text-amber-500 shrink-0" />
              <a href={`tel:${companyInfo.contact.phoneClean}`} className="hover:text-amber-400 transition-colors">
                {companyInfo.contact.phone}
              </a>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <Mail className="w-4 h-4 text-amber-500 shrink-0" />
              <a href={`mailto:${companyInfo.contact.email}`} className="hover:text-amber-400 transition-colors">
                {companyInfo.contact.email}
              </a>
            </div>

            <div className="flex items-start gap-3 text-xs pt-1 text-slate-400">
              <Clock className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <p>{companyInfo.contact.businessHours.weekdays}</p>
                <p>{companyInfo.contact.businessHours.saturday}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {currentYear} {companyInfo.name}. All rights reserved. Professional Construction Services.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-slate-400">Engineered for Safety, Durability & Precision</span>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors border border-slate-800"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 text-amber-500" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
