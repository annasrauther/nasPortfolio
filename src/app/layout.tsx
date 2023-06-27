import './globals.css'
import { Montserrat } from 'next/font/google'
import { Navbar } from '@/components'

const mont = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Nas Rauther',
  description: 'Front End Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={mont.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
