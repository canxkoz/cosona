import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        linen: "#eae6de",
        darkslateblue: "#494890",
        white: "#fff",
        coral: "#ff7759",
        black: "#000",
        gray: "#171717",
        darkslategray: "#39594d",
        plum: "#d18ee2",
        darknavyblue: "#353468",
        darkgreen:"#28463b",
        darkpink:"#ac51c3",
      },
      spacing: {},
      fontFamily: {
        consolas: "Consolas",
        "nunito-sans": "'Nunito Sans'",
      },
      borderRadius: {
        mini: "15px",
      },
    },
    fontSize: {
      "21xl": "20px",
      inherit: "inherit",
      "31xl":"30px",
    },
  },
  plugins: [],
}
export default config
