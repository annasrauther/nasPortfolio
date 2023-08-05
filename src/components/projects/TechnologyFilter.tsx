import styles from './Portfolio.module.css';
import { poppins } from '@/lib/fonts';

/**
 * Represents the props for the TechnologyFilter component.
 * @interface TechnologyFilterProps
 * @property {string[]} technologiesList - The list of technologies to display.
 * @property {string | null} selectedTechnology - The currently selected technology.
 * @property {Function} onTechnologyFilter - The function to handle the technology filter.
 */
interface TechnologyFilterProps {
  technologiesList: string[];
  selectedTechnology: string | null;
  onTechnologyFilter: (_technology: string | null) => void;
}


/**
 * Represents the TechnologyFilter component that displays the technology filter buttons.
 * @component
 * @param {TechnologyFilterProps} props - The props for the TechnologyFilter component.
 * @returns {JSX.Element} The TechnologyFilter component JSX element.
 */
const TechnologyFilter: React.FC<TechnologyFilterProps> = ({
  technologiesList,
  selectedTechnology,
  onTechnologyFilter,
}) => {
  /**
   * Handles the click event on a technology filter button.
   * @param {string} technology - The selected technology.
   * @returns {void}
   */
  const handleClick = (technology: string | null): void => {
    onTechnologyFilter(technology);
  };

  return (
    <div className={styles.portfolio__filter} role="navigation" aria-label="Technology Filter">
      <div className={`${styles.portfolio__technology} ${poppins.className}`}>
        <span
          className={`${styles['portfolio__technology-item']} ${!selectedTechnology ? styles.active : ''
            }`}
          onClick={() => handleClick(null)}
          role="button"
          tabIndex={0}
        >
          Featured
        </span>
        {technologiesList.map((tech, index) => (
          <span
            className={`${styles['portfolio__technology-item']} ${selectedTechnology === tech ? styles.active : ''
              }`}
            key={index}
            onClick={() => handleClick(tech)}
            role="button"
            tabIndex={0}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechnologyFilter;
