/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#10694e', // Deep Styled Emerald Green
                secondary: '#1e293b', // Slate 800 (Darker Text)
                accent: '#eab308', // Gold/Yellow
                background: '#ffffff',
                text: '#374151', // Gray 700
                light: '#f3f4f6', // Light Gray for sections
            },
            fontFamily: {
                heading: ['Sora', 'sans-serif'],
                body: ['Sora', 'sans-serif'],
                playfair: ['Playfair Display', 'serif'],
            },
        },
    },
    plugins: [],
}
