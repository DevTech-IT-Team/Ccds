/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Core navy/blue palette
        navy:        '#050f2c',
        'navy-mid':  '#0a1f5c',
        'navy-card': '#0d2167',
        blue:        '#1d4ed8',
        'blue-mid':  '#2563eb',
        'blue-btn':  '#3b82f6',
        'blue-light':'#60a5fa',
        'blue-glow': '#93c5fd',
        'blue-pale': '#dbeafe',
        'blue-faint':'#eff6ff',

        // Alias so old class names still work
        'teal-deep': '#050f2c',
        'teal':      '#1d4ed8',
        'aqua':      '#60a5fa',
        'aqua-pale': '#dbeafe',

        // Neutrals
        sand:        '#f0f4ff',
        clay:        '#2563eb',
        'clay-light':'#60a5fa',
        ink:         '#0f172a',
        'ink-soft':  '#475569',
        'ink-muted': '#94a3b8',
      },
      fontFamily: {
        display: ['Geist', 'Fraunces', 'serif'],
        geist:   ['Geist', 'sans-serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl:  '12px',
        '2xl':'16px',
        '3xl':'24px',
        '4xl':'32px',
      },
      boxShadow: {
        glow:  '0 0 40px rgba(29,78,216,0.35)',
        card:  '0 4px 24px rgba(5,15,44,0.10)',
        'card-hover': '0 12px 40px rgba(5,15,44,0.18)',
      },
      backgroundImage: {
        'hero-gradient':   'linear-gradient(135deg, #050f2c 0%, #0a1f5c 50%, #1a3a8f 100%)',
        'section-gradient':'linear-gradient(180deg, #ffffff 0%, #eff6ff 100%)',
        'card-gradient':   'linear-gradient(135deg, #0d2167 0%, #1a3a8f 100%)',
        'btn-gradient':    'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)',
      },
    },
  },
  plugins: [],
}
