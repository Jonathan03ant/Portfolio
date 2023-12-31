/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
  theme: {
    extend: {
        animation: {
            blink: 'blink 5s infinite',
          },
          keyframes: {
            blink: {
              '0%': { opacity: '1' },
              '50%': { opacity: '0' },
              '100%': { opacity: '1' },
            },
          },
        fontFamily: {
            'rock-salt': ['Rock Salt', 'cursive'],
            'coding': ['Nanum Gothic Coding', 'monospace'],
            'zillo': ['Zilla Slab', 'serif'],
            'rubik': ['EB Garamond', 'serif'],
        },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

