"use client";
import Button from "@/components/button/Button";
import TechSlider from "@/components/hero/TechSlider";
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { techStack } from "@/lib/store";
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
      <div className={styles.wrapper}>
        <h1 className={styles.heroHeading}>
          <span className={styles.heroHeadingGray}>Front End</span> <span>Developer</span>
        </h1>
        <TechSlider techList={techStack} />
        <div className={styles.heroButtonContainer}>
          <Button
            label="About Me"
            href="/about"
            icon={BsFillArrowRightCircleFill}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;