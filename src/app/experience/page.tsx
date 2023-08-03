import Experience from '@/components/experience/Experience';
import { poppins } from '@/lib/fonts';
import {
  workExperience,
} from '@/lib/data'

/**
 * Projects Component displays a list of Portfolio items.
 * @returns {JSX.Element} The rendered Projects component.
 */
const Projects: React.FC = () => {
  return (
    <div className="page-container">
      <h1 className={`page-heading ${poppins.className}`}>Work Experience</h1>
      <Experience experienceItems={workExperience} />
    </div>
  );
}

export default Projects;





