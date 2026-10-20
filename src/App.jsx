import { useState } from 'react';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import ProjectModal from './components/ProjectModal';

// Homepage Sections
import Hero from './sections/Hero';
import Statistics from './sections/Statistics';
import About from './sections/About';
import Services from './sections/Services';
import Projects from './sections/Projects';
import WhyChooseUs from './sections/WhyChooseUs';
import WorkProcess from './sections/WorkProcess';
import Testimonials from './sections/Testimonials';
import CallToAction from './sections/CallToAction';
import Contact from './sections/Contact';

/**
 * Main Application Component
 * 
 * Assembles the full PVS Construction homepage by combining header,
 * all thematic sections, footer, and interactive dialog modals.
 */
export default function App() {
  // Modal state for "Get a Free Quote"
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [quoteInitialService, setQuoteInitialService] = useState('');

  // Modal state for "View Project"
  const [selectedProject, setSelectedProject] = useState(null);

  // Open quote modal (optionally pre-selected with a specific service)
  function handleOpenQuote(serviceTitle = '') {
    setQuoteInitialService(serviceTitle);
    setIsQuoteOpen(true);
  }

  // Close quote modal
  function handleCloseQuote() {
    setIsQuoteOpen(false);
    setQuoteInitialService('');
  }

  // Open detailed view for a selected project
  function handleViewProject(project) {
    setSelectedProject(project);
  }

  // Close project detail modal
  function handleCloseProject() {
    setSelectedProject(null);
  }

  // Transfer from project modal to quote inquiry
  function handleRequestQuoteFromProject(project) {
    setSelectedProject(null);
    handleOpenQuote(project.category + ' Construction');
  }

  // Trigger quote modal when a user selects a service card
  function handleSelectService(service) {
    handleOpenQuote(service.title);
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans selection:bg-amber-500 selection:text-white">
      {/* 1. Header & Navigation */}
      <Header onOpenQuoteModal={() => handleOpenQuote()} />

      {/* 2. Main Landmark for Accessibility */}
      <main id="main-content" className="flex-1">
        {/* A. Hero Section */}
        <Hero onOpenQuoteModal={() => handleOpenQuote()} />

        {/* B. Company Statistics */}
        <Statistics />

        {/* C. About Us */}
        <About onOpenQuoteModal={() => handleOpenQuote()} />

        {/* D. Services */}
        <Services onSelectService={handleSelectService} />

        {/* E. Featured Projects (with category filter) */}
        <Projects onViewProjectDetails={handleViewProject} />

        {/* F. Why Choose Us */}
        <WhyChooseUs />

        {/* G. Our Work Process */}
        <WorkProcess />

        {/* H. Testimonials */}
        <Testimonials />

        {/* I. Call to Action Banner */}
        <CallToAction onOpenQuoteModal={() => handleOpenQuote()} />

        {/* J. Contact & Inquiries */}
        <Contact />
      </main>

      {/* 3. Footer */}
      <Footer onOpenQuoteModal={() => handleOpenQuote()} />

      {/* 4. Interactive Dialog Modals */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={handleCloseQuote}
        initialService={quoteInitialService}
      />

      <ProjectModal
        project={selectedProject}
        onClose={handleCloseProject}
        onRequestQuoteForProject={handleRequestQuoteFromProject}
      />
    </div>
  );
}
