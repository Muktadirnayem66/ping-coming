/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'sm': {'max':'375px'}
    },
    extend: {
      backgroundColor:{
        
        "LightRed":"hsl(354, 100%, 66%)",
        "PaleBlue": "hsl(223, 100%, 88%)",
        
        
      },
      textColor:{
        "CustomBlue":"hsl(223, 87%, 63%)",
        "VeryDarkBlue":  "hsl(209, 33%, 12%)",
        "Gray":"hsl(0, 0%, 59%)"
      }
      ,
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}