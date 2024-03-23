/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        mobile_image: "url(./resources/assets/home/mobile/image-header.jpg)",
        tablet_image: "url(./resources/assets/home/tablet/image-headertablet.jpg)",
        desktop_image: "url(./resources/assets/home/desktop/image-hero.jpg)"
      }
    },
  },
  plugins: [],
}

