/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "cwe-black": "#1E1E24",
        "cwe-orange": "#F38D68",
        "cwe-green": "#17A398",
        "cwe-white": "#fcfcfc",
        "cwe-grey": "#454955",
      },
    },
  },
  plugins: [],
};
