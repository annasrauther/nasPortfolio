import { useState } from 'react';
import { PortfolioItem } from '@/interfaces/portfolio';
import TechnologyFilter from './TechnologyFilter';
import PortfolioList from './PortfolioList';
import styles from './Portfolio.module.css';

/**
 * Represents the props for the Portfolio component.
 */
interface PortfolioProps {
  portfolioItems: PortfolioItem[];
  technologiesList: string[];
}

/**
 * Represents the PortfolioContainer component that displays a list of portfolio items & filters.
 * @param {PortfolioProps} props - The props for the PortfolioContainer component.
 * @returns {JSX.Element} JSX.Element
 */
const PortfolioContainer: React.FC<PortfolioProps> = ({ portfolioItems, technologiesList }) => {
  const [selectedTechnology, setSelectedTechnology] = useState<string | null>(null);

  /**
   * handle and set selected technology filter.
   * @param {string | null} technology - The selected technology.
   */
  const handleTechnologyFilter = (technology: string | null) => {
    setSelectedTechnology(technology);
  };

  /**
   * Filters the portfolio items based on the selected technology.
   * @returns {PortfolioWorkItem[]} The filtered portfolio items.
   */
  const getFilteredProjects = (): PortfolioItem[] => {
    return selectedTechnology
      ? portfolioItems.filter((item) =>
        item.payload.skills.some((tech) => tech.title === selectedTechnology)
      )
      : portfolioItems;
  };

  // Get the filtered projects based on the selected technology
  const filteredProjects = getFilteredProjects();

  return (
    <div className={styles.portfolio__container}>
      <TechnologyFilter
        technologiesList={technologiesList}
        selectedTechnology={selectedTechnology}
        onTechnologyFilter={handleTechnologyFilter}
      />
      <PortfolioList filteredProjects={filteredProjects} />
    </div>
  );
};

export default PortfolioContainer;
