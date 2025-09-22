/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          primary: '#0a0a0f',
          secondary: '#1a1a2e',
          accent: '#16213e',
        },
        cosmic: {
          purple: '#6c5ce7',
          blue: '#74b9ff',
          pink: '#fd79a8',
          green: '#00b894',
          orange: '#fdcb6e',
        },
        neon: {
          cyan: '#00cec9',
          purple: '#a29bfe',
        }
      },
      fontFamily: {
        'orbitron': ['Orbitron', 'monospace'],
        'space': ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'nebula': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'cosmic': 'linear-gradient(45deg, #0f0c29, #302b63, #24243e)',
        'galaxy': 'linear-gradient(180deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%)',
        'cosmic-text': 'linear-gradient(45deg, #6c5ce7, #74b9ff, #fd79a8)',
      },
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
        slideInRight: {
          '0%': {
            transform: 'translateX(100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        slideInUp: {
          '0%': {
            transform: 'translateY(100%)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { 
            boxShadow: '0 0 20px rgba(116, 185, 255, 0.3)' 
          },
          '50%': { 
            boxShadow: '0 0 40px rgba(116, 185, 255, 0.6)' 
          },
        },
        cosmicShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        sparkle: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-100px)' },
        },
        cosmicRotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
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
        'slide-in-right': 'slideInRight 1s ease-in-out forwards',
        'slide-in-up': 'slideInUp 1s ease-in-out forwards',
        'fade-in': 'fadeIn 1s ease-in-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'cosmic-shift': 'cosmicShift 3s ease-in-out infinite',
        'sparkle': 'sparkle 20s linear infinite',
        'cosmic-rotate': 'cosmicRotate 20s linear infinite',
        'pulse': 'pulse 2s ease-in-out infinite',
        'bounce': 'bounce 0.5s ease-in-out infinite alternate',
        'loading-step': 'loadingStep 1s ease-in-out infinite',

        // Staggered animations
        'delay-1': 'slideInLeft 1s ease-in-out 0.2s forwards',
        'delay-2': 'slideInLeft 1s ease-in-out 0.4s forwards',
        'delay-3': 'slideInLeft 1s ease-in-out 0.6s forwards',
        'delay-4': 'slideInLeft 1s ease-in-out 0.8s forwards',
        'delay-5': 'slideInLeft 1s ease-in-out 1s forwards',
        'delay-6': 'slideInLeft 1s ease-in-out 1.2s forwards',
        'delay-7': 'slideInLeft 1s ease-in-out 1.4s forwards',
        'delay-8': 'slideInLeft 1s ease-in-out 1.6s forwards',
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'cosmic': '0 0 20px rgba(116, 185, 255, 0.3)',
        'cosmic-lg': '0 0 40px rgba(116, 185, 255, 0.6)',
        'space': '0 20px 40px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
