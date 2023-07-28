"use client";
import styles from './HeroTech.module.css';

interface TechItem {
  name: string;
  icon: any;
  color: string;
}

interface HeroTechProps {
  tech: TechItem;
}

/**
 * Hero Technology Component
 *
 * This component represents a technology item that displays the techology name and icon.
 *
 * @param {HeroTechProps} props - The component props.
 * @returns {JSX.Element} The HeroTech component JSX element.
 */
const HeroTech: React.FC<HeroTechProps> = ({ tech }) => {
  const key = tech.name;
  return (
    <div className={styles.heroTech}>
      Experience in building the web and working with technologies like
      <span
        key={key}
        style={{ '--tech-color': tech.color } as React.CSSProperties}
        className={styles.techName}
      >
        {tech.name}
        {tech.icon({ size: '1.8rem' })}
      </span>
    </div>
  );
};

export default HeroTech;