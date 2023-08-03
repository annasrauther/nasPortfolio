import styles from './Skills.module.css';
import Tech from '@/components/tech/Tech';
import { technologies } from '@/lib/data'

/**
 * Projects Component displays a list of Portfolio items.
 * @returns {JSX.Element} The rendered Projects component.
 */
const Projects: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Skills</h1>
      <p>List of Technologies (Used at least once)</p>
      <Tech technologies={technologies} />
    </div>
  );
}

export default Projects;





