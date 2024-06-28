/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        container: {
            padding: {
                DEFAULT: '16px',
                center: true
            }
        },
        extend: {
            fontFamily: {
                primary: "Poppins, sans-serif",
            },
            colors: {
                primary: {
                    DEFAULT: '#0077C2',
                    '200': '#59a5f5',
                    '300': '#c8ffff'
                }, 
                accent: {
                    DEFAULT: '#00BFFF',
                    '200': '#00619a'
                },
                'primary-light': {
                    DEFAULT: '#FFFFFF',
                    '200': '#f5f5f5',
                    '300': '#cccccc'
                },
                'primary-dark': {
                    DEFAULT: '#333333',
                    '200': '#5c5c5c',
                    '250': '#1E1E1E',
                    '300': '#0F1C2E',
                    '400': '#1f2b3e'
                }
            },
            screens: {
                '2xl': '1320px'
            }
        },
    },
    plugins: [],
}
  