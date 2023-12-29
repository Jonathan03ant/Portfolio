/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
  theme: {
    extend: {
        fontFamily: {
            'rock-salt': ['Rock Salt', 'cursive'],
            'coding': ['Nanum Gothic Coding', 'monospace'],
            'zillo': ['Zilla Slab', 'serif'],
        },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

