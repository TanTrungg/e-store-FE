/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      // padding: "2rem",
      screens: {
        "2xl": "1535px",
        xl: "1279px",
        lg: "1023px",
        md: "767px",
        sm: "639px",
      },
    },
    fontSize: {
      xs: "0.625rem",
      sm: "0.75rem",
      md: "0.8125rem",
      base: "0.875rem",
      lg: "1rem",
      xl: "1.125rem",
      "2xl": "1.25rem",
      "3xl": "1.5rem",
      "4xl": "2rem",
      "5xl": "2.25rem",
      "6xl": "2.5rem",
      "7xl": "3rem",
      "8xl": "4rem",
      "9xl": "6rem",
      "10xl": "8rem",
    },
    screens: {
      "2xl": { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "836px" },
      sm: { max: "639px" },
      exsm: { max: "380px" },
    },
    extend: {
      colors: {
        primary: {
          light: '#D6BBFB',
          DEFAULT: '#9B5DE5', // Màu tím chính
          dark: '#6A3B9A',
        },
        secondary: {
          light: '#FDF4C5',
          DEFAULT: '#FEC601', // Màu vàng chính
          dark: '#C49A02',
        },
        neutral: {
          light: '#E5E5E5',
          DEFAULT: '#A3A3A3', // Màu xám chính
          dark: '#575757',
        },
        danger: {
          light: '#F8D7DA',
          DEFAULT: '#DC3545',
          dark: '#A71D2A',
        },
        success: {
          light: '#D4EDDA',
          DEFAULT: '#28A745',
          dark: '#1C7430',
        },
        warning: {
          light: '#FFF3CD',
          DEFAULT: '#FFC107',
          dark: '#856404',
        },
        info: {
          light: '#D1ECF1',
          DEFAULT: '#17A2B8',
          dark: '#0C5460',
        },
      },
    },
  },
  plugins: [],
}

