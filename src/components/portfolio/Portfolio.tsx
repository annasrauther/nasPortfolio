import { useState } from 'react';
import styles from './Portfolio.module.css';
import { PortfolioWorkItem } from '@/lib/store';
import TechnologyFilter from './TechnologyFilter';
import PortfolioList from './PortfolioList';

/**
 * Represents the props for the Portfolio component.
 */
interface PortfolioProps {
  portfolioItems: PortfolioWorkItem[];
  technologiesList: string[];
}

/**
 * Represents the Portfolio component that displays a list of portfolio items.
 * @param {PortfolioProps} props - The props for the Portfolio component.
 * @returns {JSX.Element} JSX.Element
 */
const Portfolio: React.FC<PortfolioProps> = ({ portfolioItems, technologiesList }) => {
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
  const getFilteredProjects = (): PortfolioWorkItem[] => {
    return selectedTechnology
      ? portfolioItems.filter((item) =>
        item.technologies.some((tech) => tech.name === selectedTechnology)
      )
      : portfolioItems;
  };

  // Get the filtered projects based on the selected technology
  const filteredProjects = getFilteredProjects();

  return (
    <div className={styles.portfolio_list}>
      <TechnologyFilter
        technologiesList={technologiesList}
        selectedTechnology={selectedTechnology}
        onTechnologyFilter={handleTechnologyFilter}
      />
      <PortfolioList filteredProjects={filteredProjects} />
    </div>
  );
};

export default Portfolio;
