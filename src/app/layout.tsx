import './globals.css'
import Navbar from '@/components/navbar/Navbar';
import Cursor from '@/components/cursor/Cursor';
import { roboto_mono } from '@/lib/fonts';

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
        url: '/logo_center.svg',
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
    icon: '/logo_center.svg',
    shortcut: '/logo_center.svg',
    apple: '/logo_center.svg',
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
      <body className={roboto_mono.className}>
        <Navbar />
        <main>{children}</main>
        <Cursor />
      </body>
    </html>
  );
};

export default RootLayout