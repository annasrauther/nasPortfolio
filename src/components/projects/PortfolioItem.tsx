import styles from './Portfolio.module.css';
import Image from 'next/image';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import Button from '../button/Button';
import { poppins } from '@/lib/fonts';
import { PortfolioItem as PortfolioItemProps } from '@/interfaces/portfolio';

/**
 * Represents the props for the PortfolioItem component.
 * @interface PortfolioItemProps
 * @property {object} title - The title object containing the rendered title.
 * @property {object} payload - The payload data of the portfolio item.
 * @property {string} payload.screenshot_url - The URL of the portfolio item screenshot.
 * @property {string} payload.url - The URL of the portfolio item.
 * @property {string} payload.description - The description of the portfolio item.
 * @property {object[]} payload.skills - An array of technology skills used in the portfolio item.
 * @property {string} payload.skills[].title - The title of the technology skill.
 * @property {string} payload.skills[].skill_image - The URL of the technology skill image.
 */

/**
 * Represents the PortfolioItem component that displays a single portfolio item.
 * @component
 * @param {PortfolioItemProps} props - The props for the PortfolioItem component.
 * @returns {JSX.Element} The PortfolioItem component JSX element.
 */
const PortfolioItem: React.FC<PortfolioItemProps> = ({
  title,
  payload,
}) => {
  return (
    <div className={styles['portfolio-item']}>
      <div className={styles['portfolio-item__image']}>
        <Image src={payload.screenshot_url} alt={title.rendered} width={500} height={500} />
      </div>
      <div className={styles['portfolio-item__content']}>
        <h3 className={`${styles['portfolio-item__label']} ${poppins.className}`} dangerouslySetInnerHTML={{ __html: title.rendered }} />
        <div className={styles['portfolio-item__desc']} dangerouslySetInnerHTML={{ __html: payload.description }}></div>
        <div className={styles.portfolio__technology}>
          {payload.skills.map((tech, index) => (
            <span className={styles['portfolio__technology-item']} key={index}>
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
