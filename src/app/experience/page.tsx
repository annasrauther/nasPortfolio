import Experience from '@/components/experience/Experience';
import { poppins } from '@/lib/fonts';
import {
  workExperience,
} from '@/lib/data'
import Image from 'next/image';
import styles from './Experience.module.css';

/**
 * Projects Component displays a list of Portfolio items.
 * @returns {JSX.Element} The rendered Projects component.
 */
const Projects: React.FC = () => {
  return (
    <div className="page-container">
      <h1 className={`page-heading ${poppins.className}`}>Experience</h1>
      <div className={styles.section_row}>
        <Image
          src="/experience_banner.svg"
          alt="Experience"
          width={500}
          height={500}
        />
        <div className={styles.section_column}>
          <p className={styles.paragraph}>{`At work, I find immense joy in what I do and cherish the people I collaborate with. It's not just a job; it's a meaningful part of my life. Throughout my journey, I've had the privilege of learning from exceptional leaders and passing on my knowledge to juniors, fostering growth and nurturing talent.`}</p>
          <p className={styles.paragraph}>{`Every day, I embrace new challenges that fuel my personal and professional growth. With enthusiasm, I tackle each obstacle, driven by my commitment to excellence and passion for creating impactful solutions in the projects I take pride in.`}</p>
          <p className={styles.paragraph}>{`Work is more than just a routine; it's an opportunity for continuous improvement, building connections, and making a positive impact. I look forward to each day with excitement, knowing that the journey of growth and learning never truly ends.`}</p>
        </div>
      </div>
      <Experience experienceItems={workExperience} />
    </div>
  );
}

export default Projects;





