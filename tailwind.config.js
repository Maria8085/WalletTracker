/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js,jsx,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        'my-gray': "#F5F5F5",
        'my-button-gray': "#90ABC5",
        'my-blue': "#4DA7FF",
        'my-gray02': "#77828C",
        "my-gray03": "#AEBBC8",
        "my-green": "#1FB625",
      },
      backgroundImage: {
        'search':'url("public/images/search.svg")',
      },
    },
  },
  plugins: [],
};
