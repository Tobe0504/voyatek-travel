/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        offWhite: {
          100: "#FFFFFF33",
        },
        blue: {
          100: "#0D6EFD",
          200: "#E7F0FF",
          300: "#1D2433",
          400: "#000031",
          500: "#344054",
          600: "#0054E4",
        },
        grey: {
          100: "#647995",
          200: "#98A2B3",
          300: "#F0F2F5",
          400: "#676E7E",
          500: "#E4E7EC",
        },
        brown: {
          100: "#FEF4E6",
          200: "#7A4504",
        },
        red: {
          100: "#FBEAE9",
        },
      },
      fontFamily: {
        body: ["Poppins", "sans-serif"],
      },
      spacing: {
        headerMargin: "174px",
        sideNavWidth: "350px",
        homeHeroHeight: "200px",
        ctaCardMax: "270px",
        sectionMarginTop: "90px",
        hotelImageDimensions: "232px",
        errorContainerWidth: "500px",
        searchContainerWidth: "700px",
      },
    },
  },
  plugins: [],
};
