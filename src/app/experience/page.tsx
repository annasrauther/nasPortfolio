import Experience from '@/components/experience/Experience';
import { poppins } from '@/lib/fonts';
import Image from 'next/image';
import { getExperienceArchive } from '@/services/experience';
import { FaPeopleCarry } from 'react-icons/fa';
import { FaPeopleGroup, FaPeopleRoof } from 'react-icons/fa6';
import { BsCalendarDay } from 'react-icons/bs';
import { GiLifeBar } from 'react-icons/gi';

/**
 * ExperiencePage Component displays a list of Portfolio items.
 * @returns {JSX.Element} The rendered ExperiencePage component.
 */
const ExperiencePage: React.FC = async () => {
  const experienceItems = await getExperienceArchive()
  return (
    <div className="page-container">
      <h1 className={`page-heading ${poppins.className}`}>Experience</h1>
      <div className="section_row">
        <Image
          src="/experience_banner.svg"
          alt="Experience"
          width={500}
          height={500}
        />
        <div className="section_column">
          <p className="paragraph">
            <FaPeopleCarry />{`Immense joy in work and strong collaboration with fellow professionals.`}
          </p>
          <p className="paragraph">
            <GiLifeBar />{`Work is not merely a job, but a meaningful part of life.`}
          </p>
          <p className="paragraph">
            <FaPeopleGroup />{`Learn from exceptional leaders, mentor juniors, and foster growth.`}
          </p>
          <p className="paragraph">
            <BsCalendarDay />{`Embrace daily challenges for personal and professional advancement.`}
          </p>
          <p className="paragraph">
            <FaPeopleRoof />{`Each workday is an opportunity for improvement, connections, and impact.`}
          </p>
        </div>
      </div>
      <Experience experienceItems={experienceItems} />
    </div>
  );
}

export default ExperiencePage;





