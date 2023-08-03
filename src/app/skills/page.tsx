import Tech from '@/components/tech/Tech';
import { poppins } from '@/lib/fonts';
import { technologies } from '@/lib/data'

/**
 * Projects Component displays a list of Portfolio items.
 * @returns {JSX.Element} The rendered Projects component.
 */
const Projects: React.FC = () => {
  return (
    <div className="page-container">
      <h1 className={`page-heading ${poppins.className}`}>Skills</h1>
      <p>List of Technologies (Used at least once)</p>
      <Tech technologies={technologies} />
    </div>
  );
}

export default Projects;





