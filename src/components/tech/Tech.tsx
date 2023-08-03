import styles from "./Tech.module.css";
import { Technology } from "@/lib/interfaces";
import { poppins } from "@/lib/fonts";

interface TechProps {
  technologies: Technology[];
}

/**
 * Tech Component displays a list of technologies with their icons,
 * grouped by their respective types.
 *
 * @param {TechProps} props - The component props containing the technologies array.
 * @returns {JSX.Element} The rendered Tech component.
 */
const Tech: React.FC<TechProps> = ({ technologies }) => {
  // Group technologies by their type
  const groupedTechnologies: { [key: string]: Technology[] } = {};

  technologies.forEach((tech) => {
    if (!groupedTechnologies[tech.type]) {
      groupedTechnologies[tech.type] = [];
    }
    groupedTechnologies[tech.type].push(tech);
  });

  return (
    <div className={styles.tech_container}>
      {Object.keys(groupedTechnologies).map((type, index) => (
        <div key={index} className={styles.tech_wrapper}>
          <h4 className={`${styles.tech_title} ${poppins.className}`}>{type}</h4>
          <div className={styles.tech_list}>
            {groupedTechnologies[type].map((tech, techIndex) => (
              <div className={styles.tech} key={techIndex}>
                <div className={styles.tech_item}>
                  <span className={styles.tech_label}>{tech.title}</span>
                  <tech.icon size={"2.5em"} color={tech.color} className={styles.tech_icon} />
                </div>
                <p className={styles.tech_description}>{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tech;
