/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#effbf3',
          100: '#d9f4e0',
          200: '#b7e9c6',
          300: '#8ad89f',
          400: '#57c173',
          500: '#35aa56',
          600: '#248841',
          700: '#226b37',
          800: '#1f552f',
          900: '#1b4629',
        },
        ink: '#1f2937',
        soft: '#6b7280',
        panel: '#f4fbff',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        float: '0 18px 45px rgba(31, 41, 55, 0.10)',
        card: '0 12px 24px rgba(31, 41, 55, 0.08)',
      },
      backgroundImage: {
        hero:
          'radial-gradient(circle at top left, rgba(224, 245, 234, 0.95), rgba(255, 255, 255, 0.72) 45%, rgba(235, 245, 255, 0.85) 100%)',
        cta:
          'linear-gradient(135deg, rgba(35, 109, 53, 1) 0%, rgba(31, 122, 61, 1) 45%, rgba(29, 134, 65, 1) 100%)',
      },
    },
  },
  plugins: [],
}
