import Image from "next/image";
import { Skill } from "@/interfaces/skill";
import styles from "./Tech.module.css";

/**
 * Props for the TechList component.
 */
interface TechListProps {
  /**
   * Array of technologies to be displayed in the list.
   */
  technologies: Skill[];
}

/**
 * TechList Component displays a list of technologies with their icons and descriptions.
 *
 * @param {TechListProps} props - The component props containing the technologies array.
 * @returns {JSX.Element} The rendered TechList component.
 */
const TechList: React.FC<TechListProps> = ({ technologies }) => {
  return (
    <div className={styles.tech__list}>
      {technologies.map((tech, techIndex) => (
        <div className={styles['tech-item']} key={techIndex}>
          <div className={styles['tech-item__container']}>
            <span className={styles['tech-item__label']}>{tech.title.rendered}</span>
            <Image src={tech.payload.skill_image} alt={tech.title.rendered} width={50} height={50} />
          </div>
          <p className={styles['tech-item__description']}>{tech.payload.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TechList;
