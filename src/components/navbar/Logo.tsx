"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import styles from './Navbar.module.css';

/**
 * Represents the props for the Logo component.
 * @interface LogoProps
 * @property {string} logoLink - The URL or path to navigate when the logo is clicked.
 */
interface LogoProps {
  logoLink: string;
}

/**
 * Logo component that displays the site logo as a link to the provided link.
 * @param {LogoProps} props - The props for the Logo component.
 * @returns {JSX.Element} The JSX element representing the Logo.
 */
const Logo: React.FC<LogoProps> = ({ logoLink }) => {
  const pathname = usePathname();

  return (
    <Link href={logoLink} className={styles.logo__wrapper} aria-label="Logo Container">
      {pathname !== '/' ? <Image src={'/logo_left.svg'} alt={'Annas Rauther - Left Logo'} width={75} height={75} priority={true} className={styles.logo} /> : null}
      <Image src={'/logo_center.webp'} alt={'Annas Rauther - Main Logo'} width={75} height={75} priority={true} className={styles.logo} />
      {pathname !== '/' ? <Image src={'/logo_right.svg'} alt={'Annas Rauther - Right Logo'} width={75} height={75} priority={true} className={styles.logo} /> : null}
    </Link>
  );
};

export default Logo;
