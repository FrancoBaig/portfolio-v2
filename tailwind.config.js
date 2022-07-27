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
            blue: "#1C4F82",
            white: "#D4D4D4",
            "grey-dark": "#212121",
            grey: "#7A7A7A",
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
