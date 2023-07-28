import styles from './Portfolio.module.css';
import Image from 'next/image';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import Button from '../button/Button';

/**
 * Represents a technology used in the portfolio item.
 */
interface Technology {
  name: string;
  icon: React.ComponentType<any>;
}

/**
 * Represents the props for the PortfolioItem component.
 */
interface PortfolioItemProps {
  title: string;
  screenshot: string;
  url: string;
  description: string[];
  technologies: Technology[];
}

/**
 * Represents the PortfolioItem component that displays a single portfolio item.
 * @param {PortfolioItemProps} props - The props for the PortfolioItem component.
 * @returns {JSX.Element} JSX.Element
 */
const PortfolioItem: React.FC<PortfolioItemProps> = ({
  title,
  screenshot,
  url,
  description,
  technologies,
}) => {
  return (
    <div className={styles.portfolio_item}>
      <div className={styles.portfolio_item_image}>
        <Image src={screenshot} alt={title} width={500} height={500} />
      </div>
      <div className={styles.portfolio_item_content}>
        <h3 className={styles.portfolio_item_content_label}>{title}</h3>
        <ul>
          {description.map((desc, index) => (
            <li className={styles.portfolio_item_content_desc} key={index}>
              {desc}
            </li>
          ))}
        </ul>
        <div className={styles.technologies}>
          {technologies.map((tech, index) => (
            <span className={styles.technology} key={index}>
              {tech.name} {<tech.icon size="1.5em" />}
            </span>
          ))}
        </div>
        <div style={{ display: 'inherit' }}>
          <Button label="View Project" href={url} target icon={BsFillArrowRightCircleFill} />
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
