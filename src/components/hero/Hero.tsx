import TechSlider from "@/components/hero/TechSlider";
import SocialIcons from "./SocialIcons";
import { techStack } from "@/lib/data";
import HeroImage from "./HeroImage";
import { poppins } from '@/lib/fonts';
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
    <div className={styles.hero__container}>
      <HeroImage />
      <div className={styles.hero__wrapper}>
        <h1 className={`${styles.hero__heading}  ${poppins.className}`}>Front End Developer</h1>
        <TechSlider techList={techStack} />
      </div>
      <SocialIcons />
    </div>
  );
};

export default Hero;