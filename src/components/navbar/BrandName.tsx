import Link from 'next/link';
import styles from './Navbar.module.css';
import { poppins } from '@/lib/fonts';

/**
 * Represents the props for the BrandName component.
 * @interface BrandNameProps
 * @property {string} brandName - The name of the site's brand or title.
 * @property {string} brandLink - The URL or path to navigate when the brand name is clicked.
 */
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
    <Link href={brandLink} className={`${styles['brand__name']} ${poppins.className}`}>
      {brandName}
    </Link>
  );
};

export default BrandName;
