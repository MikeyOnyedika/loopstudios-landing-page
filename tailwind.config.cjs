/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    color: {
      white: "hsl(0, 0%, 100%)",
      black: "hsl(0, 0%, 0%)",
      gray: "hsl(0, 0%, 55%)",
      "gray-dark": "hsl(0, 0%, 41%)"
    },
    fontSize: {
      "body-copy": "0.938rem",
      "base": "1rem",
      "sm": ["1.35rem", "20px"],
      "md": "1.625rem",
      "lg": ["1.94rem", "35px"], 
      "xl": ["2.58rem", "40px"]
    },
    screens: {
      "sm": "300px",
      "lg": "1200px"
    },
    fontFamily: {
      "sans-lg": ['Josefin Sans', 'sans-serif'],
      "sans-sm": ['Alata', 'sans-serif']
    },
    fontWeight: {
      "light": "300",
      "regular": "400"
    },
    backgroundImage: {
      "hero-mobile": "url('./assets/images/mobile/image-hero.jpg')",
      "hero-desktop": "url('./assets/images/desktop/image-hero.jpg')",
      "deep-earth-mobile": "url('./assets/images/mobile/image-deep-earth.jpg')",
      "deep-earth-desktop": "url('./assets/images/desktop/image-deep-earth.jpg')",
      "night-arcade-mobile": "url('./assets/images/mobile/image-night-arcade.jpg')",
      "night-arcade-desktop": "url('./assets/images/desktop/image-night-arcade.jpg')",
      "soccer-team-mobile": "url('./assets/images/mobile/image-soccer-team.jpg')",
      "soccer-team-desktop": "url('./assets/images/desktop/image-soccer-team.jpg')",
      "grid-mobile": "url('./assets/images/mobile/image-grid.jpg')",
      "grid-desktop": "url('./assets/images/desktop/image-grid.jpg')",

      "from-above-mobile": "url('./assets/images/mobile/image-from-above.jpg')",
      "from-above-desktop": "url('./assets/images/desktop/image-from-above.jpg')",
      "pocket-borealis-mobile": "url('./assets/images/mobile/image-pocket-borealis.jpg')",
      "pocket-borealis-desktop": "url('./assets/images/desktop/image-pocket-borealis.jpg')"
      ,
      "curiosity-mobile": "url('./assets/images/mobile/image-curiosity.jpg')",
      "curiosity-desktop": "url('./assets/images/desktop/image-curiosity.jpg')",
      "fisheye-mobile": "url('./assets/images/mobile/image-fisheye.jpg')",
      "fisheye-desktop": "url('./assets/images/desktop/image-fisheye.jpg')",
      "interactive-mobile": "url('./assets/images/mobile/image-interactive.jpg')",
      "interactive-desktop": "url('./assets/images/desktop/image-interactive.jpg')",
    },
    extend: {},
  },
  plugins: [],
}
