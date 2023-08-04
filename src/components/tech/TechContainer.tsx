import TechGroup from "./TechGroup";
import { Skill } from "@/interfaces/skill";
import styles from "./Tech.module.css";

/**
 * Props for the TechContainer component.
 */
interface TechContainerProps {
  /**
   * Array of technologies to be displayed.
   */
  technologies: Skill[];
}

/**
 * TechContainer Component displays a list of technologies grouped by their respective types.
 *
 * @param {TechContainerProps} props - The component props containing the technologies array.
 * @returns {JSX.Element} The rendered TechContainer component.
 */
const TechContainer: React.FC<TechContainerProps> = ({ technologies }) => {
  // Group technologies by their type
  const groupedTechnologies: { [key: string]: Skill[] } = {};

  technologies.forEach((tech) => {
    if (!groupedTechnologies[tech.payload.skill_type]) {
      groupedTechnologies[tech.payload.skill_type] = [];
    }
    groupedTechnologies[tech.payload.skill_type].push(tech);
  });

  return (
    <div className={styles.tech_container}>
      {Object.keys(groupedTechnologies).map((type, index) => (
        <TechGroup key={index} type={type} technologies={groupedTechnologies[type]} />
      ))}
    </div>
  );
};

export default TechContainer;
