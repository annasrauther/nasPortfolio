"use client";
import styles from './Projects.module.css';
import Portfolio from '@/components/portfolio/Portfolio';
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
    <div className={styles.container}>
      <h1 className={styles.heading}>Projects</h1>
      <Portfolio portfolioItems={workPortfolio} technologiesList={workTechnologiesList} />
    </div>
  );
}

export default Projects;





