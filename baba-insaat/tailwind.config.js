/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/html/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        second:"#393b38",
        one:"#27577d"
      },
      spacing:
      {
        '100':'30rem'
      }
    },
  },
  plugins: [],
}

