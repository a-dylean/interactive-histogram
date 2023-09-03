import './/styles/globals.css'
import type { Metadata } from 'next'
import { korenski } from '../../public/fonts/fonts'

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
    <html lang="en" className={korenski.className}>
      <body>
      {children}
      </body>
    </html>
  )
}
