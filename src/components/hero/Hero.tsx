"use client";
import Button from "@/components/button/Button";
import TechSlider from "@/components/hero/TechSlider";
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import { heroImages, techStack } from "@/lib/data";
import styles from './Hero.module.css';
import ImageSlider from "../slider/ImageSlider";

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
        <h1 className={styles.heroHeading}>Front End Developer</h1>
        <TechSlider techList={techStack} />
        <div className={styles.heroButtonContainer}>
          <Button
            label="Find out more"
            href="/about"
            icon={BsFillArrowRightCircleFill}
          />
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <ImageSlider
          images={heroImages}
        />
      </div>
    </div>
  );
};

export default Hero;