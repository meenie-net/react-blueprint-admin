/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        "classic-open-left": "160px",
        "classic-large-open-left": "160px",
        "classic-close-left": "50px",
        "classic-large-close-left": "60px",
        "classic-open-right": "calc(100% - 160px)",
        "classic-large-open-right": "calc(100% - 160px)",
        "classic-close-right": "calc(100% - 50px)",
        "classic-large-close-right": "calc(100% - 60px)",
      },
      minWidth: {
        "classic-open-left": "160px",
        "classic-large-open-left": "160px",
        "classic-close-left": "50px",
        "classic-large-close-left": "60px",
        "classic-open-right": "calc(100% - 160px)",
        "classic-large-open-right": "calc(100% - 160px)",
        "classic-close-right": "calc(100% - 50px)",
        "classic-large-close-right": "calc(100% - 60px)",
      },
      height: {
        "classic-header": "45px",
        "classic-large-header": "55px",
      },
      fontSize: {
        "classic-breadcrumb": "14px",
        "classic-large-breadcrumb": "16px",
      },
      colors: {
        "text-dark": "#f6f7f9",
        "bg-dark": "#2f343c",
        hover: "#ff9980",
      },
      keyframes: {
        appear_right: {
          "0%": { opacity: "0", transform: "translateX(5px)" },
          "100%": { opacity: "1", transform: "translateX(0px)" },
        },
      },
      animation: {
        appear_right: "appear_right 0.3s ease-in-out",
      },
    },
  },
  plugins: [],
};
