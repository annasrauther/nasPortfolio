"use client";
import { useEffect, useState, useRef, useMemo } from 'react';
import styles from './Loader.module.css';

/**
 * Represents the props for the Loader component.
 */
interface LoaderProps {
  /**
   * The duration in milliseconds for the loader animation.
   */
  duration: number;
}

/**
 * Represents the Loader component that displays a loading animation.
 * @param {LoaderProps} props - The props for the Loader component.
 * @returns {JSX.Element} JSX.Element
 */
const Loader: React.FC<LoaderProps> = ({ duration }) => {
  const [counter, setCounter] = useState(0);
  const intervalRef = useRef<number | null>(null);

  // Memoize the counter value to avoid unnecessary re-computation on every render
  const memoizedCounter = useMemo(() => counter, [counter]);

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setCounter((prevCounter) => {
        if (prevCounter === 100) {
          clearInterval(intervalRef.current!);
          return prevCounter;
        }
        return prevCounter + 1;
      });
    }, duration);

    return () => clearInterval(intervalRef.current!);
  }, [duration]);

  return (
    <div className={styles['loading-wrapper']}>
      <div className={styles['counter']}>
        <h1>{memoizedCounter}%</h1>
      </div>
    </div>
  );
};

export default Loader;
