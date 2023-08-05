"use client";
import Link from 'next/link';
import styles from './Menu.module.css';
import { usePathname } from 'next/navigation';

/**
 * Represents the shape of a single navigation menu item.
 * @interface MenuItem
 * @property {string} name - The name of the menu item.
 * @property {string} label - The label or description of the menu item.
 * @property {string} href - The URL or path to navigate when the menu item is clicked.
 */
interface MenuItem {
  name: string;
  label: string;
  href: string;
}

/**
 * Represents the props for the Menu component.
 * @interface MenuProps
 * @property {MenuItem[]} navigationLinks - An array of `MenuItem` objects representing the navigation menu items.
 */
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
      <nav className={styles.menu} role="navigation" aria-label="Main Navigation">
        {navigationLinks.map((link, index) => (
          <Link
            className={`${styles['menu__item']} ${pathname === link.href ? styles['active'] : ''}`}
            href={link.href}
            key={link.name}
            aria-label={`${link.name}, ${link.label}`}
          >
            <span style={{
              fontSize: '10px'
            }}>{'.0' + (index + 1)}</span>
            <span className={styles['menu__item-name']}>{link.name}</span>
            <span className={styles['menu__item-label']}>{link.label}</span>
          </Link>
        ))}
      </nav>
    </>
  );
};

export default Menu;
