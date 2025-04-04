import type { Config } from "tailwindcss";

export default <Config>{
  theme: {
    extend: {
      colors: {
        brandMain: "#007bff",
        brandAccent: "#ff5733",
        brandMuted: "#6c757d",
        backgroundDark: "#1e293b",
        backgroundLight: "#f8fafc",
      },
      fontSize: {
        tiny: "12px",
        small: "14px",
        regular: "16px",
        big: "20px",
        huge: "24px",
      },
      spacing: {
        xxs: "2px",
        xs: "6px",
        sm: "12px",
        md: "20px",
        lg: "30px",
        xl: "40px",
      },
    },
  },
  plugins: [],
};
