import styles from './Portfolio.module.css';
import { PortfolioItem as PortfolioItemProps } from '@/interfaces/portfolio';
import PortfolioItem from './PortfolioItem';

/**
 * Represents the props for the PortfolioList component.
 */
interface PortfolioListProps {
  filteredProjects: PortfolioItemProps[];
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
      <div className={styles.portfolio__list}>
        {renderPortfolioItems()}
      </div>
    </>
  );
};

export default PortfolioList;
