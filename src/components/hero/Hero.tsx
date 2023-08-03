import TechSlider from "@/components/hero/TechSlider";
import { techStack } from "@/lib/data";
import styles from './Hero.module.css';
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

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
        <h1 className={styles.heroHeading}>Front End Developer</h1>
        <TechSlider techList={techStack} />
      </div>
      <div className={styles.socialIcons}>
        <ul>
          <li>
            <a href="
              https://www.linkedin.com/in/al-annas-rauther-5b8a4a1b4/
              " target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={'2em'} color={'#586ba9'} />
            </a>
          </li>
          <li>
            <a href="
              https://www.linkedin.com/in/al-annas-rauther-5b8a4a1b4/
              " target="_blank" rel="noopener noreferrer">
              <FaGithub size={'2em'} color={'#586ba9'} />
            </a>
          </li>
          <li>
            <a href="
              https://www.linkedin.com/in/al-annas-rauther-5b8a4a1b4/
              " target="_blank" rel="noopener noreferrer">
              <FaWhatsapp size={'2em'} color={'#586ba9'} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;