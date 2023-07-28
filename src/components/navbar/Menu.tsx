import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './Menu.module.css';

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
  const pathname = usePathname();

  return (
    <div className={styles.menu}>
      <ul className={styles['sub-menu']}>
        {navigationLinks.map((link) => (
          <li key={link.name} className={pathname === link.href ? styles.active : ''}>
            <Link href={link.href} className={styles.link}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;

