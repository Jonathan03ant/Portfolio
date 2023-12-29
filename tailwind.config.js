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
        },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

