// tailwind.config.js
// FreeBSD-licensed CSS animation by Animista
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        "104": "28rem",
        "128": "32rem",
        "200": "50rem",
      },
      maxWidth: {
        "128": "32rem",
        "144": "36rem",
        "160": "40rem",
        "200": "50rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "tracking-in-expand-fwd-top":
          "tracking-in-expand-fwd-top 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both",
        "bounce-in-top": "bounce-in-top 1.1s ease both",
        "roll-in-left": "roll-in-left 0.6s ease both",
        "fade-in-fwd-0":
          "fade-in-fwd 2.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) 1.5s both",
        "fade-in-fwd-1":
          "fade-in-fwd 2.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) 3s both",
        "fade-in-fwd-2":
          "fade-in-fwd 2.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) 3.5s both",
        "fade-in-fwd-3":
          "fade-in-fwd 2.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) 4s both",
        "tracking-in-contract":
          "tracking-in-contract 0.8s cubic-bezier(0.215, 0.610, 0.355, 1.000) both",
        "scale-in-center-0":
          "scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "scale-in-center-1":
          "scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.5s both",
        "scale-in-center-2":
          "scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 1s both",
        "scale-in-center-3":
          "scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) 1.5s both",
        "swirl-out-fwd": "swirl-out-fwd 0.6s ease both",
        "scale-out-ver-bottom-1":
          "scale-out-ver-bottom 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) 1.5s both",
        "scale-out-ver-bottom-2":
          "scale-out-ver-bottom 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) 2s both",
        "scale-out-ver-bottom-3":
          "scale-out-ver-bottom 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) 2.5s both",
        "bounce-in-bottom": "bounce-in-bottom 1.1s ease both",
        heartbeat: "heartbeat 1.5s ease infinite both",
      },
      keyframes: {
        "tracking-in-expand-fwd-top": {
          "0%": {
            "letter-spacing": "-.5em",
            transform: "translateZ(-700px) translateY(-500px)",
            opacity: "0",
          },
          "40%": {
            opacity: ".6",
          },
          to: {
            transform: "translateZ(0) translateY(0)",
            opacity: "1",
          },
        },
        "bounce-in-top": {
          "0%": {
            transform: "translateY(-500px)",
            "animation-timing-function": "ease-in",
            opacity: "0",
          },
          "38%": {
            transform: "translateY(0)",
            "animation-timing-function": "ease-out",
            opacity: "1",
          },
          "55%": {
            transform: "translateY(-65px)",
            "animation-timing-function": "ease-in",
          },
          "72%, 90%, to": {
            transform: "translateY(0)",
            "animation-timing-function": "ease-out",
          },
          "81%": {
            transform: "translateY(-28px)",
          },
          "95%": {
            transform: "translateY(-8px)",
            "animation-timing-function": "ease-in",
          },
        },
        "roll-in-left": {
          "0%": {
            transform: "translateX(-800px) rotate(-540deg)",
            opacity: "0",
          },
          to: {
            transform: "translateX(0) rotate(0deg)",
            opacity: "1",
          },
        },
        "fade-in-fwd": {
          "0%": {
            transform: "translateZ(-80px)",
            opacity: "0",
          },
          to: {
            transform: "translateZ(0)",
            opacity: "1",
          },
        },
        "tracking-in-contract": {
          "0%": {
            "letter-spacing": "1em",
            opacity: "0",
          },
          "40%": {
            opacity: ".6",
          },
          to: {
            "letter-spacing": "normal",
            opacity: "1",
          },
        },
        "scale-in-center": {
          "0%": {
            transform: "scale(0)",
            opacity: "1",
          },
          to: {
            transform: "scale(1)",
            opacity: "1",
          },
        },
        "swirl-out-fwd": {
          "0%": {
            transform: "rotate(0) scale(1)",
            opacity: "1",
          },
          to: {
            transform: "rotate(540deg) scale(5)",
            opacity: "0",
          },
        },
        "scale-out-ver-bottom": {
          "0%": {
            transform: "scaleY(1)",
            "transform-origin": "0% 100%",
            opacity: "1",
          },
          to: {
            transform: "scaleY(0)",
            "transform-origin": "0% 100%",
            opacity: "1",
          },
        },
        "bounce-in-bottom": {
          "0%": {
            transform: "translateY(500px)",
            "animation-timing-function": "ease-in",
            opacity: "0",
          },
          "38%": {
            transform: "translateY(0)",
            "animation-timing-function": "ease-out",
            opacity: "1",
          },
          "55%": {
            transform: "translateY(65px)",
            "animation-timing-function": "ease-in",
          },
          "72%, 90%, to": {
            transform: "translateY(0)",
            "animation-timing-function": "ease-out",
          },
          "81%": {
            transform: "translateY(28px)",
          },
          "95%": {
            transform: "translateY(8px)",
            "animation-timing-function": "ease-in",
          },
        },
        heartbeat: {
          "0%": {
            transform: "scale(1)",
            "transform-origin": "center center",
            "animation-timing-function": "ease-out",
          },
          "10%": {
            transform: "scale(.91)",
            "animation-timing-function": "ease-in",
          },
          "17%": {
            transform: "scale(.98)",
            "animation-timing-function": "ease-out",
          },
          "33%": {
            transform: "scale(.87)",
            "animation-timing-function": "ease-in",
          },
          "45%": {
            transform: "scale(1)",
            "animation-timing-function": "ease-out",
          },
        },
      },
    },
  },
  plugins: [],
};
