import type { Metadata } from 'next'
import ThemeRegistry from "./themeRegistry";


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
    <html lang="en">
      <head>
      <style dangerouslySetInnerHTML={{__html: "@import url('https://fonts.googleapis.com/css2?family=Manrope&display=swap');"}} />
      </head>
      <body>
      <ThemeRegistry options={{ key: 'mui' }}>
        {children}
        </ThemeRegistry>
      </body>
    </html>
  )
}