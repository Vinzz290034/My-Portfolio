/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg:            '#F8FAFC',   // Very light slate background
        surface:       '#FFFFFF',   // White for cards
        ink:           '#0F172A',   // Slate 900 - headings
        body:          '#475569',   // Slate 600 - body text
        muted:         '#94A3B8',   // Slate 400 - muted/labels
        accent:        '#6366F1',   // Indigo 500 - primary accent
        'accent-hover':'#4F46E5',   // Indigo 600 - hover accent
        'accent-soft': '#EEF2FF',   // Indigo 50 - soft accent bg
        'accent-mid':  '#C7D2FE',   // Indigo 200 - mid accent
        border:        '#E2E8F0',   // Slate 200 - borders
        'border-dark': '#CBD5E1',   // Slate 300 - stronger borders
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card:    '0 1px 3px 0 rgb(0 0 0 / 0.07), 0 1px 2px -1px rgb(0 0 0 / 0.07)',
        'card-md':'0 4px 6px -1px rgb(0 0 0 / 0.07), 0 2px 4px -2px rgb(0 0 0 / 0.07)',
        'card-lg':'0 10px 15px -3px rgb(0 0 0 / 0.08), 0 4px 6px -4px rgb(0 0 0 / 0.05)',
        'card-xl':'0 20px 25px -5px rgb(0 0 0 / 0.08), 0 8px 10px -6px rgb(0 0 0 / 0.04)',
      },
    },
  },
  plugins: [],
}