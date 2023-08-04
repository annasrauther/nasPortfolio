import Image from 'next/image';
import styles from './About.module.css';
import { poppins } from '@/lib/fonts';

/**
 * About component to display information about the developer.
 * @param {AboutProps} props - The props for the About component.
 * @returns {JSX.Element} The JSX element representing the About component.
 */
const About: React.FC = () => {
  return (
    <div className="page-container">
      <h1 className={`page-heading ${poppins.className}`}>About</h1>
      <div className={styles.section_row}>
        <div className={styles.section_column}>
          <Image
            className={styles.bio_image}
            src="/about/main_1.svg"
            alt="About Image"
            width={500}
            height={500}
          />
        </div>
        <div className={styles.section_column}>
          <p className={styles.paragraph}>
            {`Step into my digital domain! With an extensive 8-year background in web development, I've honed my skills as a full-stack guru with a primary focus on front-end work. My true passion lies in building seamless websites and web apps for large data projects, and my impressive track record speaks volumes.`}
          </p>
          <p className={styles.paragraph}>
            {`In the exciting year of 2015, I embarked on a daring journey of self-teaching, and remarkably, within a mere two months, I proudly landed a Junior Front-End Developer role at Wisdmlabs. During my leisure hours, I find inspiration in strategic chess battles, enlightening TED-Ed and Fireship videos, and indulging in occasional weightlifting sessions. These activities fuel my creativity and keep me motivated in the world of web development.`}
          </p>
          <p className={styles.paragraph}>
            {`Beyond coding, my taste buds celebrates any dishes containing eggs or potatoes. My dressing style prioritizes comfort, keeping me prepared to effortlessly tackle coding challenges.`}
          </p>
          <p className={styles.paragraph}>
            {`Join this thrilling web development journey where your visions become reality through my technical prowess. Together, we'll forge something truly extraordinary!`}
          </p>
        </div>
      </div>
      <div className={styles.section_column}>
        <h2 className={`page-subheading ${poppins.className}`}>My Belief</h2>

        <div className={styles['belief-wrapper']}>
          <div className={styles['belief-section']}>
            <h3 className={styles['page-subtitle']}>Health & Fitness</h3>
            <ul className={styles['belief-list']}>
              <li>I hold the belief that all individuals, capable of doing so, should have the ability to independently take care of their basic physical maintainance, it is essential for overall well-being and health.</li>
              <li>I firmly believe that meditation can take diverse forms, and it does not always require sitting still. Various practices offer valuable benefits for mindfulness and inner peace.</li>
              <li>I believe <a className="highlight" href='https://stronglifts.com/5x5/' target='_blank' rel='noopener noreferrer'>StrongLifts</a> is awesome.</li>
              <li>In my perspective, getting seven hours of sleep each night is the ideal and optimal duration for restorative rest.</li>
              <li>In my experience, regular exercise not only boosts my productivity but also enhances my overall happiness in every aspect of life.</li>
            </ul>
          </div>
          <div>
            <Image className={styles['belief-image']} src="/about/bio_6.svg" alt="About Image" width={300} height={300} />
          </div>
        </div>

        <div className={styles['belief-wrapper']}>
          <div>
            <Image className={styles['belief-image']} src="/about/bio_1.svg" alt="About Image" width={300} height={300} />
          </div>
          <div className={styles['belief-section']}>
            <h3 className={styles['page-subtitle']}>Lifestyle & Goals</h3>
            <ul className={styles['belief-list']}>
              <li>I strongly believe in the significance of setting clear plans and goals to guide the path towards desired achievements.</li>
              <li>In my view, the state of <b>flow</b> is truly remarkable, where one can immerse themselves in focused concentration, losing track of time. This unique experience should be nurtured and cultivated to enhance personal growth and creativity.</li>
              <li>Tracking progress consistently paves the way for continuous improvement and growth.</li>
              <li>Forget <b>follow your passion</b>. Focus on honing skills; passion will come naturally.</li>
            </ul>
          </div>
        </div>
        <div className={styles['belief-wrapper']}>
          <div className={styles['belief-section']}>
            <h3 className={styles['page-subtitle']}>Money & Finances</h3>
            <ul className={styles['belief-list']}>
              <li>I strongly believe that young individuals should receive extensive financial education before making life-changing decisions, such as taking out loans.</li>
              <li>I believe that investing in lasting quality, even if it costs more upfront, leads to greater value and satisfaction in the long run.</li>
              <li>I firmly believe that if you have the opportunity to lower your taxes legally, you should seize it without any feelings of guilt.</li>
              <li>I believe that healthcare should be considered a fundamental human need and provided by the government to ensure equal access and well-being for all.</li>
              <li>I understand, and I believe that apartments offer many advantages such as convenience, amenities, and a sense of community, making them a great choice for living.</li>
            </ul>
          </div>
          <div>
            <Image className={styles['belief-image']} src="/about/bio_5.svg" alt="About Image" width={300} height={300} />
          </div>
        </div>
        <div className={styles['belief-wrapper']}>
          <div>
            <Image className={styles['belief-image']} src="/about/bio_3.svg" alt="About Image" width={300} height={300} />
          </div>
          <div className={styles['belief-section']}>
            <h3 className={styles['page-subtitle']}>Education & Learning</h3>
            <ul className={styles['belief-list']}>
              <li>I firmly believe in maintaining side projects as a means of continuous learning, even if they do not succeed in the end. They provide valuable experiences and opportunities for growth.</li>
              <li>I strongly believe that one of the most effective ways to achieve deep understanding of a subject is by teaching it to others.</li>
              <li>I believe that, in many cases, attending college is not a necessity for pursuing most programming jobs available today, as boot camps and side projects can effectively fulfill the learning and skill-building requirements.</li>
              <li>I share the belief that programming and creating something is one of the most enjoyable and fulfilling experiences in the world. The process of bringing ideas to life through code is truly rewarding.</li>
              <li>I share the belief that excessive time spent on social media can hinder personal growth. While I am not advocating complete disengagement, limiting exposure can foster a healthier and more productive lifestyle.</li>
            </ul>
          </div>
        </div>
        <div className={styles['belief-wrapper']}>
          <div className={styles['belief-section']}>
            <h3 className={styles['page-subtitle']}>Family & Relationships</h3>
            <ul className={styles['belief-list']}>
              <li>I firmly believe that playing board games with friends and colleagues is one of the most enjoyable and fulfilling ways to spend an evening. It fosters camaraderie and creates lasting memories.</li>
              <li>I share the belief in the importance of having alone time to recharge and rejuvenate. It allows for introspection and restores energy after social interactions.</li>
              <li>I firmly believe that individuals who dont travel or expose themselves to new ideas through various means tend to become close-minded and miss out on valuable perspectives and growth opportunities.</li>
              <li>I share the belief that one of the most effective ways to connect with people and get to know them deeply is by sharing stories around common themes or prompts. It fosters understanding and strengthens bonds.</li>
              <li>I firmly believe that in any discussion, negotiation, or argument, caring about others feelings is crucial because without empathy, the facts presented lose their significance. True understanding and meaningful communication require considering emotions alongside facts.</li>
            </ul>
          </div>
          <div>
            <Image className={styles['belief-image']} src="/about/about_1.svg" alt="About Image" width={300} height={300} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
