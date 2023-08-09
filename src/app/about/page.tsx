import Image from 'next/image';
import { poppins } from '@/lib/fonts';
import styles from './About.module.css';
import { FaLaptopCode, FaChess } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
import { FcReading } from 'react-icons/fc';
import { IoFastFoodOutline } from 'react-icons/io5';
import { GrTechnology } from 'react-icons/gr';

/**
 * About component to display information about the developer.
 * @param {AboutProps} props - The props for the About component.
 * @returns {JSX.Element} The JSX element representing the About component.
 */
const About: React.FC = () => {
  return (
    <div className="page-container">
      <h1 className={`page-heading ${poppins.className}`}>About</h1>
      <div className="section_row">
        <div className={styles.section_column}>
          <Image
            className={styles.bio_image}
            src="/about/about_main_heading.svg"
            alt={'About Banner'}
            width={500}
            height={500}
          />
        </div>
        <div className={styles.section_column}>
          <p className="paragraph">
            <FaLaptopCode /> {`8 years of web development experience, specializing in front-end work.`}
          </p>
          <p className="paragraph">
            <CgWebsite /> {`Committed to crafting seamless websites and web apps for large data projects.`}
          </p>
          <p className="paragraph">
            <FcReading />{`Transitioned from self-teaching to Junior Front-End Developer at WisdmLabs in 2015.`}
          </p>
          <p className="paragraph">
            <FaChess />{`Inspired by strategic chess battles, TED-Ed, and Fireship videos.`}
          </p>
          <p className="paragraph">
            <IoFastFoodOutline />{`Enjoys dishes with eggs or potatoes and maintains a comfortable dressing style.`}
          </p>
          <p className="paragraph">
            <GrTechnology />{`Excited to collaborate on bringing your visions to life through technical prowess.`}
          </p>
        </div>
      </div>
      <div className={styles.section_column}>
        <div className={styles['belief-wrapper']}>
          <div className={styles['belief-section']}>
            <h2 className={styles['page-subtitle']}>Health & Fitness</h2>
            <ul className={styles['belief-list']}>
              <li>{`I firmly believe that everyone, when capable, should have the opportunity to care for their physical well-being independently — it's crucial for overall health and wellness.`}</li>
              <li>{`In my view, meditation takes various forms, extending beyond sitting still — different practices offer valuable benefits, fostering mindfulness and inner peace.`}</li>
              <li>I must say <a className="highlight" href='https://stronglifts.com/5x5/' target='_blank' rel='noopener noreferrer'>StrongLifts</a> is awesome.</li>
              <li>{`From my personal experience, I find that getting seven hours of sleep each night is the ideal and optimal duration for restorative rest.`}</li>
              <li>{`Regular exercise not only boosts productivity but also enhances overall happiness — this is my humble observation.`}</li>
            </ul>
          </div>
          <div>
            <Image className={styles['belief-image']} src="/about/about_health.svg" alt={'Health & Fitness'} width={500} height={500} />
          </div>
        </div>

        <div className={styles['belief-wrapper']}>
          <div>
            <Image className={styles['belief-image']} src="/about/about_lifestyle.svg" alt={'Lifestyle & Goals'} width={500} height={500} />
          </div>
          <div className={styles['belief-section']}>
            <h2 className={styles['page-subtitle']}>Lifestyle & Goals</h2>
            <ul className={styles['belief-list']}>
              <li>{`Setting clear plans and goals is of utmost importance in achieving our desired aspirations — I wholeheartedly believe in this principle.`}</li>
              <li>{`The state of flow, where focused concentration leads to losing track of time, is truly remarkable and offers a unique experience for personal growth and creativity — this is my view.`}</li>
              <li>{`Consistently tracking our progress is key to paving the way for continuous improvement and growth.`}</li>
              <li>Forget <b>follow your passion</b>. Focus on honing skills; passion will come naturally.</li>
            </ul>
          </div>
        </div>
        <div className={styles['belief-wrapper']}>
          <div className={styles['belief-section']}>
            <h2 className={styles['page-subtitle']}>Money & Finances</h2>
            <ul className={styles['belief-list']}>
              <li>{`I strongly believe in empowering young individuals with comprehensive financial education before life-changing decisions, like taking out loans.`}</li>
              <li>{`Investing in lasting quality, even with higher upfront costs, leads to greater value and long-term satisfaction — I firmly stand by this principle.`}</li>
              <li>{`Seizing legal tax-saving opportunities without guilt — this is a must.`}</li>
              <li>{`Healthcare as a fundamental human need, accessible for all through government support — I feel strongly about this.`}</li>
              <li>{`Apartments offer unmatched advantages—convenience, amenities, and a sense of community, making them an excellent living choice — I understand and believe in this perspective.`}</li>
            </ul>
          </div>
          <div>
            <Image className={styles['belief-image']} src="/about/about_money.svg" alt={'Money & Finances'} width={500} height={500} />
          </div>
        </div>
        <div className={styles['belief-wrapper']}>
          <div>
            <Image className={styles['belief-image']} src="/about/about_education.svg" alt={'Education & Learning'} width={500} height={500} />
          </div>
          <div className={styles['belief-section']}>
            <h2 className={styles['page-subtitle']}>Education & Learning</h2>
            <ul className={styles['belief-list']}>
              <li>{`I firmly believe in the power of side projects for continuous learning, even if they don't always succeed. They offer invaluable experiences and foster personal growth.`}</li>
              <li>{`Teaching others is a remarkably effective way to achieve deep understanding in any subject — I strongly stand by this approach.`}</li>
              <li>{`College isn't always a necessity for programming jobs. Boot camps and side projects can effectively fulfill learning and skill-building needs.`}</li>
              <li>{`Creating with code is one of life's most enjoyable and fulfilling experiences — truly rewarding in every sense.`}</li>
              <li>{`While not advocating complete disengagement, limiting excessive social media time fosters a healthier, more productive lifestyle. Let's strike that balance together.`}</li>
            </ul>
          </div>
        </div>
        <div className={styles['belief-wrapper']}>
          <div className={styles['belief-section']}>
            <h2 className={styles['page-subtitle']}>Relationships</h2>
            <ul className={styles['belief-list']}>
              <li>I firmly believe that playing board games with friends and colleagues is one of the most enjoyable and fulfilling ways to spend an evening. It fosters camaraderie and creates lasting memories.</li>
              <li>{`Personally, I value the importance of alone time for rejuvenation and introspection — it revitalizes after social interactions.`}</li>
              <li>{`Embracing diverse experiences and new ideas prevents close-mindedness and unlocks valuable perspectives and growth opportunities.`}</li>
              <li>{`I share the belief in the power of storytelling to forge deep connections — sharing common themes fosters empathy and strengthens bonds.`}</li>
              <li>{`Empathy is a cornerstone in relationships, elevating discourse and fostering meaningful communication. It promotes genuine understanding, nurtures compassion, and strengthens connections on a profound level.`}</li>
            </ul>
          </div>
          <div>
            <Image className={styles['belief-image']} src="/about/about-family.svg" alt={'Relationships'} width={500} height={500} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
