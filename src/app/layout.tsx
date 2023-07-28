import './globals.css'

import { Anton } from 'next/font/google';
import Navbar from '@/components/navbar/Navbar';

const anton = Anton({
  subsets: ['latin'],
  weight: '400',
});

export const metadata = {
  title: 'Al Annas Rauther',
  description: 'Front End Developer',
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