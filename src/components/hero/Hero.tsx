"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
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
  const leftImageRef = useRef<HTMLImageElement>(null);
  const rightImageRef = useRef<HTMLImageElement>(null);

  const animateRotation = () => {
    const mouseY = lastMouseY;
    const maxRotation = 15; // Adjust this value to control the maximum rotation angle.

    const leftImage = leftImageRef.current;
    if (leftImage) {
      const imageRect = leftImage.getBoundingClientRect();
      const leftRotateY = ((mouseY - imageRect.top) / imageRect.height - 0.5) * maxRotation;
      leftImage.style.transform = `rotate(${leftRotateY}deg)`;
    }

    const rightImage = rightImageRef.current;
    if (rightImage) {
      const imageRect = rightImage.getBoundingClientRect();
      const rightRotateY = ((mouseY - imageRect.top) / imageRect.height - 0.5) * maxRotation;
      rightImage.style.transform = `rotate(${-rightRotateY}deg)`; // Reverse the rotation for the right image
    }

    requestAnimationFrame(animateRotation);
  };

  let lastMouseY = 0;
  const handleMouseMove = (e: MouseEvent) => {
    lastMouseY = e.clientY;
  };

  useEffect(() => {
    requestAnimationFrame(animateRotation);
    document.body.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.body.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);


  return (
    <div className={styles.heroContainer}>
      <div className={styles.imageWrapper}>
        <Image
          ref={leftImageRef}
          src={'/homepage_head.svg'}
          alt={'Hero Image'}
          width={500}
          height={500}
          className={styles['hero-image']}
        />
      </div>
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