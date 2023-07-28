import styles from "./Tech.module.css";
import { Technology } from '@/lib/interfaces'

interface TechProps {
  technologies: Technology[];
}

/**
 * Tech Component displays a list of technologies with their icons.
 * @param {TechProps} props - The component props containing the technologies array.
 * @returns {JSX.Element} The rendered Tech component.
 */
const Tech: React.FC<TechProps> = ({ technologies }) => {
  return (
    <div className={styles.tech_list}>
      {technologies.map((tech, index) => (
        <div className={styles.tech} key={index}>
          <div className={styles.tech_item} key={index}>
            <tech.icon size={'1.8em'} color={tech.color} className={styles.tech_icon} />
            <span className={styles.tech_label}>{tech.title}</span>
          </div>
          {/* <p className={styles.tech_description}>{tech.description}</p> */}
        </div>
      ))}
    </div>
  );
};

export default Tech;
