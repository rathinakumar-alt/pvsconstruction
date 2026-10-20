import { useState, useEffect } from 'react';
import { X, CheckCircle, AlertCircle, Send, HardHat, Phone, Mail } from 'lucide-react';
import { companyInfo } from '../data/companyInfo';

/**
 * QuoteModal Component
 * 
 * Interactive modal dialog triggered when clicking "Get a Free Quote".
 * Contains quick consultation form with validation and realistic demo feedback.
 */
export default function QuoteModal({ isOpen, onClose, initialService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: initialService || 'Residential Construction',
    estimatedBudget: '$50,000 - $150,000',
    details: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync initialService if provided
  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, projectType: initialService }));
    }
  }, [initialService]);

  // Handle escape key
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  }

  function validate() {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (formData.phone.replace(/\D/g, '').length < 7) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate brief network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  }

  function handleReset() {
    setIsSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: 'Residential Construction',
      estimatedBudget: '$50,000 - $150,000',
      details: '',
    });
    setErrors({});
    onClose();
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
    >
      {/* Dark backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 my-8">
        {/* Top Accent bar */}
        <div className="h-2 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600" />

        {/* Header */}
        <div className="p-6 sm:p-8 pb-4 flex items-start justify-between border-b border-slate-100">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/10 text-amber-600 mb-2">
              <HardHat className="w-3.5 h-3.5" />
              <span>Complimentary Estimation</span>
            </div>
            <h3 id="quote-modal-title" className="text-2xl font-extrabold text-slate-900">
              Request a Free Construction Quote
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Provide project details and our engineering team will prepare an estimate.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close quote modal"
            className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors shrink-0 ml-4"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 pt-6">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle className="w-9 h-9" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">
                Estimation Request Received!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-slate-900">{formData.name}</strong>. Your inquiry for <strong className="text-slate-900">{formData.projectType}</strong> has been logged in our demo submission pipeline.
              </p>
              
              {/* Frontend demo disclaimer */}
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200/60 text-xs text-amber-900 text-left space-y-1">
                <p className="font-semibold flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
                  Frontend Demonstration Notice:
                </p>
                <p className="text-slate-700">
                  This website is currently operating with a frontend-only demo workflow. Form submissions are validated in the browser and not yet piped to a production CRM/backend server.
                </p>
              </div>

              <div className="pt-4 flex justify-center">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label htmlFor="quote-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="quote-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Robert Smith"
                  className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none transition-all ${
                    errors.name ? 'border-red-400 bg-red-50/20' : 'border-slate-200 focus:border-amber-500'
                  }`}
                />
                {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="quote-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="quote-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none transition-all ${
                      errors.email ? 'border-red-400 bg-red-50/20' : 'border-slate-200 focus:border-amber-500'
                    }`}
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="quote-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="quote-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-900 focus:outline-none transition-all ${
                      errors.phone ? 'border-red-400 bg-red-50/20' : 'border-slate-200 focus:border-amber-500'
                    }`}
                  />
                  {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                </div>
              </div>

              {/* Service Type and Estimated Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="quote-service" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Service Needed
                  </label>
                  <select
                    id="quote-service"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-amber-500 bg-white"
                  >
                    <option value="Residential Construction">Residential Construction</option>
                    <option value="Commercial Construction">Commercial Construction</option>
                    <option value="Renovation and Remodeling">Renovation and Remodeling</option>
                    <option value="Architectural Planning and Design">Architectural Planning & Design</option>
                    <option value="Interior Fit-Out">Interior Fit-Out</option>
                    <option value="Project Management">Project Management</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="quote-budget" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Estimated Budget
                  </label>
                  <select
                    id="quote-budget"
                    name="estimatedBudget"
                    value={formData.estimatedBudget}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-amber-500 bg-white"
                  >
                    <option value="Under $50,000">Under $50,000</option>
                    <option value="$50,000 - $150,000">$50,000 – $150,000</option>
                    <option value="$150,000 - $500,000">$150,000 – $500,000</option>
                    <option value="$500,000 - $2M+">$500,000 – $2M+</option>
                  </select>
                </div>
              </div>

              {/* Brief Notes */}
              <div>
                <label htmlFor="quote-details" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Project Notes or Timeline (Optional)
                </label>
                <textarea
                  id="quote-details"
                  name="details"
                  rows={3}
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="Share any site specifications, square footage, or preferred timeline..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-amber-500 resize-none"
                />
              </div>

              {/* Notice */}
              <p className="text-[11px] text-slate-500 leading-normal">
                By submitting this request, you agree to receive a project assessment from PVS Construction. Your information remains confidential.
              </p>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl bg-amber-500 text-slate-950 hover:bg-amber-400 font-bold text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <span>Processing Estimate...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Free Quote Request</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
