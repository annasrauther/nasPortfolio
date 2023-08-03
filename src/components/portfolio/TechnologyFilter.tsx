import styles from './Portfolio.module.css';
import { poppins } from '@/lib/fonts';

/**
 * Represents the props for the TechnologyFilter component.
 */
interface TechnologyFilterProps {
  technologiesList: string[];
  selectedTechnology: string | null;
  onTechnologyFilter: (_technology: string | null) => void;
}

/**
 * Represents the TechnologyFilter component that displays the technology filter buttons.
 * @param {TechnologyFilterProps} props - The props for the TechnologyFilter component.
 * @returns {JSX.Element} JSX.Element
 */
const TechnologyFilter: React.FC<TechnologyFilterProps> = ({
  technologiesList,
  selectedTechnology,
  onTechnologyFilter,
}) => {
  /**
   * Handles the click event on a technology filter button.
   * @param {string} technology - The selected technology.
   */
  const handleClick = (technology: string | null) => {
    onTechnologyFilter(technology);
  };

  return (
    <div className={styles.filter_buttons}>
      <div className={`${styles.technologies} ${poppins.className}`}>
        <span
          className={`${styles.technology} ${!selectedTechnology ? styles.active : ''}`}
          onClick={() => handleClick(null)}
        >
          Featured
        </span>
        {technologiesList.map((tech, index) => (
          <span
            className={`${styles.technology} ${selectedTechnology === tech ? styles.active : ''}`}
            key={index}
            onClick={() => handleClick(tech)}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechnologyFilter;
