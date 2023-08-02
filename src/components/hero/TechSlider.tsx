"use client";
import { useEffect, useState } from 'react';
import HeroTech from '@/components/hero/HeroTech';

interface TechItem {
  name: string;
  icon: any;
  color: string;
}

interface TechSliderProps {
  techList: TechItem[];
}

const timer = 4000;

/**
 * TechSlider Component
 *
 * This component represents a slider that displays a technical skills from the given technology list.
 *
 * @param {TechSliderProps} props - The component props.
 * @returns {JSX.Element} The TechSlider component JSX element.
 */
const TechSlider: React.FC<TechSliderProps> = ({ techList }) => {
  const [currentTechIndex, setCurrentTechIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTechIndex((prevIndex) => (prevIndex + 1) % techList.length);
    }, timer);

    return () => clearInterval(interval);
  }, [techList]);

  const currentTech = techList[currentTechIndex];

  return (
    <HeroTech tech={currentTech} />
  );
};

export default TechSlider;
