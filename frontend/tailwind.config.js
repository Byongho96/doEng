/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/**/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/**/**/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  // safelist: [
  //   {
  //     pattern:
  //       /bg-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pinkrose|primary|secondary|tertiaty)-(50|100|200|300|400|500|600|700|800|900)/,
  //     variants: ["hover", "active", "group-hover", "group-active"],
  //   },
  // ],
  theme: {
    extend: {
      screens: {
        mobile: "400px",
      },
      colors: {
        primary: {
          50: "#FFF5EB",
          100: "#FFE6CE",
          200: "#FFD2A7",
          300: "#FFBD7E",
          400: "#FFA958",
          500: "#FF9633",
          600: "#D9802B",
          700: "#B56B24",
          800: "#91561D",
          900: "#734417",
        },
        secondary: {
          50: "#E9FCE6",
          100: "#CBF7C4",
          200: "#A2F095",
          300: "#76E964",
          400: "#4DE235",
          500: "#26DC09",
          600: "#20BB08",
          700: "#1B9C06",
          800: "#167D05",
          900: "#116304",
        },
        tertiary: {
          50: "#FFFDED",
          100: "#FFFAD4",
          200: "#FFF7B2",
          300: "#FEF38F",
          400: "#FEEF6D",
          500: "#FEEC4D",
          600: "#D8C941",
          700: "#B4A837",
          800: "#91872C",
          900: "#726A23",
        },
      },
      fontFamily: {
        "hongcha-nemo": ["nemo", "ui-sans-serif"],
        "hongcha-lefthand": ["lefthand", "ui-sans-serif"],
        "dolbom-bold": ["dolbomB", "ui-sans-serif"],
        "dolbom-regular": ["dolbomR", "ui-sans-serif"],
        jalnan: ["jalnan", "ui-sans-serif"],
        "hopang-black": ["hopangB", "ui-sans-serif"],
        "hopang-white": ["hopangW", "ui-sans-serif"],
      },
      colors: {
        custom: {
          100: "#ff1256",
          200: "#ff1256",
        },
      },
      backgroundImage: {
        "tale-nav-logo": "url('/src/assets/images/TaleNavLogo.png')",
        "tale-nav-logo-container":
          "url('/src/assets/images/TaleNavLogoContainer.png')",
        "play-detail-open-book": `url("/src/assets/images/DetailBackground.png")`,
        "play-detail-right-osolgil": `url("/src/assets/images/DetailRightBackground.png")`,
        "scene-back": `url("/src/assets/images/SceneBack.png")`,
        "title-pan": `url("/src/assets/images/TitlePan.png")`,
        "word-card": `url("/src/assets/images/wordcard.png")`,
      },
      // animate-[animationName_easingFunction_durationInSeconds_iterationsCount_delayInSeconds_direction]
      animation: {
        "ppyong-super-fast": "ppyong 0.11s both",
        "ppyong-fast": "ppyong 0.33s both",
        "ppyong-base": "ppyong 0.66s both",
        "ppyong-normal": "ppyong 0.99s both",
        "ppyong-slow": "ppyong 1.44s both",
        "ppyong-super-slow": "ppyong 2.22s both",
        "salangsalang-left": "salang-salang-left 5s both infinite",
        "salangsalang-left-leaf": "salang-salang-left 6s both infinite",
        "salangsalang-right": "salang-salang-right 5s both infinite",
        "salangsalang-right-leaf": "salang-salang-right 7s both infinite",
        "appear-top-nav": "appear-top-nav 0.66s 0.11s both",
        "disappear-top-nav": "disappear-top-nav 0.66s 0.11s both",
        "appear-from-left-super-slow":
          "appear-from-left 2.22s ease-in-out both",
        "disappear-to-left-super-slow":
          "disappear-to-left 2.22s ease-in-out both",
        "appear-from-right-super-slow":
          "appear-from-right 2.22s ease-in-out both",
        "disappear-to-right-super-slow":
          "disappear-to-right 2.22s ease-in-out both",
        "appear-from-top-super-slow": "appear-from-top 2.22s ease-in-out both",
        "disappear-to-top-super-slow":
          "disappear-to-top 2.22s ease-in-out both",
        "appear-from-bottom-super-slow":
          "appear-from-bottom 2.22s ease-in-out both",
        "disappear-to-bottom-super-slow":
          "disappear-to-bottom 2.22s ease-in-out both",
        "appear-from-left-slow": "appear-from-left 1.44s ease-in-out both",
        "disappear-to-left-slow": "disappear-to-left 1.44s ease-in-out both",
        "appear-from-right-slow": "appear-from-right 1.44s ease-in-out both",
        "disappear-to-right-slow": "disappear-to-right 1.44s ease-in-out both",
        "appear-from-top-slow": "appear-from-top 1.44s ease-in-out both",
        "disappear-to-top-slow": "disappear-to-top 1.44s ease-in-out both",
        "appear-from-bottom-slow": "appear-from-bottom 1.44s ease-in-out both",
        "disappear-to-bottom-slow":
          "disappear-to-bottom 1.44s ease-in-out both",
        "appear-from-left-normal": "appear-from-left 0.99s ease-in-out both",
        "disappear-to-left-normal": "disappear-to-left 0.99s ease-in-out both",
        "appear-from-right-normal": "appear-from-right 0.99s ease-in-out both",
        "disappear-to-right-normal":
          "disappear-to-right 0.99s ease-in-out both",
        "appear-from-top-normal": "appear-from-top 0.99s ease-in-out both",
        "disappear-to-top-normal": "disappear-to-top 0.99s ease-in-out both",
        "appear-from-bottom-normal":
          "appear-from-bottom 0.99s ease-in-out both",
        "disappear-to-bottom-normal":
          "disappear-to-bottom 0.99s ease-in-out both",
        "appear-from-left-base": "appear-from-left 0.66s ease-in-out both",
        "disappear-to-left-base": "disappear-to-left 0.66s ease-in-out both",
        "appear-from-right-base": "appear-from-right 0.66s ease-in-out both",
        "disappear-to-right-base": "disappear-to-right 0.66s ease-in-out both",
        "appear-from-top-base": "appear-from-top 0.66s ease-in-out both",
        "disappear-to-top-base": "disappear-to-top 0.66s ease-in-out both",
        "appear-from-bottom-base": "appear-from-bottom 0.66s ease-in-out both",
        "disappear-to-bottom-base":
          "disappear-to-bottom 0.66s ease-in-out both",
        "appear-from-left-fast": "appear-from-left 0.33s ease-in-out both",
        "disappear-to-left-fast": "disappear-to-left 0.33s ease-in-out both",
        "appear-from-right-fast": "appear-from-right 0.33s ease-in-out both",
        "disappear-to-right-fast": "disappear-to-right 0.33s ease-in-out both",
        "appear-from-top-fast": "appear-from-top 0.33s ease-in-out both",
        "disappear-to-top-fast": "disappear-to-top 0.33s ease-in-out both",
        "appear-from-bottom-fast": "appear-from-bottom 0.33s ease-in-out both",
        "disappear-to-bottom-fast":
          "disappear-to-bottom 0.33s ease-in-out both",
        "appear-from-left-super-fast":
          "appear-from-left 0.11s ease-in-out both",
        "disappear-to-left-super-fast":
          "disappear-to-left 0.11s ease-in-out both",
        "appear-from-right-super-fast":
          "appear-from-right 0.11s ease-in-out both",
        "disappear-to-right-super-fast":
          "disappear-to-right 0.11s ease-in-out both",
        "appear-from-top-super-fast": "appear-from-top 0.11s ease-in-out both",
        "disappear-to-top-super-fast":
          "disappear-to-top 0.11s ease-in-out both",
        "appear-from-bottom-super-fast":
          "appear-from-bottom 0.11s ease-in-out both",
        "disappear-to-bottom-super-fast":
          "disappear-to-bottom 0.11s ease-in-out both",

        "shiny-btn": "shiny-btn 3s ease-in-out both",
        "appear-opacity-softly-0.22s":
          "appear-opacity-softly 0.22s ease-in-out both",
        "appear-opacity-softly-0.66s":
          "appear-opacity-softly 0.66s ease-in-out both",
        "appear-opacity-softly-1s": "appear-opacity-softly 1s ease-in-out both",
        "shake-softly-inf": "shake 8s ease-in-out both infinite",
        "shake-fast-2": "shake 2s ease-in-out both 2",

        "appear-from-lb-super-fast": "appear-from-lb 0.11s ease-in-out both",
        "disappear-to-lb-super-fast": "disappear-to-lb 0.11s ease-in-out both",
        "appear-from-lb-fast": "appear-from-lb 0.33s ease-in-out both",
        "disappear-to-lb-fast": "disappear-to-lb 0.33s ease-in-out both",
        "appear-from-lb-base": "appear-from-lb 0.66s ease-in-out both",
        "disappear-to-lb-base": "disappear-to-lb 0.66s ease-in-out both",
        "appear-from-lb-normal": "appear-from-lb 0.99s ease-in-out both",
        "disappear-to-lb-normal": "disappear-to-lb 0.99s ease-in-out both",
        "appear-from-lb-slow": "appear-from-lb 1.44s ease-in-out both",
        "disappear-to-lb-slow": "disappear-to-lb 1.44s ease-in-out both",
        "appear-from-lb-super-slow": "appear-from-lb 2.22s ease-in-out both",
        "disappear-to-lb-super-slow": "disappear-to-lb 2.22s ease-in-out both",
      },
      spacing: {
        vh: "1vh",
        vw: "1vw",
        pc: "1%",
      },
      keyframes: {
        "appear-from-left": {
          "0%": {
            transform: "translate(-50px, 0px)",
            opacity: 0,
          },
          "100%": {
            transform: "translate(0px, 0px)",
            opacity: 1,
          },
        },
        "disappear-to-left": {
          "100%": {
            transform: "translate(-50px, 0px)",
            opacity: 0,
          },
          "0%": {
            transform: "translate(0px, 0px)",
            opacity: 1,
          },
        },
        "appear-from-right": {
          "0%": {
            transform: "translate(50px, 0px)",
            opacity: 0,
          },
          "100%": {
            transform: "translate(0px, 0px)",
            opacity: 1,
          },
        },
        "disappear-to-right": {
          "100%": {
            transform: "translate(50px, 0px)",
            opacity: 0,
          },
          "0%": {
            transform: "translate(0px, 0px)",
            opacity: 1,
          },
        },
        "appear-from-top": {
          "0%": {
            transform: "translate(0px, -50px)",
            opacity: 0,
          },
          "100%": {
            transform: "translate(0px, 0px)",
            opacity: 1,
          },
        },
        "disappear-to-top": {
          "100%": {
            transform: "translate(0px, -50px)",
            opacity: 0,
          },
          "0%": {
            transform: "translate(0px, 0px)",
            opacity: 1,
          },
        },
        "appear-from-bottom": {
          "0%": {
            transform: "translate(0px, 50px)",
            opacity: 0,
          },
          "100%": {
            transform: "translate(0px, 0px)",
            opacity: 1,
          },
        },
        "disappear-to-bottom": {
          "100%": {
            transform: "translate(0px, 50px)",
            opacity: 0,
          },
          "0%": {
            transform: "translate(0px, 0px)",
            opacity: 1,
          },
        },
        "appear-from-lb": {
          "0%": {
            transform: "translate(-50px, 50px)",
            opacity: 0,
          },
          "100%": {
            transform: "translate(0px, 0px)",
            opacity: 1,
          },
        },
        "disappear-to-lb": {
          "100%": {
            transform: "translate(-50px, 50px)",
            opacity: 0,
          },
          "0%": {
            transform: "translate(0px, 0px)",
            opacity: 1,
          },
        },
        "shiny-btn": {
          "0%": { transform: "scale(0) rotate(45deg)", opacity: 0 },
          "80%": { transform: "scale(0) rotate(45deg)", opacity: 0.5 },
          "81%": { transform: "scale(4) rotate(45deg)", opacity: 1 },
          "100%": { transform: "scale(50) rotate(45deg)", opacity: 0 },
        },
        "appear-opacity-softly": {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        "disappear-opacity-softly": {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
        shake: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        "appear-top-nav": {
          "0%": { transform: "translate(0, -150%)" },
          "50%": { transform: "translate(0, 10%)" },
          "75%": { transform: "translate(0, -8%)" },
          "100%": { transform: "translate(0, 0)" },
        },
        "disappear-top-nav": {
          "100%": { transform: "translate(0, -150%)" },
          "50%": { transform: "translate(0, 10%)" },
          "25%": { transform: "translate(0, -8%)" },
          "0%": { transform: "translate(0, 0)" },
        },
        "salang-salang-left": {
          "0%": { transform: "skew(-20deg, 20deg) translate(0,0)" },
          "50%": { transform: "skew(-5deg, 5deg) translate(-23%, 0)" },
          "100%": { transform: "skew(-20deg, 20deg) translate(0,0)" },
        },
        "salang-salang-right": {
          "0%": { transform: "skew(20deg, -20deg) translate(0,0)" },
          "50%": { transform: "skew(5deg, -5deg) translate(23%, 0)" },
          "100%": { transform: "skew(20deg, -20deg) translate(0,0)" },
        },
        "appear-from-bottom-with-bounce": {
          "0%": { transform: "translate(0, 120%)" },
          "50%": { transform: "translate(0, -10%)" },
          "75%": { transform: "translate(0, 8%)" },
          "100%": { transform: "translate(0, 0)" },
        },
        "appear-from-top-with-bounce": {
          "0%": { transform: "translate(0, -120%)" },
          "50%": { transform: "translate(0, 10%)" },
          "75%": { transform: "translate(0, -8%)" },
          "100%": { transform: "translate(0, 0)" },
        },
        "appear-from-left-with-bounce": {
          "0%": { transform: "translate(-120%, 0)" },
          "50%": { transform: "translate(10%, 0)" },
          "75%": { transform: "translate(-8%, 0)" },
          "100%": { transform: "translate(0, 0)" },
        },
        "appear-from-right-with-bounce": {
          "0%": { transform: "translate(120%, 0)" },
          "50%": { transform: "translate(-10%, 0)" },
          "75%": { transform: "translate(8%, 0)" },
          "100%": { transform: "translate(0, 0)" },
        },
        "appear-from-bottom-with-bounce-second": {
          "0%": { transform: "translate(0, 1000%)" },
          "50%": { transform: "translate(0, -20%)" },
          "75%": { transform: "translate(0, 20%)" },
          "100%": { transform: "translate(0, 0)" },
        },
        "disappear-from-bottom-with-bounce": {
          "100%": { transform: "translate(0, 120%)" },
          "50%": { transform: "translate(0, -10%)" },
          "25%": { transform: "translate(0, 8%)" },
          "0%": { transform: "translate(0, 0)" },
        },
        "disappear-from-top-with-bounce": {
          "100%": { transform: "translate(0, -120%)" },
          "50%": { transform: "translate(0, 10%)" },
          "25%": { transform: "translate(0, -8%)" },
          "0%": { transform: "translate(0, 0)" },
        },
        "disappear-from-left-with-bounce": {
          "100%": { transform: "translate(-120%, 0)" },
          "50%": { transform: "translate(10%, 0)" },
          "25%": { transform: "translate(-8%, 0)" },
          "0%": { transform: "translate(0, 0)" },
        },
        "disappear-from-right-with-bounce": {
          "100%": { transform: "translate(120%, 0)" },
          "50%": { transform: "translate(-10%, 0)" },
          "25%": { transform: "translate(8%, 0)" },
          "0%": { transform: "translate(0, 0)" },
        },
        "disappear-from-bottom-with-bounce-second": {
          "100%": { transform: "translate(0, 1000%)" },
          "50%": { transform: "translate(0, -20%)" },
          "25%": { transform: "translate(0, 20%)" },
          "0%": { transform: "translate(0, 0)" },
        },
        ppyong: {
          "0%": { transform: "scale(0%)" },
          "95%": { transform: "scale(107%)" },
          "100%": { transform: "scale(100%)" },
        },
        "loading-box": {
          "0%": { width: "10%", height: "0%" },
          "20%": { width: "10%", height: "40%" },
          "40%": { width: "10%", height: "0%" },
          "60%": { width: "10%", height: "0%" },
          "80%": { width: "10%", height: "0%" },
          "100%": { width: "10%", height: "0%" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
