import './globals.css'
import { Navbar } from '@/components'
import { reggae } from '@/components'


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
      <body className={`${reggae.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
