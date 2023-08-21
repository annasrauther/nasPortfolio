import styles from './Portfolio.module.css';
import { PortfolioItem as PortfolioItemProps } from '@/interfaces/portfolio';
import PortfolioItem from './PortfolioItem';

/**
 * Represents the props for the PortfolioList component.
 * @interface PortfolioListProps
 * @property {PortfolioItemProps[]} filteredProjects - The list of filtered portfolio items to display.
 */
interface PortfolioListProps {
  filteredProjects: PortfolioItemProps[];
}

/**
 * Represents the PortfolioList component that displays a list of portfolio items.
 * @component
 * @param {PortfolioListProps} props - The props for the PortfolioList component.
 * @returns {JSX.Element} The PortfolioList component JSX element.
 */
const PortfolioList: React.FC<PortfolioListProps> = ({ filteredProjects }) => {
  /**
   * Renders the portfolio items.
   * @function
   * @returns {JSX.Element[]} Array of JSX elements representing portfolio items.
   */
  const renderPortfolioItems = (): React.ReactNode[] => {
    return filteredProjects.map((item, index) => (
      <PortfolioItem key={index} {...item} />
    ));
  };

  return (
    <section aria-labelledby="portfolio-heading">
      <h2 id="portfolio-heading" style={{ display: 'none' }}>Portfolio</h2>
      <div className={styles.portfolio__list}>
        {renderPortfolioItems()}
      </div>
    </section>
  );
};

export default PortfolioList;
