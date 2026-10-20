import { useState, useEffect } from 'react';
import { Menu, X, HardHat, PhoneCall, ArrowRight } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

/**
 * Header Component
 * 
 * Sticky desktop and mobile navigation bar with company logo, links,
 * mobile drawer menu, and "Get a Free Quote" CTA button.
 */
export default function Header({ onOpenQuoteModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Track window scroll to add elevation and backdrop blur to sticky header
  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key press
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 1024) {
        setMobileMenuOpen(false);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Smooth scroll handler that closes the mobile menu
  function handleNavClick(e, href) {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    const targetElement = document.querySelector(href);
    if (targetElement) {
      // Header offset compensation
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      const id = href.replace('#', '');
      setActiveSection(id);
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/95 backdrop-blur-md shadow-lg shadow-black/10 py-3.5 border-b border-slate-800/80'
          : 'bg-gradient-to-b from-slate-950/90 via-slate-950/70 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Company Branding */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-1"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center text-slate-950 font-black shadow-md shadow-amber-500/20 group-hover:scale-105 transition-transform duration-200">
              <HardHat className="w-5 h-5 stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-1">
                PVS <span className="text-amber-500 font-extrabold text-sm sm:text-base tracking-widest uppercase">Construction</span>
              </span>
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">
                Builders & Engineers
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-1 xl:gap-2 bg-slate-900/60 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-md"
          >
            {companyInfo.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3.5 py-1.5 rounded-full text-sm font-semibold text-slate-300 hover:text-white hover:bg-slate-800/80 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Quick Phone Call Link */}
            <a
              href={`tel:${companyInfo.contact.phoneClean}`}
              className="flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-amber-400 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-1"
            >
              <div className="w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center text-amber-500">
                <PhoneCall className="w-3.5 h-3.5" />
              </div>
              <span className="hidden xl:inline">{companyInfo.contact.phone}</span>
            </a>

            {/* Primary Action Button */}
            <button
              type="button"
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider hover:bg-amber-400 active:scale-95 transition-all duration-200 shadow-md shadow-amber-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <span>Get a Free Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={onOpenQuoteModal}
              className="px-3 py-1.5 rounded-full bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition-colors"
            >
              Quote
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
              className="p-2.5 rounded-xl bg-slate-800/80 text-white hover:text-amber-400 border border-slate-700/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[68px] sm:top-[74px] bg-slate-950/98 border-b border-slate-800 shadow-2xl p-6 backdrop-blur-xl animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-1.5" aria-label="Mobile Navigation">
            {companyInfo.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-4 py-3 rounded-xl text-base font-semibold text-slate-200 hover:text-amber-400 hover:bg-slate-900 transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}
          </nav>

          {/* Mobile Drawer Bottom Info */}
          <div className="mt-6 pt-6 border-t border-slate-800 space-y-3">
            <div className="text-xs text-slate-400">
              <p className="font-semibold text-slate-300">Direct Inquiries:</p>
              <p>{companyInfo.contact.phone}</p>
              <p>{companyInfo.contact.email}</p>
            </div>

            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-3 px-4 rounded-xl bg-amber-500 text-slate-950 font-bold text-sm uppercase tracking-wider hover:bg-amber-400 text-center transition-colors shadow-md shadow-amber-500/20"
            >
              Get a Free Quote Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
