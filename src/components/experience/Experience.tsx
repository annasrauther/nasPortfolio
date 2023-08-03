import Image from 'next/image';
import { ExperienceItem } from '@/lib/interfaces';
import styles from './Experience.module.css';
import { poppins } from '@/lib/fonts';

interface ExperienceProps {
  experienceItems: ExperienceItem[];
}

/**
 * Experience Component displays a list of work experiences with details.
 * @param {ExperienceProps} props - The component props containing the experienceItems array.
 * @returns {JSX.Element} The rendered Experience component.
 */
const Experience: React.FC<ExperienceProps> = ({ experienceItems }) => {
  return (
    <>
      {experienceItems.map((item, index) => (
        <div key={index} className={styles.experience_item} duration-span={item.duration}>
          <div className={styles.experience_wrapper}>
            <div>
              <h4 className={poppins.className}>{item.title}</h4>
              <h5><a href={item.company.url} target='_blank' rel='noopener noreferrer'>{item.company.name}</a></h5>
            </div>
            <a href={item.company.url} target='_blank' rel='noopener noreferrer'>
              <Image
                alt={item.company.name}
                width={90}
                height={90}
                src={item.company.logo}
              />
            </a>
          </div>
          <ul>
            {item.description.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};

export default Experience;
