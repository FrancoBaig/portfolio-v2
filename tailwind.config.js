/** @type {import('tailwindcss').Config} */

// tailwind.config.js
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Inter var", ...defaultTheme.fontFamily.sans],
            },
        },
        colors: {
            blue: "#0071ad",
            white: "#ffffff",
            "grey-dark": "#1a1a1a",
            grey: "#bababa",
            black: "#0f0f0f",
        },
        screens: {
            sd: "500px",
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
        },
    },
    plugins: [],
};
