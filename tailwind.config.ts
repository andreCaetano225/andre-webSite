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
        darkBg: '#191919',
        darkTitle: '#CCCCCC',
        darkSubTitle: '#A7A7A7',
        darkTitleBox: '#CCCCCC',
        darkGrandBlue: '#13B0F5',
        darkGrandPink: '#E70FAA',

      },
    },
  },
  plugins: [],
}
export default config
