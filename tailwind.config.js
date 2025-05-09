/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "rgb(51, 63, 77)",             // For main text, body content, paragraphs, headings
        background: "rgb(230, 241, 247)",    // For page background, section backgrounds, cards
        primary: "rgb(11, 60, 93)",          // For navbar, footer, primary buttons (like "Add to cart", "Login"), key elements
        secondary: "rgb(127, 205, 255)",     // For hover states, secondary buttons, badges, tab highlights
        accent: "rgb(227, 206, 102)",        // For highlight areas like discount tags, "New", "Popular", price emphasis
      }
      
    },
  },
  plugins: [require("daisyui")],
};
