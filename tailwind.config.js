/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                manrope: ["Manrope", "sans-serif"]
            },
            colors: {
                c_Light_Cyan: "hsl(193, 38%, 86%)",
                c_Neon_Green: "hsl(150, 100%, 66%)",
                c_Grayish_Blue: "hsl(217, 19%, 38%)",
                c_Dark_Grayish_Blue: "hsl(217, 19%, 24%)",
                c_Dark_Blue: "hsl(218, 23%, 16%)",
            }
        },
    },
    plugins: [],
}

