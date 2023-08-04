import Image from 'next/image';
import { ExperienceItem } from '@/interfaces/experience';
import { poppins } from '@/lib/fonts';
import styles from './Experience.module.css';

/**
 * Represents the props for the Experience component.
 * @interface ExperienceProps
 * @property {ExperienceItem[]} experienceItems - An array of `ExperienceItem` objects representing the list of work experiences with details.
 */
interface ExperienceProps {
  experienceItems: ExperienceItem[];
}

/**
 * Experience Component displays a list of work experiences with details.
 *
 * @component
 * @param {ExperienceProps} props - The component props containing the experienceItems array.
 * @returns {JSX.Element} The rendered Experience component.
 */
const Experience: React.FC<ExperienceProps> = ({ experienceItems }) => {
  return (
    <>
      {experienceItems.map((item, index) => (
        <div key={index} className={styles.experience} data-duration={item.payload.duration}>
          <div className={styles.experience__wrapper}>
            <a href={item.payload.company_url} target='_blank' rel='noopener noreferrer'>
              <Image
                className={styles.experience__logo}
                alt={item.payload.company_name}
                width={90}
                height={90}
                src={item.payload.company_logo}
              />
            </a>
            <div className={styles.experience__header}>
              <h4 className={poppins.className}>{item.title.rendered}</h4>
              <h5><a className="highlight" href={item.payload.company_url} target='_blank' rel='noopener noreferrer'>{item.payload.company_name}</a></h5>
            </div>
          </div>
          <div className={styles.experience__content} dangerouslySetInnerHTML={{ __html: item.payload.description }}></div>
        </div>
      ))}
    </>
  );
};

export default Experience;
