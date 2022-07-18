/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'dark_bg': "#1a1a1a",
        'prime_text': "#FFEFE2",
        'second_text': "#FCF3fd",
        'second_bg':"#282828",
        'white_bg':"#fafafa",
        'yellow':"#fffd01",
        'black_text':"#14121E",
        'gray_text':"#8b8b8b",
        'btn_bg':"#2f2f2f",
      }
    },
  },
  plugins: [],
}
