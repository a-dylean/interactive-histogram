import type { Metadata } from 'next'
import { Manrope } from 'next/font/google';
import ThemeRegistry from "./themeRegistry";

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
  weight: "400"
})

export const metadata: Metadata = {
  title: 'Interactive histogram',
  description: 'Interactive histogram',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={manrope.className}>
      <body>
      <ThemeRegistry options={{ key: 'mui' }}>
        {children}
        </ThemeRegistry>
      </body>
    </html>
  )
}