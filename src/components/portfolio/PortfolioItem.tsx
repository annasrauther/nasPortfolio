import styles from './Portfolio.module.css';
import Image from 'next/image';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import Button from '../button/Button';
import { poppins } from '@/lib/fonts';
import { PortfolioItem as PortfolioItemProps } from '@/interfaces/portfolio';

/**
 * Represents the PortfolioItem component that displays a single portfolio item.
 * @param {PortfolioItemProps} props - The props for the PortfolioItem component.
 * @returns {JSX.Element} JSX.Element
 */
const PortfolioItem: React.FC<PortfolioItemProps> = ({
  title,
  payload,
}) => {
  return (
    <div className={styles.portfolio_item}>
      <div className={styles.portfolio_item_image}>
        <Image src={payload.screenshot_url} alt={title.rendered} width={500} height={500} />
      </div>
      <div className={styles.portfolio_item_content}>
        <h3 className={`${styles.portfolio_item_content_label} ${poppins.className}`}>{title.rendered}</h3>
        <div className={styles.portfolio_item_content_desc} dangerouslySetInnerHTML={{ __html: payload.description }}></div>
        <div className={styles.technologies}>
          {payload.skills.map((tech, index) => (
            <span className={styles.technology} key={index}>
              {tech.title} <Image src={tech.skill_image} alt={tech.title} width={20} height={20} />
            </span>
          ))}
        </div>
        <div style={{ display: 'inherit' }}>
          <Button label="Visit" href={payload.url} target icon={BsFillArrowRightCircleFill} />
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
