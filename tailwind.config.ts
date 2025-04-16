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
        primaryA: '#7B4B27', // admin : brown background
        secondaryA: '#F9F5F2', // admin : card background
        accentA: '#CBA58D', // admin : buttons etc
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
