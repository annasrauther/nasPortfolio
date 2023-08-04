import { IconType } from 'react-icons';
import Link from 'next/link';
import styles from './Button.module.css';

/**
 * Represents the props for the Button component.
 * @interface ButtonProps
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
 * Represents a customizable button that can display an icon and link to a specified URL.
 * @param {ButtonProps} props - The component props.
 * @returns {JSX.Element} The Button component JSX element.
 */
const Button: React.FC<ButtonProps> = ({ label, info, href, icon: Icon, target, active }) => {
  return (
    <Link
      href={href}
      passHref
      className={`${styles.button} ${info ? styles.info : styles.primary} ${active ? styles.active : ''}`}
      target={target ? '_blank' : '_self'}
    >
      {label}
      {Icon && <Icon size={28} />}
    </Link>
  );
};

export default Button;
