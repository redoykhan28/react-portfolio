/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#EAE8E0",

          "secondary": "#f66240",

          "accent": "#ff8e75",

          "neutral": "#949BA1",

          "base-100": "#FFFFFF",

          "info": "#F66240",

          "success": "#f2f2f2",

          "warning": "#FBBD23",

          "error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
