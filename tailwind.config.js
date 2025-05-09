/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "rgb(11, 2, 26)", // For main text, body content, paragraphs, headings
        background: "rgb(244, 236, 253)", // For page background, section backgrounds, cards
        primary: "rgb(121, 42, 237)", // For navbar, footer, primary buttons (like "Add to cart", "Login"), key elements
        secondary: "rgb(243, 118, 143)", // For hover states, secondary buttons, badges, tab highlights
        accent: "rgb(240, 119, 79)", // For highlight areas like discount tags, "New", "Popular", price emphasis
      },
    },
  },
  plugins: [require("daisyui")],
};
