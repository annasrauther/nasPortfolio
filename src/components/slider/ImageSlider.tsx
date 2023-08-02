"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

interface ImageSliderProps {
  images: string[];
}

const timer = 4000;

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
    <>
      {images.map((imageUrl, index) => (
        <div
          key={index}
          style={{
            width: "100%",
            height: "100%",
            display: index === currentIndex && isVisible ? 'block' : 'none',
          }}
        >
          <Image
            width={400}
            height={400}
            src={imageUrl}
            alt="Hero Image"
            style={{
              margin: 'auto'
            }}
          />
        </div>
      ))}
    </>
  );
};

export default ImageSlider;
