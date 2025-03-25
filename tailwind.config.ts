// how to use:
// <div class="bg-brandMain text-backgroundLight p-md">

import type { Config } from "tailwindcss";

export default <Config>{
  theme: {
    extend: {
      colors: {
        mainBodyText: "#16100B",
        mainBodyBg: "#FFF7EF",
        cardsSectionsBg: "#FFEAD6",
        border: "#A67B5B",
        rateStars: "#F2DE48",
      },
      fontSize: {
        body: "24px",
        h2: "48px",
        h1: "64px",
      },
      spacing: {

      },
      fontFamily:{
        main: ["Montserrat", "sans-serif"],
      }
    },
  },
  plugins: [],
};


