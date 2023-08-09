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
    <ul className={styles.tech__list} aria-label="Technologies Used">
      {technologies.map((tech, techIndex) => (
        <li className={styles['tech-item']} key={techIndex}>
          <div className={styles['tech-item__container']}>
            <strong className={styles['tech-item__label']} dangerouslySetInnerHTML={{ __html: tech.title.rendered }} />
            <a href={tech.payload.skill_url} target="_blank">
              {
                /* If the technology has an image, display it. */
                tech.payload.skill_image ?
                  <Image
                    src={tech.payload.skill_image}
                    alt={tech.title.rendered}
                    width={40}
                    height={40}
                    aria-label={tech.title.rendered}
                  />
                  : null
              }
            </a>
          </div>
          {
            /* If the technology has a description, display it. */
            tech.payload.description ?
              <p className={styles['tech-item__description']} dangerouslySetInnerHTML={{ __html: tech.payload.description }} />
              : null
          }
        </li>
      ))}
    </ul>
  );
};

export default TechList;