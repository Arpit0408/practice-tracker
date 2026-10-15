/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          DEFAULT: 'rgb(var(--primary-rgb) / <alpha-value>)',
          hover: 'rgb(var(--primary-hover-rgb) / <alpha-value>)',
          light: 'rgb(var(--primary-light-rgb) / <alpha-value>)',
        },
        surface: {
          app: 'var(--bg-app)',
          card: 'var(--bg-card)',
          muted: 'var(--bg-muted)',
        },
        borderline: {
          DEFAULT: 'var(--border-color)',
          subtle: 'var(--border-subtle)',
        },
        content: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          muted: 'var(--text-muted)',
        }
      }
    },
  },
  plugins: [],
}
