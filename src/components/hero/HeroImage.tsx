"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from './Hero.module.css';

const HeroImage: React.FC = () => {
  const heroImageRef = useRef<HTMLImageElement>(null);

  const animateRotation = () => {
    const mouseY = lastMouseY;
    const maxRotation = 15;

    const heroImage = heroImageRef.current;
    if (heroImage) {
      const imageRect = heroImage.getBoundingClientRect();
      const leftRotateY = ((mouseY - imageRect.top) / imageRect.height - 0.5) * maxRotation;
      heroImage.style.transform = `rotate(${leftRotateY}deg)`;
    }

    requestAnimationFrame(animateRotation);
  };

  let lastMouseY = 0;
  const handleMouseMove = (e: MouseEvent) => {
    lastMouseY = e.clientY;
  };

  useEffect(() => {
    const isMobile = window.innerWidth <= 767;

    if (!isMobile) {
      // Add mouse event listener and start animation only if not mobile
      requestAnimationFrame(animateRotation);
      document.body.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      // Clean up the mouse event listener if not mobile
      if (!isMobile) {
        document.body.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, []);

  return (
    <>
      <div className={styles.imageWrapper}></div>
      <Image
        ref={heroImageRef}
        src={'/homepage_head.svg'}
        alt={'Hero Image'}
        width={500}
        height={500}
        className={styles['hero-image']}
      />
    </>
  );
}

export default HeroImage;