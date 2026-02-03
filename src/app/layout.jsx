import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Machplastech - Precision Manufacturing & Engineering Plastics',
  description: 'Leading manufacturer of precision machined components and distributor of engineering plastics in Korea.',
  keywords: 'precision machining, CNC, engineering plastics, POM, PA6, PEEK, automation, Korean manufacturing',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
