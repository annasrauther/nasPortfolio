import { IconType } from 'react-icons';
import Link from 'next/link';
import styles from './Button.module.css';

/**
 * Represents the props for the Button component.
 * @interface ButtonProps
 * @property {string} label - The label text for the button.
 * @property {boolean} [info] - If true, the button will have an "info" style.
 * @property {IconType} [icon] - The icon component to be displayed in the button.
 * @property {string} href - The URL the button should navigate to when clicked.
 * @property {boolean} [target] - If true, the link will open in a new tab.
 * @property {boolean} [active] - If true, the button will have an "active" style.
 */
interface ButtonProps {
  label: string;
  info?: boolean;
  icon?: IconType;
  href: string;
  target?: boolean;
  active?: boolean;
}

/**
 * Button Component
 *
 * This component represents a customizable button that can display an icon and link to a specified URL.
 *
 * @component
 * @param {ButtonProps} props - The component props.
 * @returns {JSX.Element} The Button component JSX element.
 */
const Button: React.FC<ButtonProps> = ({ label, info, href, icon: Icon, target, active }) => {
  return (
    <Link
      href={href}
      passHref
      role="button"
      aria-label={label}
      className={`${styles.button} ${info ? styles.info : styles.primary} ${active ? styles.active : ''}`}
      target={target ? '_blank' : '_self'}
    >
      {label}
      {Icon && <Icon size={28} />}
    </Link>
  );
};

export default Button;
