/** @type {import('tailwindcss').Config} */


export default {
    content: ["./src/**/*.{html,js,svelte,ts}", "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",  "./node_modules/flowbite-svelte-icons/**/*.{html,js,svelte,ts}",
        
    ],

    theme: {
        colors: {
            maroon: '#702E3E',
            white: '#FFFFFF',
            black: '#010101',
            lightgrey: '#adadad',
            darkgrey: '#6b6b6b'
          },
          extend: {
            fontFamily:{
              dancing:["Dancing Script", "sans-serif"],
            },
          },
    },

    plugins: [require('flowbite/plugin')],
};