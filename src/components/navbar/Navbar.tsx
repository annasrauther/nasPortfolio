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
 * Navbar component that displays the navigation bar.
 * @returns {JSX.Element} The JSX element representing the Navbar.
 */
const Navbar: React.FC = () => {
  return (
    <header>
      <div className={styles.header}>
        <Menu navigationLinks={navigation} />
        <div className={styles.brand}>
          <Logo
            src="/logo.png"
            alt="Nas Rauther Logo"
            width={75}
            height={75}
            priority={true}
            logoLink="/"
          />
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