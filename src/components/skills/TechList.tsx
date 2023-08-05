import Image from "next/image";
import { Skill } from "@/interfaces/skill";
import styles from "./Tech.module.css";

/**
 * Represents the props for the TechList component.
 * @interface TechListProps
 * @property {Skill[]} technologies - Array of technologies to be displayed in the list.
 */
interface TechListProps {
  technologies: Skill[];
}

/**
 * TechList Component
 *
 * This component displays a list of technologies with their icons and descriptions.
 *
 * @component
 * @param {TechListProps} props - The component props containing the technologies array.
 * @returns {JSX.Element} The TechList component JSX element.
 */
const TechList: React.FC<TechListProps> = ({ technologies }) => {
  return (
    <div className={styles.tech__list}>
      {technologies.map((tech, techIndex) => (
        <div className={styles['tech-item']} key={techIndex}>
          <div className={styles['tech-item__container']}>
            <span className={styles['tech-item__label']} dangerouslySetInnerHTML={{ __html: tech.title.rendered }} />
            <Image src={tech.payload.skill_image} alt={tech.title.rendered} width={50} height={50} />
          </div>
          <p className={styles['tech-item__description']}>{tech.payload.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TechList;
