import styles from './Portfolio.module.css';
import { PortfolioWorkItem } from '@/lib/interfaces';
import PortfolioItem from './PortfolioItem';

/**
 * Represents the props for the PortfolioList component.
 */
interface PortfolioListProps {
  filteredProjects: PortfolioWorkItem[];
}

/**
 * Represents the PortfolioList component that displays a list of portfolio items.
 * @param {PortfolioListProps} props - The props for the PortfolioList component.
 * @returns {JSX.Element} JSX.Element
 */
const PortfolioList: React.FC<PortfolioListProps> = ({ filteredProjects }) => {
  /**
   * Renders the portfolio items.
   * @returns {JSX.Element[]} Array of JSX elements representing portfolio items.
   */
  const renderPortfolioItems = (): React.ReactNode[] => {
    return filteredProjects.map((item, index) => (
      <PortfolioItem key={index} {...item} />
    ));
  };

  return (
    <>
      <div className={styles.totalProjects}>Total: {filteredProjects.length}</div>
      <div className={styles.portfolio_items_container}>
        {renderPortfolioItems()}
      </div>
    </>
  );
};

export default PortfolioList;
