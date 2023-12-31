import { poppins } from '@/lib/fonts';
import styles from './Hero.module.css';
import HeroSlider from '@/components/hero/HeroSlider';
import SocialIcons from './SocialIcons';
import { techStack } from '@/lib/data';
import HeroImage from './HeroImage';

/**
 * Hero Component
 *
 * This component represents the hero section of the application.
 * It displays the title, HeroSlider, and a button.
 *
 * @component
 * @returns {JSX.Element} The Hero component JSX element.
 */
const Hero: React.FC = () => {
  return (
    <section className={styles.hero__container} role="banner" aria-label="Hero Section">
      <HeroImage />
      <div className={styles.hero__wrapper}>
        <h1 className={`${styles.hero__heading} ${poppins.className}`} aria-label='Front End Developer'>Front End Developer</h1>
        <HeroSlider techList={techStack} />
      </div>
      <SocialIcons />
    </section>
  );
};

export default Hero;
