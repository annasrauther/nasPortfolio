import Image from 'next/image';
import PortfolioContainer from '@/components/projects/PortfolioContainer';
import { poppins } from '@/lib/fonts';
import {
  workTechnologiesList,
} from '@/lib/data'
import styles from './Projects.module.css';
import { getPortfolioArchive } from '@/services/portfolio';

/**
 * Projects Component displays a list of Portfolio items.
 * @returns {JSX.Element} The rendered Projects component.
 */
const Projects: React.FC = async () => {
  const portfolioItems = await getPortfolioArchive()
  return (
    <div className="page-container">
      <h1 className={`page-heading ${poppins.className}`}>Projects</h1>
      <div className={styles.section_row}>
        <Image
          src="/projects_banner.svg"
          alt="Portfolio"
          width={500}
          height={500}
        />
        <div className={styles.section_column}>
          <p className={styles.paragraph}>{`In my work portfolio, you'll find a collection of projects that showcase my dedication to teamwork and my commitment to building solutions that simplify people's lives. I take pride in crafting detailed documentation, enabling seamless collaboration without the need for extensive explanations.`}</p>
          <p className={styles.paragraph}>{`Adhering to strict code standards is a priority for me, ensuring the development process remains organized and efficient. Writing performant code is another aspect I prioritize, optimizing the solutions I create for speed and effectiveness.`}</p>
          <p className={styles.paragraph}>{`Browse through my portfolio to witness the diverse range of projects I've contributed to, each reflecting my passion for making a positive impact through thoughtful and innovative solutions.`}</p>
        </div>
      </div>
      <PortfolioContainer portfolioItems={portfolioItems} technologiesList={workTechnologiesList} />
    </div>
  );
}

export default Projects;





