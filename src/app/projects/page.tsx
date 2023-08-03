"use client";
// import styles from './Projects.module.css';
import Portfolio from '@/components/portfolio/Portfolio';
import { poppins } from '@/lib/fonts';
import {
  workPortfolio,
  workTechnologiesList,
} from '@/lib/data'

/**
 * Projects Component displays a list of Portfolio items.
 * @returns {JSX.Element} The rendered Projects component.
 */
const Projects: React.FC = () => {
  return (
    <div className="page-container">
      <h1 className={`page-heading ${poppins.className}`}>Projects</h1>
      <Portfolio portfolioItems={workPortfolio} technologiesList={workTechnologiesList} />
    </div>
  );
}

export default Projects;





