"use client";
import { IconType } from 'react-icons';
import Link from 'next/link';
import styles from './button.module.css';

interface ButtonProps {
  label: string;
  info?: boolean;
  icon?: IconType;
  href: string;
  target?: boolean;
}

/**
 * Button Component
 *
 * This component represents a customizable button that can display an icon and link to a specified URL.
 *
 * @param {ButtonProps} props - The component props.
 * @returns {JSX.Element} The Button component JSX element.
 */

const Button: React.FC<ButtonProps> = ({ label, info, href, icon: Icon, target }) => {
  return (
    <Link
      href={href}
      passHref
      className={`${styles.button} ${info ? styles.info : styles.primary}`}
      target={target ? '_blank' : '_self'}
    >
      {label}
      {Icon && <Icon size={28} />}
    </Link>
  );
};

export default Button;
