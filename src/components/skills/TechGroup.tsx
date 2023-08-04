import { Skill } from "@/interfaces/skill";
import TechList from "./TechList";
import { poppins } from "@/lib/fonts";
import styles from "./Tech.module.css";

/**
 * Props for the TechGroup component.
 */
interface TechGroupProps {
  /**
   * The type of technologies in this group.
   */
  type: string;
  /**
   * Array of technologies to be displayed in this group.
   */
  technologies: Skill[];
}

/**
 * TechGroup Component displays a group of technologies with a common type.
 *
 * @param {TechGroupProps} props - The component props containing the type and technologies array.
 * @returns {JSX.Element} The rendered TechGroup component.
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
