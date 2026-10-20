import { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { companyInfo } from '../data/companyInfo';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Shield,
} from 'lucide-react';

/**
 * Contact Section Component
 * 
 * Features interactive inquiry form with robust client-side validation,
 * clear submission feedback, and explicit frontend demo notification.
 * Also presents complete company contact coordinates and business hours.
 */
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Residential Construction',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle input changes and clear field errors as user types
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  }

  // Client-side validation function
  function validate() {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a contact phone number.';
    } else if (formData.phone.replace(/\D/g, '').length < 7) {
      newErrors.phone = 'Please provide a valid phone number (at least 7 digits).';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please tell us a little about your project.';
    } else if (formData.message.trim().length < 15) {
      newErrors.message = 'Please provide at least 15 characters describing your project.';
    }

    return newErrors;
  }

  // Form submission handler
  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    // Simulate standard asynchronous API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  }

  // Reset form to send another message
  function handleSendAnother() {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: 'Residential Construction',
      message: '',
    });
    setErrors({});
  }

  return (
    <section id="contact" aria-label="Contact PVS Construction" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionTitle
          badge="Start the Conversation"
          title="Connect with Our Project Engineers & Estimators"
          description="Have questions about blueprints, cost estimates, or municipal zoning? Reach out to schedule a technical discovery call."
          centered={true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact Coordinates & Business Hours */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl border border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

              <h3 className="text-2xl font-bold text-white mb-2">
                Headquarters & Dispatch
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                Visit our regional design office or reach out directly to our central estimating desk.
              </p>

              {/* Coordinates List */}
              <div className="space-y-6">
                
                {/* Physical Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 text-amber-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Office Address
                    </h4>
                    <p className="text-sm font-semibold text-slate-100 mt-1">
                      {companyInfo.contact.address}
                    </p>
                  </div>
                </div>

                {/* Direct Telephone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 text-amber-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Telephone
                    </h4>
                    <p className="text-sm font-semibold text-slate-100 mt-1">
                      <a href={`tel:${companyInfo.contact.phoneClean}`} className="hover:text-amber-400 transition-colors">
                        {companyInfo.contact.phone}
                      </a>
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Secondary: {companyInfo.contact.secondaryPhone}
                    </p>
                  </div>
                </div>

                {/* Direct Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 text-amber-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Direct Email
                    </h4>
                    <p className="text-sm font-semibold text-slate-100 mt-1">
                      <a href={`mailto:${companyInfo.contact.email}`} className="hover:text-amber-400 transition-colors">
                        {companyInfo.contact.email}
                      </a>
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Estimates: {companyInfo.contact.quoteEmail}
                    </p>
                  </div>
                </div>

                {/* Operating Business Hours */}
                <div className="flex items-start gap-4 pt-2 border-t border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 text-amber-400 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="text-xs text-slate-300 space-y-1">
                    <h4 className="font-bold uppercase tracking-wider text-slate-400 mb-1">
                      Operating Hours
                    </h4>
                    <p>{companyInfo.contact.businessHours.weekdays}</p>
                    <p>{companyInfo.contact.businessHours.saturday}</p>
                    <p className="text-slate-400">{companyInfo.contact.businessHours.sunday}</p>
                  </div>
                </div>

              </div>

              {/* Safety & Compliance Badge */}
              <div className="mt-8 pt-6 border-t border-slate-800 flex items-center gap-3 text-xs text-slate-400">
                <Shield className="w-4 h-4 text-amber-400 shrink-0" />
                <span>OSHA Compliant • Certified Building Contractors</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Enquiry Form */}
          <div className="lg:col-span-7 bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-card">
            
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-slate-900">
                Send Us a Project Enquiry
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Fill in the details below and an engineer will review your project requirements.
              </p>
            </div>

            {/* Submission Status Message (Success) */}
            {isSubmitted ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900">
                  Thank You, {formData.name}!
                </h4>
                <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                  Your project enquiry regarding <strong className="text-slate-900">{formData.projectType}</strong> has been logged in this frontend demonstration.
                </p>

                {/* Explicit Frontend Demo Notice per prompt instructions */}
                <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-950 text-left max-w-md mx-auto space-y-1">
                  <p className="font-bold flex items-center gap-1.5 text-amber-800">
                    <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                    Frontend Demonstration Pipeline Notice:
                  </p>
                  <p className="text-slate-700">
                    This submission was validated and processed in client-side state. In production, this can be easily connected to an API endpoint, EmailJS, Formspree, or your backend database.
                  </p>
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handleSendAnother}
                    className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-colors"
                  >
                    Submit Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                
                {/* Name Field */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Jonathan Edwards"
                    className={`w-full px-4 py-3 rounded-xl border bg-white text-sm text-slate-900 focus:outline-none transition-colors ${
                      errors.name ? 'border-red-400 bg-red-50/20' : 'border-slate-200 focus:border-amber-500'
                    }`}
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>

                {/* Email and Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@company.com"
                      className={`w-full px-4 py-3 rounded-xl border bg-white text-sm text-slate-900 focus:outline-none transition-colors ${
                        errors.email ? 'border-red-400 bg-red-50/20' : 'border-slate-200 focus:border-amber-500'
                      }`}
                    />
                    {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className={`w-full px-4 py-3 rounded-xl border bg-white text-sm text-slate-900 focus:outline-none transition-colors ${
                        errors.phone ? 'border-red-400 bg-red-50/20' : 'border-slate-200 focus:border-amber-500'
                      }`}
                    />
                    {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                {/* Project Type */}
                <div>
                  <label htmlFor="contact-project-type" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Project Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="contact-project-type"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 focus:outline-none focus:border-amber-500"
                  >
                    <option value="Residential Construction">Residential Construction (Custom Homes, Villas)</option>
                    <option value="Commercial Construction">Commercial Construction (Offices, Retail, Warehouses)</option>
                    <option value="Renovation and Remodeling">Renovation & Structural Remodeling</option>
                    <option value="Architectural Planning and Design">Architectural Planning & 3D BIM Design</option>
                    <option value="Interior Fit-Out">Turnkey Interior Fit-Out</option>
                    <option value="Project Management">Full Construction Project Management</option>
                    <option value="Other">Other Civil Works Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Project Scope & Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please mention your site location, approximate square footage, timeline, or any specific architectural drawings available..."
                    className={`w-full px-4 py-3 rounded-xl border bg-white text-sm text-slate-900 focus:outline-none transition-colors resize-none ${
                      errors.message ? 'border-red-400 bg-red-50/20' : 'border-slate-200 focus:border-amber-500'
                    }`}
                  />
                  {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                </div>

                {/* Client Side Notice */}
                <div className="flex items-start gap-2 text-xs text-slate-500">
                  <HelpCircle className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                  <span>
                    Your inquiry is protected by professional confidentiality. We never disclose client details or site coordinates.
                  </span>
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-xl bg-amber-500 text-slate-950 hover:bg-amber-400 font-extrabold text-sm uppercase tracking-wider transition-all duration-200 shadow-md shadow-amber-500/20 flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
                >
                  {isSubmitting ? (
                    <span>Validating & Sending...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Project Enquiry</span>
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
