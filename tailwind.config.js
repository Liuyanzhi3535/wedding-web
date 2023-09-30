/** @type {import('tailwindcss').Config} */
import { SCREENS } from './responsive';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {},
      colors: {
        'content-green': '#526e07',
      },
    },
    screens: SCREENS,
  },
  plugins: [],
};
