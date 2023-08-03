"use client";
import { usePathname } from 'next/navigation';
import Button from '@/components/button/Button';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';

import styles from './Menu.module.css';
import Link from 'next/link';

interface MenuItem {
  name: string;
  href: string;
}

interface MenuProps {
  navigationLinks: MenuItem[];
}

/**
 * Menu component that displays the navigation menu.
 * @param {MenuProps} props - The props for the Menu component.
 * @returns {JSX.Element} The JSX element representing the Menu.
 */
const Menu: React.FC<MenuProps> = ({ navigationLinks }) => {
  return (
    <ul className={styles.menu}>
      {navigationLinks.map((link) => (
        <li key={link.name} className={styles.menuItem}>
          <Link href={link.href}>
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Menu;

