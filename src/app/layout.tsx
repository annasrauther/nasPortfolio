import './globals.css'

import { Montserrat } from 'next/font/google';
import Navbar from '@/components/navbar/Navbar';

const anton = Montserrat({
  subsets: ['latin'],
  weight: [
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '900',
  ],
});
const title = 'Al Annas Rauther';
const description = 'Front End Developer';
const url = "https://annasrauther.com";

export const metadata = {
  title: title,
  metadataBase: new URL('https://annasrauther.com'),
  description,
  openGraph: {
    title: title,
    description,
    url,
    siteName: 'Al Annas Rauther - Front End Developer for the Modern Web',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  category: 'technology',

}

/**
 * RootLayoutProps interface
 *
 * Represents the props for the RootLayout component.
 */
interface RootLayoutProps {
  children: React.ReactNode;
}

/**
 * RootLayout Component
 *
 * This component represents the main layout of the application. It includes the Navbar
 * and wraps the children components.
 *
 * @param {RootLayoutProps} props - The component props.
 * @returns {JSX.Element} The RootLayout JSX element.
 */

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={anton.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout