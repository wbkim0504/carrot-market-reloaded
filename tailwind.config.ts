import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: "var(--roboto-text)",
        rubick: "var(--rubick-text)",
        metallica: "var(--metallica-text)",
      },      
      margin: {
        tomato: "120px",
      },
      borderRadius: {
        "sexy-name": "11.11px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;


// theme: {
//   extend: {
//     backgroundImage: {
//       "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//       "gradient-conic":
//         "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//     },
//   },
// },