import { Footer, Navigation } from '@components'
import './globals.css'

export const metadata = {
  title: 'CarHub',
  description: 'Generated for educational purposes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
