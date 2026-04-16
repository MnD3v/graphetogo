/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#01391C', // Dark Forest Green
                secondary: '#1e293b', // Slate 800
                accent: '#5DA603',   // Bright Lime Green
                background: '#ffffff',
                text: '#374151',     // Gray 700
                light: '#f3f4f6',    // Light Gray
            },
            fontFamily: {
                heading: ['Manrope', 'sans-serif'],
                body: ['Manrope', 'sans-serif'],
                anton: ['Anton', 'sans-serif'],
                playfair: ['Playfair Display', 'serif'],
            },
        },
    },
    plugins: [],
}
