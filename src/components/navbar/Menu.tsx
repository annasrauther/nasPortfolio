"use client";
import Link from 'next/link';
import styles from './Menu.module.css';
import { usePathname } from 'next/navigation';
import { poppins } from '@/lib/fonts';

interface MenuItem {
  name: string;
  label: string;
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
  const pathname = usePathname();
  return (
    <>
      <nav className={styles.menu}>
        {navigationLinks.map((link, index) => (
          <Link className={`${styles['menu__item']} ${pathname === link.href ? styles['active'] : ''}`} href={link.href} key={link.name}>
            <span style={{
              fontSize: '10px'
            }}>{'.0' + (index + 1)}</span>
            <span className={`${styles['menu__item-name']} ${poppins.className}`}>{link.name}</span>
            <span className={styles['menu__item-label']}>{link.label}</span>
          </Link>
        ))}
      </nav>
    </>
  );
};

export default Menu;
