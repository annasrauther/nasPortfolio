import Link from 'next/link';
import styles from './Navbar.module.css';
import { poppins } from '@/lib/fonts';

interface BrandNameProps {
  brandName: string;
  brandLink: string;
}

/**
 * BrandName component that displays the site's brand name as a link to the provided link.
 * @param {BrandNameProps} props - The props for the BrandName component.
 * @returns {JSX.Element} The JSX element representing the BrandName.
 */
const BrandName: React.FC<BrandNameProps> = ({ brandName, brandLink }) => {
  return (
    <Link href={brandLink} className={`${styles['brand-link']} ${poppins.className}`}>
      {brandName}
    </Link>
  );
};

export default BrandName;
