import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

interface LogoProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  logoLink: string;
}

/**
 * Logo component that displays the site logo as a link to the provided link.
 * @param {LogoProps} props - The props for the Logo component.
 * @returns {JSX.Element} The JSX element representing the Logo.
 */
const Logo: React.FC<LogoProps> = ({ src, alt, width, height, priority = true, logoLink }) => {
  return (
    <Link href={logoLink} className={styles.logoLink}>
      <Image src={src} alt={alt} width={width} height={height} priority={priority} className={styles.logo} />
    </Link>
  );
};

export default Logo;
