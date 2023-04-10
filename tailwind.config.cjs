/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    colors: {
      white: "hsl(0, 0%, 90%)",
      black: "hsl(0, 0%, 0%)",
      gray: {
        DEFAULT: "#8c8c8c",
        dark: "#696969"
      }
    },
    fontSize: {
      "body-copy": ["0.938rem", "30px"],
      "base": "1rem",
      "sm": ["1.35rem", "20px"],
      "md": ["1.625rem", "30px"],
      "lg": ["1.94rem", "35px"],
      "xl": ["2.58rem", "40px"],
      "2xl": ["3.3rem", "56px"],
      "3xl": ["4.1rem", "65px"],
    },
    fontFamily: {
      "sans-lg": ['Josefin Sans', 'sans-serif'],
      "sans-sm": ['Alata', 'sans-serif']
    },
    backgroundImage: {
      "hero-mobile": "url('./assets/images/mobile/image-hero.jpg')",
      "hero-desktop": "url('./assets/images/desktop/image-hero.jpg')",
      "deep-earth-mobile": "url('./assets/images/mobile/image-deep-earth.jpg')",
      "deep-earth-desktop": "url('./assets/images/desktop/image-deep-earth.jpg')",
      "night-arcade-mobile": "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.3)), url('./assets/images/mobile/image-night-arcade.jpg')",
      "night-arcade-desktop": "url('./assets/images/desktop/image-night-arcade.jpg')",
      "soccer-team-mobile": "url('./assets/images/mobile/image-soccer-team.jpg')",
      "soccer-team-desktop": "url('./assets/images/desktop/image-soccer-team.jpg')",
      "grid-mobile": "url('./assets/images/mobile/image-grid.jpg')",
      "grid-desktop": "url('./assets/images/desktop/image-grid.jpg')",
      "from-above-mobile": "url('./assets/images/mobile/image-from-above.jpg')",
      "from-above-desktop": "url('./assets/images/desktop/image-from-above.jpg')",
      "pocket-borealis-mobile": "url('./assets/images/mobile/image-pocket-borealis.jpg')",
      "pocket-borealis-desktop": "url('./assets/images/desktop/image-pocket-borealis.jpg')",
      "curiosity-mobile": "url('./assets/images/mobile/image-curiosity.jpg')",
      "curiosity-desktop": "url('./assets/images/desktop/image-curiosity.jpg')",
      "fisheye-mobile": "url('./assets/images/mobile/image-fisheye.jpg')",
      "fisheye-desktop": "url('./assets/images/desktop/image-fisheye.jpg')",
      "interactive-mobile": "url('./assets/images/mobile/image-interactive.jpg')",
      "interactive-desktop": "url('./assets/images/desktop/image-interactive.jpg')",
    },
    screens: {
      ...defaultTheme.screens,
      'sm': '360px',
    },
    extend: {
      maxWidth: {
        'max': '1220px',
        'hero-text': '600px'
      },
      gridTemplateColumns: {
        'pitch': '5fr 4fr'
      }
    },
  },
  safelist: [

  ],
  plugins: [],
}

console.log(module.exports.theme.screens)
