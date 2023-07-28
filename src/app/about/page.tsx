import Tech from '@/components/tech/Tech';
import Experience from '@/components/experience/Experience';
import ImageSlider from '@/components/slider/ImageSlider';
import styles from './About.module.css';
import { aboutBioImages, technologies, workExperience } from '@/lib/data'

/**
 * About component to display information about the developer.
 * @param {AboutProps} props - The props for the About component.
 * @returns {JSX.Element} The JSX element representing the About component.
 */
const About: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>About</h1>
      <div className={styles.section_row}>
        <div className={styles.section_column}>
          <p className={styles.paragraph}>
            Welcome to my digital realm! With over 8 years of experience in web development, I&apos;m a full-stack expert with a front-end focus. Crafting seamless websites and web apps for large data projects is my passion, and my track record speaks for itself. In 2015, I landed a Jr Front End Developer role at Wisdmlabs, just two months after my self-taught journey began. Located in Mumbai, I draw inspiration from strategic chess battles, enlightening TedED and Fireship videos, and the occasional weightlifting session.
          </p>
          <p className={styles.paragraph}>
            Beyond coding, my taste buds dance for anything made with eggs or potatoes—a culinary adventure that keeps me exploring flavors. On the professional side, you can find me on LinkedIn, and in my dressing style, comfort is key for staying ready to tackle coding challenges. With technology as my sole interest, I stay ahead by reading tech articles on Medium, continuously fueling my passion for innovation.
          </p>
          <p className={styles.paragraph}>
            Hop on board this exhilarating web development journey, where your visions become reality through my technical prowess that speaks volumes. Together, we&apos;ll craft something truly extraordinary!
          </p>
        </div>
        <div className={styles.section_column}>
          <ImageSlider
            images={aboutBioImages}
          />
        </div>
      </div>
      <div className={styles.section}>
        <div className="w-full">
          <h2 className={styles.subheading}>Used Technologies</h2>
        </div>
        <Tech technologies={technologies} />
      </div>
      <div className={styles.section}>
        <div className="w-full">
          <h2 className={styles.subheading}>Work Experience</h2>
        </div>
        <Experience experienceItems={workExperience} />
      </div>
    </div>
  );
};

export default About;
