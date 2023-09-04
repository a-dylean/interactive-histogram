import './/styles/globals.css'
import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google';
import ThemeRegistry from "./themeRegistry";

const noto = Noto_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-noto-sans'
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
    <html lang="en" className={noto.className}>
      <body>
      <ThemeRegistry options={{ key: 'mui' }}>{children}</ThemeRegistry>
      </body>
    </html>
  )
}
