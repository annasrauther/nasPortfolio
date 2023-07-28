"use client";
import { useState, useEffect } from "react";
import styles from './ImageSlider.module.css';

interface ImageSliderProps {
  images: string[];
}

const timer = 3000;

/**
 * ImageSlider component that displays a slider of images with fade-in/fade-out transitions.
 * @param {ImageSliderProps} props - The props for the ImageSlider component.
 * @returns {JSX.Element} The JSX element representing the ImageSlider.
 */
const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  /**
   * useEffect to start the image slider with automatic transitions.
   * @listens images
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsVisible(true);
      }, 50);
    }, timer);

    return () => {
      clearInterval(interval);
    };
  }, [images]);

  return (
    <div
      className={styles.imageSlider}
      style={{
        width: "clamp(200px, 100%, 500px)",
        minHeight: "300px",
        overflow: "hidden",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {images.map((imageUrl, index) => (
        <div
          key={index}
          style={{
            width: "100%",
            height: "100%",
            opacity: index === currentIndex && isVisible ? 1 : 0,
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "contain",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            transition: "opacity 0.5s ease-in-out",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
