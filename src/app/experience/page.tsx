import styles from './Experience.module.css';
import Experience from '@/components/experience/Experience';
import {
  workExperience,
} from '@/lib/data'

/**
 * Projects Component displays a list of Portfolio items.
 * @returns {JSX.Element} The rendered Projects component.
 */
const Projects: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Work Experience</h1>
      <Experience experienceItems={workExperience} />
    </div>
  );
}

export default Projects;





