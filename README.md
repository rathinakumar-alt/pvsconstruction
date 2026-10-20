# PVS Construction — Professional Company Website

A modern, high-performance, responsive construction company website built with **React**, **Vite**, and **Tailwind CSS**.

---

## 🏗️ Table of Contents
1. [Overview & Tech Stack](#overview--tech-stack)
2. [Project Setup & Terminal Commands](#project-setup--terminal-commands)
3. [Folder Structure](#folder-structure)
4. [How the React Components Communicate](#how-the-react-components-communicate)
5. [How Tailwind CSS Controls the Design](#how-tailwind-css-controls-the-design)
6. [How to Customize Content](#how-to-customize-content)
   - Company Name & Contact Information
   - Services
   - Projects Portfolio
   - Statistics & Milestones
   - Testimonials
7. [Connecting to a Real Backend or Email Service](#connecting-to-a-real-backend-or-email-service)
8. [Building for Production](#building-for-production)

---

## 1. Overview & Tech Stack

This project is structured specifically for **beginners learning React** while upholding modern architectural and visual aesthetics:

- **React (v19+)**: Functional components with simple, transparent React hooks (`useState`, `useEffect`).
- **Vite**: Ultra-fast build tool and development server with Hot Module Replacement (HMR).
- **Tailwind CSS (v3)**: Utility-first CSS framework configured with custom brand colors, typography, and elevation shadows.
- **Lucide React**: Modern, scalable icon library.
- **Google Fonts**: Clean, high-legibility typography via `Plus Jakarta Sans`.

---

## 2. Project Setup & Terminal Commands

### Step 1: Install Dependencies
Open your terminal inside the project directory (`d:\2026\PVS-Construction`) and run:
```bash
npm install
```

### Step 2: Start the Development Server
```bash
npm run dev
```
Once started, open your browser and navigate to:
```
http://localhost:5173/
```

### Step 3: Run the Production Build
To test that all code compiles into an optimized bundle:
```bash
npm run build
```

To preview the generated production build locally:
```bash
npm run preview
```

---

## 3. Folder Structure

The project separates presentation, data, and layout into clean, descriptive folders:

```
pvs-construction/
├── public/
│   └── favicon.svg           # Branded architectural icon
├── src/
│   ├── components/           # Reusable UI building blocks
│   │   ├── Header.jsx        # Sticky navigation with mobile drawer
│   │   ├── Footer.jsx        # Credentials, links, social channels, copyright
│   │   ├── SectionTitle.jsx  # Consistent section headings & badges
│   │   ├── ServiceCard.jsx   # Card layout for individual services
│   │   ├── ProjectCard.jsx   # Card layout with image & project specs
│   │   ├── ProjectModal.jsx  # Detailed project pop-up modal
│   │   ├── QuoteModal.jsx    # "Get a Free Quote" pop-up modal
│   │   └── TestimonialCard.jsx # Client review cards with rating stars
│   ├── sections/             # Standalone homepage sections
│   │   ├── Hero.jsx          # Hero banner with architectural visual & CTAs
│   │   ├── Statistics.jsx    # 4 company metrics cards
│   │   ├── About.jsx         # Philosophy, mission, vision, and photo
│   │   ├── Services.jsx      # 6 core services rendered via map()
│   │   ├── Projects.jsx      # Filterable portfolio grid
│   │   ├── WhyChooseUs.jsx   # 6 core value proposition blocks
│   │   ├── WorkProcess.jsx   # 4-phase project execution lifecycle
│   │   ├── Testimonials.jsx  # Sample customer feedback cards
│   │   ├── CallToAction.jsx  # High-conversion consultation banner
│   │   └── Contact.jsx       # Coordinates & validated inquiry form
│   ├── data/                 # Separated content files (no JSX clutter)
│   │   ├── companyInfo.js    # Address, phones, emails, nav links, hours
│   │   ├── services.js       # List of 6 services and deliverables
│   │   ├── projects.js       # Showcase projects and categories
│   │   ├── statistics.js     # Milestone statistics
│   │   ├── whyChooseUs.js    # Value propositions and ISO commitments
│   │   ├── workProcess.js    # 4 project phases
│   │   └── testimonials.js   # Client reviews with sample notices
│   ├── App.jsx               # Main root component coordinating state
│   ├── main.jsx              # Application entry point
│   └── index.css             # Tailwind base styles and smooth scroll
├── index.html                # HTML entry point with Google Fonts & SEO tags
├── tailwind.config.js        # Color palette, fonts, and shadow tokens
└── package.json              # Project dependencies and npm scripts
```

---

## 4. How the React Components Communicate

The application follows standard React data flow:

1. **Unidirectional Data Flow via Props**:
   - Data arrays located in `src/data/` (e.g., `services.js`, `projects.js`) are imported into section components.
   - Using JavaScript's `.map()` function, sections render reusable cards (e.g. `<ServiceCard key={service.id} service={service} />`).
   - Every mapped element includes a unique `key` prop for optimal React rendering performance.

2. **State Management via `useState`**:
   - **Mobile Menu Open/Close**: In `Header.jsx`, `const [mobileMenuOpen, setMobileMenuOpen] = useState(false)` controls the visibility of the mobile drawer.
   - **Portfolio Category Filter**: In `Projects.jsx`, `const [activeCategory, setActiveCategory] = useState('All')` filters the array of projects without reloading the page.
   - **Modal Popups**: In `App.jsx`, `selectedProject` and `isQuoteOpen` state variables determine which modal dialog is visible.
   - **Form Validation & Submission**: In `Contact.jsx` and `QuoteModal.jsx`, `formData` and `errors` track input values and display inline feedback.

---

## 5. How Tailwind CSS Controls the Design

Tailwind applies utility classes directly to JSX elements for mobile-first, responsive layouts:

- **Breakpoints**:
  - `sm:` (640px+): Switches 1-column layouts to 2-columns (e.g., `grid grid-cols-1 sm:grid-cols-2`).
  - `md:` (768px+): Tablet adjustments for padding and typography.
  - `lg:` (1024px+): Desktop 3-column or 4-column grids and visible top navigation bar.
- **Color Palette** (defined in `tailwind.config.js`):
  - `bg-slate-950`, `bg-slate-900`: Deep charcoal and slate tones for premium architectural contrast.
  - `text-amber-500`, `bg-amber-500`: Construction amber/gold for primary accents and calls-to-action.
  - `text-orange-500`: Safety orange highlights.
- **Glassmorphism & Shadows**:
  - `backdrop-blur-md`, `bg-slate-950/90`: Translucent glass header that stays visible on scroll.
  - `shadow-card`, `hover:shadow-card-hover`: Subtle card elevation with smooth hover elevation.

---

## 6. How to Customize Content

All content is kept outside the JSX in the `src/data/` folder so you never have to touch complex code to update text or photos.

### A. Update Company Name, Phone, Email & Address
Open `src/data/companyInfo.js` and modify:
```javascript
export const companyInfo = {
  name: 'Your Company Name',
  tagline: 'Your Custom Slogan',
  contact: {
    phone: '+1 (800) 123-4567',
    email: 'info@yourcompany.com',
    address: '123 Main Street, Suite 100, City, ST 12345',
    // ...
  }
}
```

### B. Add or Edit Services
Open `src/data/services.js`. You can add new objects or edit existing ones:
```javascript
{
  id: 'new-service-id',
  title: 'Civil Earthworks & Excavation',
  shortDescription: 'Heavy equipment earthmoving, grading, and site preparation.',
  icon: 'Hammer', // Any supported Lucide icon
  image: 'https://images.unsplash.com/...',
  features: ['Grading', 'Trenching', 'Soil Stabilization']
}
```

### C. Update Project Portfolio
Open `src/data/projects.js` to change project photos, descriptions, categories, or metrics.

### D. Update Testimonials
Open `src/data/testimonials.js` to replace the sample reviews with genuine client reviews.

---

## 7. Connecting to a Real Backend or Email Service

Currently, the contact form in `src/sections/Contact.jsx` and the quote form in `src/components/QuoteModal.jsx` use a client-side simulated submission with complete validation and demonstration feedback.

To connect this to a real backend:

### Option A: Using Formspree (No Backend Required)
1. Sign up at [formspree.io](https://formspree.io) and create a form endpoint (e.g. `https://formspree.io/f/xyz...`).
2. Inside `Contact.jsx`, replace the `setTimeout` inside `handleSubmit` with a `fetch`:
```javascript
const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});
if (response.ok) {
  setIsSubmitted(true);
}
```

### Option B: Using EmailJS
1. Install EmailJS: `npm install @emailjs/browser`.
2. Call `emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_PUBLIC_KEY")` upon submission.

### Option C: Custom Node.js / Express or Python Backend
1. Create a `POST /api/inquiries` route.
2. In `Contact.jsx`, call `axios.post('/api/inquiries', formData)` or `fetch('/api/inquiries', ...)`.

---

## 8. Building for Production

When you are ready to deploy to Netlify, Vercel, AWS S3, or Cloudflare Pages:

```bash
npm run build
```

This compiles your application into the `dist/` directory. Upload the contents of the `dist/` folder to any static hosting provider.
