import TechContainer from '@/components/skills/TechContainer';
import { poppins } from '@/lib/fonts';
import Image from 'next/image';
import { getSkillArchive } from '@/services/skill';
import styles from './Skills.module.css';

/**
 * Projects Component displays a list of Portfolio items.
 * @returns {JSX.Element} The rendered Projects component.
 */
const Projects: React.FC = async () => {
  const skills = await getSkillArchive()
  return (
    <div className="page-container">
      <h1 className={`page-heading ${poppins.className}`}>Skills</h1>
      <div className={styles.section_row}>
        <Image
          src={'/skills_banner.svg'}
          alt="Skills"
          width={500}
          height={500}
        />
        <div className={styles.section_column}>
          <p className={styles.paragraph}>{`As an accomplished front-end developer experienced in full-stack applications, I embrace a versatile approach to web development. My focus lies in crafting visually appealing and user-friendly interfaces, ensuring seamless user experiences.`}</p>
          <p className={styles.paragraph}>{`I'm not a backend expert, but I work comfortably with server-side functionalities, contributing to successful full-stack applications. My passion for innovation drives me to deliver cutting-edge solutions, elevating web experiences.`}</p>
          <p className={styles.paragraph}>{`Explore the list of technologies I've used below to witness the scope of my skills.`}</p>
        </div>
      </div>
      <TechContainer technologies={skills} />
    </div>
  );
}

export default Projects;





