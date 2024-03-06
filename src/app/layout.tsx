import './globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { ThemeProvider } from './theme-provider'
import { ThemeSwitcher } from '../components/ThemeSwitcher'
import { Header } from '@/components/Header'


const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})



export const metadata: Metadata = {
  title: 'Andre Dev - Blog',
  description: 'This is my personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-lightBg dark:bg-darkBg `}>
        <main className='mt-24'>{children}</main>

        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <ThemeSwitcher />

        </ThemeProvider>
      </body>
    </html>
  )
}
