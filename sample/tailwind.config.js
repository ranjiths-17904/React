/** @type {import('tailwindcss').Config} */
export default {
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideInLeft: {
          '0%': {
            transform: 'translateX(-100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        loadingStep: {
          '0%': {
            boxShadow: '0 10px 0 rgba(0, 0, 0, 0), 0 10px 0 #e5e5e5, -35px 50px 0 #e5e5e5, -70px 90px 0 #e5e5e5',
          },
          '100%': {
            boxShadow: '0 10px 0 #e5e5e5, -35px 50px 0 #e5e5e5, -70px 90px 0 #e5e5e5, -70px 90px 0 rgba(0, 0, 0, 0)',
          },
        },
      },
      animation: {
        'slide-in-left': 'slideInLeft 1s ease-in-out forwards',
        'bounce': 'bounce 0.5s ease-in-out infinite alternate',
        'loading-step': 'loadingStep 1s ease-in-out infinite',

        // Staggered animation for each card
        'delay-1': 'slideInLeft 1s ease-in-out 0.2s forwards',
        'delay-2': 'slideInLeft 1s ease-in-out 0.4s forwards',
        'delay-3': 'slideInLeft 1s ease-in-out 0.6s forwards',
        'delay-4': 'slideInLeft 1s ease-in-out 0.8s forwards',
        'delay-5': 'slideInLeft 1s ease-in-out 1s forwards',
        'delay-6': 'slideInLeft 1s ease-in-out 2s forwards',
        'delay-7': 'slideInLeft 1s ease-in-out 3s forwards',
      },
    },
  },
  plugins: [],
}
