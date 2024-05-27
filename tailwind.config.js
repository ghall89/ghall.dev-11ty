/** @type {import('tailwindcss').Config} */
export default {
  content: ["./_site/**/*.{html,njk}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rec Mono Semicasual", "mono"],
      },
    },
  },
  plugins: [],
};
