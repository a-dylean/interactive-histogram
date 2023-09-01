import './/styles/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Interactive histogram',
  description: 'Interactive histogram',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
 // histogram: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      {children}
      {/* {props.histogram} */}
      </body>
    </html>
  )
}
