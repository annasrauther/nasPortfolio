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
        <article
          key={index}
          className={styles.experience}
          data-duration={item.payload.duration}
          aria-label={`Work Experience ${index + 1}`}
        >
          <div className={styles.experience__wrapper}>
            <a href={item.payload.company_url} target='_blank' rel='noopener noreferrer'>
              <Image
                className={styles.experience__logo}
                alt={item.payload.company_name + ' logo'}
                width={90}
                height={90}
                src={item.payload.company_logo}
              />
            </a>
            <div className={styles.experience__header}>
              <h2 className={`${poppins.className} ${styles.experience__title}`} dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
              <h3 className={styles.experience__company}>
                <a
                  className="highlight"
                  href={item.payload.company_url}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={`Company Name: ${item.payload.company_name}`}
                >{item.payload.company_name}</a>
              </h3>
              <h4 className={styles.experience__location} aria-label={`Location: ${item.payload.company_location}`}>{item.payload.company_location}</h4>
            </div>
          </div>
          <div
            className={styles.experience__content}
            dangerouslySetInnerHTML={{ __html: item.payload.description }}
            aria-label={`Experience Description: ${index + 1}`}
          />
        </article>
      ))}
    </>
  );
};

export default Experience;
