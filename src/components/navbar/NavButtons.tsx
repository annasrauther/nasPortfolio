import Button from '../button/Button';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { GrFormClose } from 'react-icons/gr';
import { RxHamburgerMenu } from 'react-icons/rx';

import styles from './Navbar.module.css';

interface NavButtonsProps {
  isDropdownOpen: boolean;
  onToggleDropdown: () => void;
}

/**
 * NavButtons component that displays navigation buttons and a dropdown icon.
 * @param {NavButtonsProps} props - The props for the NavButtons component.
 * @returns {JSX.Element} The JSX element representing the NavButtons.
 */
const NavButtons: React.FC<NavButtonsProps> = ({ isDropdownOpen, onToggleDropdown }) => {
  return (
    <div className={styles['nav-buttons']}>
      <Button label="Contact" info href="/contact" icon={BsFillArrowRightCircleFill} />
      <div className={styles['dropdown-icon']}>
        {isDropdownOpen ? (
          <GrFormClose
            className="text-[1.2em] md:text-[1.8em] cursor-pointer"
            onClick={onToggleDropdown}
          />
        ) : (
          <RxHamburgerMenu
            className="text-[1.2em] md:text-[1.8em] cursor-pointer"
            onClick={onToggleDropdown}
          />
        )}
      </div>
    </div>
  );
};

export default NavButtons;
