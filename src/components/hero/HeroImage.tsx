"use client";
import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import styles from './Hero.module.css';

/**
 * HeroImage Component
 *
 * This component represents the hero image section of the hero.
 * It handles the rotation animation of the hero image on mouse movement.
 *
 * @component
 * @returns {JSX.Element} The HeroImage component JSX element.
 */
const HeroImage: React.FC = () => {
  const heroImageRef = useRef<HTMLImageElement>(null);
  const lastMouseYRef = useRef<number>(0); // Store mutable value in a useRef

  /**
   * Animate the rotation of the hero image based on mouse movement.
   */
  const animateRotation = useCallback(() => {
    const heroImage = heroImageRef.current;
    if (!heroImage) return;

    const mouseY = lastMouseYRef.current; // Access the mutable value from useRef
    const maxRotation = 15;

    const imageRect = heroImage.getBoundingClientRect();
    const leftRotateY = ((mouseY - imageRect.top) / imageRect.height - 0.5) * maxRotation;
    heroImage.style.transform = `rotate(${leftRotateY}deg)`;

    requestAnimationFrame(animateRotation);
  }, []); // No need to include lastMouseYRef.current in the dependency array

  /**
   * Handle mouse movement to update the Y position.
   * @param {MouseEvent} e - The mouse event.
   */
  const handleMouseMove = useCallback((e: MouseEvent) => {
    lastMouseYRef.current = e.clientY; // Update the mutable value in the useRef
  }, []); // Empty dependency array, memoizing the function

  useEffect(() => {
    const isMobile = window.innerWidth <= 767;

    if (!isMobile) {
      requestAnimationFrame(animateRotation);
      document.body.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      if (!isMobile) {
        document.body.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [animateRotation, handleMouseMove]);

  return (
    <>
      <div className={styles['hero-image__wrapper']} aria-hidden="true"></div>
      <Image
        ref={heroImageRef}
        src={'/homepage_head.svg'}
        alt={'Front End Developer - Hero Image'}
        aria-label="Front End Developer - Hero Image"
        width={500}
        height={500}
        className={styles['hero-image']}
      />
    </>
  );
}

export default HeroImage;
