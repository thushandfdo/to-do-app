/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx}"],
    mode: "jit",
    theme: {
        extend: {
            backgroundImage: {
                'hero-back': "url('/src/assets/back.jpg')",
            },
        },
    },
    plugins: [],
}

