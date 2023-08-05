import { Skill } from "@/interfaces/skill";
import TechList from "./TechList";
import { poppins } from "@/lib/fonts";
import styles from "./Tech.module.css";

/**
 * Represents the props for the TechGroup component.
 * @interface TechGroupProps
 * @property {string} type - The type of technologies in this group.
 * @property {Skill[]} technologies - Array of technologies to be displayed in this group.
 */
interface TechGroupProps {
  type: string;
  technologies: Skill[];
}

/**
 * TechGroup Component
 *
 * This component displays a group of technologies with a common type.
 *
 * @component
 * @param {TechGroupProps} props - The component props containing the type and technologies array.
 * @returns {JSX.Element} The TechGroup component JSX element.
 */
const TechGroup: React.FC<TechGroupProps> = ({ type, technologies }) => {
  return (
    <div className={styles.tech__wrapper}>
      <h4 className={`${styles.tech__title} ${poppins.className}`}>{type}</h4>
      <TechList technologies={technologies} />
    </div>
  );
};

export default TechGroup;
