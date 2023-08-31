import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        lightBg: '#FFFFFF',
        lightTitle: '#42446E',
        lightSubTitle: '#666666',
        lightTitleBox: '#000000',
        lightGrandBlue: '#13B0F5',
        lightGrandPink: '#E70FAA',
        lightBox: '#FAFAFA',
        darkBg: '#191919',
        darkTitle: '#CCCCCC',
        darkSubTitle: '#A7A7A7',
        darkTitleBox: '#CCCCCC',
        darkGrandBlue: '#13B0F5',
        darkGrandPink: '#E70FAA',
        darkBox: '#363636',
        colorJoker: '#8A63E6',
        hoverJoker: '#7255B6',
        bgColorJokerDark: '#181818'

      },
    },
  },
  plugins: [],
}
export default config
