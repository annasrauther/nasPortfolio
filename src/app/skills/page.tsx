import TechContainer from '@/components/skills/TechContainer';
import { poppins } from '@/lib/fonts';
import Image from 'next/image';
import { getSkillArchive } from '@/services/skill';
import { CgWebsite } from 'react-icons/cg';
import { GrServerCluster } from 'react-icons/gr';
import { VscServerProcess } from 'react-icons/vsc';
import { FaPersonDotsFromLine } from 'react-icons/fa6';

/**
 * Projects Component displays a list of Portfolio items.
 * @returns {JSX.Element} The rendered Projects component.
 */
const Projects: React.FC = async () => {
  const skills = await getSkillArchive()
  return (
    <div className="page-container">
      <h1 className={`page-heading ${poppins.className}`}>Skills</h1>
      <div className="section_row">
        <Image
          src={'/skills_banner.svg'}
          alt="Skills"
          width={500}
          height={500}
        />
        <div className="section_column">
          <p className="paragraph">
            <FaPersonDotsFromLine />{`Front-end developer with full-stack application experience.`}</p>
          <p className="paragraph">
            <CgWebsite />{`Expertise in crafting visually appealing and user-friendly interfaces for seamless experiences.`}</p>
          <p className="paragraph">
            <GrServerCluster />{`Comfortable with server-side functionalities, contributing to successful full-stack applications.`}</p>
          <p className="paragraph">
            <VscServerProcess />{`Driven by innovation to deliver cutting-edge solutions for elevated web experiences.`}</p>
        </div>
      </div>
      <TechContainer technologies={skills} />
    </div>
  );
}

export default Projects;





