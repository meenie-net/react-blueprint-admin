/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        "classic-left": "160px",
        "classic-right": "calc(100% - 200px)",
      },
      height: {
        "classic-header": "55px",
        "classic-body": "calc(100% - 55px)",
        "classic-container": "calc(100% - 39px)",
      },
      colors: {
        "text-dark": "#f6f7f9",
        "bg-dark": "#2f343c",
        hover: "#ff9980",
      },
      keyframes: {
        appear_right: {
          "0%": { opacity: 0, transform: "translateX(5px)" },
          "100%": { opacity: 1, transform: "translateX(0px)" },
        },
      },
      animation: {
        appear_right: "appear_right 0.3s ease-in-out",
      },
    },
  },
  plugins: [],
};
