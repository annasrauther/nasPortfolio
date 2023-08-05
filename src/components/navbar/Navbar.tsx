import Menu from "./Menu";
import ActionDisplayer from "./ActionDisplayer";
import Logo from "./Logo";
import BrandName from "./BrandName";
import styles from './Navbar.module.css';
import {
  personalActions,
  navigation,
} from '@/lib/data'

/**
 * Navbar Component
 *
 * This component displays the navigation bar with a menu, logo, brand name, and action displayer.
 *
 * @component
 * @returns {JSX.Element} The Navbar component JSX element.
 */
const Navbar: React.FC = () => {
  return (
    <header role="banner">
      <Menu navigationLinks={navigation} />
      <div className={styles.header}>
        <div className={styles.brand}>
          <Logo logoLink="/" />
          <div className={styles.actionDisplayerContainer}>
            <BrandName brandName="Al Annas Rauther" brandLink="/" />
            <ActionDisplayer actions={personalActions} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
