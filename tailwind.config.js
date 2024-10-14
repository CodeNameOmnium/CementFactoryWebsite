/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        /* blue */
        "primary-light": "#5893D4",
        primary: "#1E3E62",
        "primary-dark": "#0B192C",
        "primary-darkest": "#071221",

        /* orange */
        secondary: "#FF6500",
        "darker-secondary": "#C95A00",
        "deep-orange": "#E86A00",
        "burnt-orange": "#BF4D00",
      },
      textShadow: {
        sm: "1px 1px 2px rgba(0, 0, 0, 0.50)",
        DEFAULT: "2px 2px 4px rgba(0, 0, 0, 0.50)",
        lg: "3px 3px 6px rgba(0, 0, 0, 0.3)",
      },
      animation: {
        "hover-fade-up": "fadeUp 0.5s ease forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(50%)", // Aşağıda başlıyor
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)", // Yukarıya doğru hareket ediyor
          },
        },
      },
      container: {
        center: true, // Ortalamak için
        padding: {
          DEFAULT: "1rem", // Varsayılan padding
          sm: "2rem", // Küçük ekranlar için padding
          md: "3rem", // Orta ekranlar için padding
          lg: "4rem", // Büyük ekranlar için padding
          xl: "5rem", // Ekstra büyük ekranlar için padding
        },
        screens: {
          sm: "600px", // Küçük ekranlar için
          md: "800px", // Orta ekranlar için
          lg: "1000px", // Büyük ekranlar için
          xl: "1200px", // Ekstra büyük ekranlar için
          "2xl": "1400px", // İki kat ekstra büyük ekranlar için
        },
      },
    },
    screens: {
      mobile: { max: "1024px" },
      laptop: { min: "1025px" },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-shadow-sm": {
          "text-shadow": "1px 1px 2px rgba(0, 0, 0, 0.50)",
        },
        ".text-shadow": {
          "text-shadow": "2px 2px 4px rgba(0, 0, 0, 0.50)",
        },
        ".text-shadow-lg": {
          "text-shadow": "3px 3px 6px rgba(0, 0, 0, 0.3)",
        },
        ".text-shadow-none": {
          "text-shadow": "none",
        },
      };

      addUtilities(newUtilities);
    },
    function ({ addComponents }) {
      addComponents({
        ".fixed-icon": {
          width: "auto",
          position: "fixed",
          left: "0",
          bottom: "0",
          padding: "10px",
          background: "white",
          borderRadius: "10px",
          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.25)",
          zIndex: "1000",
          cursor: "pointer",
          margin: "20px",
          gap: 0,
          ".icon-text": {
            width: "0",
            opacity: "0",
            whiteSpace: "nowrap",
          },
          ".icon": {
            // opacity: "0",
          },
        },
        ".fixed-icon:hover": {
          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.5)",
          transition: "all 0.3s ease-in-out",
          gap: "5px",
          ".icon-text": {
            width: "180px",
            opacity: "1",
            transition: "all 0.3s ease-in-out",
            overflow: "hidden",
          },
          ".icon-text-1": {
            width: "120px",
          },
          ".icon-text-2": {
            width: "100px",
          },
          ".icon-text-3": {
            width: "180px",
          },
          ".icon": {
            // opacity: "0",
          },
        },
      });
    },
  ],
};
