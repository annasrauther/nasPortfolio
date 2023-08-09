import Image from 'next/image';
import PortfolioContainer from '@/components/projects/PortfolioContainer';
import { poppins } from '@/lib/fonts';
import {
  workTechnologiesList,
} from '@/lib/data';
import { getPortfolioArchive } from '@/services/portfolio';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { BsJournalCode } from 'react-icons/bs';
import { FaLaptopCode } from 'react-icons/fa';
import { GiTeamIdea } from 'react-icons/gi';
import { GrDocumentText } from 'react-icons/gr';

/**
 * Projects Component displays a list of Portfolio items.
 * @returns {JSX.Element} The rendered Projects component.
 */
const Projects: React.FC = async () => {
  const portfolioItems = await getPortfolioArchive()
  return (
    <div className="page-container">
      <h1 className={`page-heading ${poppins.className}`}>Projects</h1>
      <div className="section_row">
        <Image
          src="/projects_banner.svg"
          alt="Portfolio"
          width={500}
          height={500}
        />
        <div className="section_column">
          <p className="paragraph">
            <GiTeamIdea />{`Portfolio showcases dedication to teamwork and simplifying lives through solutions.`}
          </p>
          <p className="paragraph">
            <GrDocumentText />{`Detailed documentation for seamless collaboration without extensive explanations.`}
          </p>
          <p className="paragraph">
            <BsJournalCode />{`Strict adherence to code standards for organized and efficient development.`}
          </p>
          <p className="paragraph">
            <FaLaptopCode />{`Prioritize writing performant code, optimizing solutions for speed and effectiveness.`}
          </p>
          <p className="paragraph">
            <AiOutlineFundProjectionScreen />{`Each project is an opportunity to learn, grow, and improve.`}
          </p>
        </div>
      </div>
      <PortfolioContainer portfolioItems={portfolioItems} technologiesList={workTechnologiesList} />
    </div>
  );
}

export default Projects;
