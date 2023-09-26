/** @type {import('tailwindcss').Config} */
import { SCREENS } from './responsive';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'top-bar': "url('/src/assets/images/底@3x.webp')",
        'home': "url('/src/assets/images/Group 146@3x.webp')",
        'story': "url('/src/assets/images/Group 144@3x.webp')",
        'message': "url('/src/assets/images/Group 153@3x.webp')",
        'camera': "url('/src/assets/images/Group 148@3x.webp')",
        'top-bg': "url('/src/assets/images/BG.webp')",
        'ribbons': "url('/src/assets/images/彩帶@3x.webp')",
        'pigeon': "url('/src/assets/images/鴿子@3x.webp')",
        'married': "url('/src/assets/images/WERMARRIED@3x.webp')",
        'zhi': "url('/src/assets/images/彥治@3x.webp')",
        'ching': "url('/src/assets/images/陳淨@3x.webp')",
        'bow-tie': "url('/src/assets/images/蝴蝶結@3x.webp')",
        'couple': "url('/src/assets/images/人@3x.webp')",
        'house': "url('/src/assets/images/house@3x.webp')",
        'tree': "url('/src/assets/images/樹@3x.webp')",
        'bike': "url('/src/assets/images/腳踏車@3x.webp')",
        'gress-left': "url('/src/assets/images/L草叢@3x.webp')",
        'gress-right': "url('/src/assets/images/R草叢@3x.webp')",
        'cloud-left': "url('/src/assets/images/L@3x.webp')",
        'cloud-right': "url('/src/assets/images/R@3x.webp')",
      }
    },
    screens: SCREENS,
  },
  plugins: [],
};
