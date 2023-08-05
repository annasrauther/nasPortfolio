import styles from './HeroTech.module.css';

/**
 * Represents a single technical skill item.
 * @interface TechItem
 * @property {string} name - The name of the technology.
 * @property {any} icon - The icon representing the technology.
 * @property {string} color - The color associated with the technology.
 */
interface TechItem {
  name: string;
  icon: any;
  color: string;
}

/**
 * Props for the HeroTech component.
 * @interface HeroTechProps
 * @property {TechItem} tech - The technical skill item to display.
 */
interface HeroTechProps {
  tech: TechItem;
}

/**
 * Hero Technology Component
 *
 * This component represents a technology item that displays the technology name and icon.
 *
 * @component
 * @param {HeroTechProps} props - The component props.
 * @returns {JSX.Element} The HeroTech component JSX element.
 */
const HeroTech: React.FC<HeroTechProps> = ({ tech }) => {
  const key = tech.name;
  const iconDescription: string = `${tech.name} icon`;

  return (
    <span
      key={key}
      className={styles['hero__tech-item']}
      aria-label={iconDescription}
    >
      {tech.icon({ size: '2em' })}
    </span>
  );
};

export default HeroTech;