/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0f172a',      // Slate 900
          charcoal: '#1e293b',  // Slate 800
          surface: '#334155',   // Slate 700
          muted: '#64748b',     // Slate 500
          light: '#f8fafc',     // Slate 50
          cream: '#f1f5f9',     // Slate 100
        },
        accent: {
          DEFAULT: '#f59e0b',   // Construction Amber/Gold
          hover: '#d97706',     // Darker Amber
          light: '#fef3c7',     // Soft Amber tint
          orange: '#ea580c',    // Construction Safety Orange
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 2px 6px -1px rgba(0, 0, 0, 0.02)',
        'card-hover': '0 12px 30px -4px rgba(0, 0, 0, 0.12), 0 4px 10px -2px rgba(0, 0, 0, 0.05)',
      }
    },
  },
  plugins: [],
}
