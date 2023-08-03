import TechSlider from "@/components/hero/TechSlider";
import { techStack } from "@/lib/data";
import { poppins } from '@/lib/fonts';
import { FaGithub, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import styles from './Hero.module.css';

/**
 * Hero Component
 *
 * This component represents the hero section of the application.
 * It displays the title, TechSlider, and a button.
 *
 * @returns {JSX.Element} The Hero component JSX element.
 */
const Hero: React.FC = () => {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.imageWrapper}></div>
      <div className={styles.wrapper}>
        <h1 className={`${styles.heroHeading}  ${poppins.className}`}>Front End Developer</h1>
        <TechSlider techList={techStack} />
      </div>
      <div className={styles.socialIcons}>
        <ul>
          <li>
            <a href="
              https://www.linkedin.com/in/al-annas-rauther-5b8a4a1b4/
              " target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={'2em'} color={'#0967c2'} />
            </a>
          </li>
          <li>
            <a href="
              https://www.linkedin.com/in/al-annas-rauther-5b8a4a1b4/
              " target="_blank" rel="noopener noreferrer">
              <FaGithub size={'2em'} color={'black'} />
            </a>
          </li>
          <li>
            <a href="
              https://www.linkedin.com/in/al-annas-rauther-5b8a4a1b4/
              " target="_blank" rel="noopener noreferrer">
              <FaWhatsappSquare size={'2em'} color={'#25d466'} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;