/**
 * Company Information and Contact Placeholders
 * 
 * Central configuration file for all company metadata, contact information,
 * business hours, social links, and navigation items.
 * Easily modify these values to update them across the entire website.
 */

export const companyInfo = {
  name: 'PVS Construction',
  tagline: 'Building Your Vision. Constructing Your Future.',
  shortDescription: 'Premier construction and engineering firm specializing in high-performance commercial structures, luxury residential residences, and architectural renovations.',
  
  // Contact details (Placeholder - replace with actual company contact details)
  contact: {
    phone: '+1 (800) 555-0199',
    phoneClean: '+18005550199',
    secondaryPhone: '+1 (555) 019-2834',
    email: 'contact@pvsconstruction.sample',
    quoteEmail: 'quotes@pvsconstruction.sample',
    address: '450 Skyline Boulevard, Suite 800, Metropolis, CA 90210',
    businessHours: {
      weekdays: 'Monday – Friday: 8:00 AM – 6:00 PM',
      saturday: 'Saturday: 9:00 AM – 2:00 PM',
      sunday: 'Sunday: Closed (Emergency Site Dispatch Available)',
    },
    emergencyHotline: '+1 (800) 555-SITE',
  },

  // Social Media Links (Configurable placeholders)
  socialLinks: [
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'Linkedin' },
    { name: 'Instagram', url: 'https://instagram.com', icon: 'Instagram' },
    { name: 'Facebook', url: 'https://facebook.com', icon: 'Facebook' },
    { name: 'YouTube', url: 'https://youtube.com', icon: 'Youtube' },
  ],

  // Navigation Links
  navLinks: [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Why Choose Us', href: '#why-us' },
    { name: 'Contact', href: '#contact' },
  ],
};
