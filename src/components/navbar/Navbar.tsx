"use client";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Menu from "./Menu";
import ActionDisplayer from "./ActionDisplayer";
import Logo from "./Logo";
import BrandName from "./BrandName";
import NavButtons from "./NavButtons";
import styles from './Navbar.module.css';
import {
  personalActions,
  navigation,
} from '@/lib/store'

/**
 * Navbar component that displays the navigation bar.
 * @returns {JSX.Element} The JSX element representing the Navbar.
 */
const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isDropdownOpen, setDropdownOpen] = useState<boolean>(false);

  /**
   * Close the dropdown when the pathname changes.
   */
  useEffect(() => {
    setDropdownOpen(false);
  }, [pathname]);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header>
      <div className={styles.header}>
        <div className={styles.brand}>
          <Logo
            src="/logo.png"
            alt="Nas Rauther Logo"
            width={75}
            height={75}
            priority={true}
            logoLink="/"
          />
          <BrandName brandName="Al Annas Rauther" brandLink="/" />
          <ActionDisplayer actions={personalActions} />
        </div>

        <NavButtons isDropdownOpen={isDropdownOpen} onToggleDropdown={toggleDropdown} />
      </div>

      {isDropdownOpen && <Menu navigationLinks={navigation} />}
    </header>
  );
};

export default Navbar;