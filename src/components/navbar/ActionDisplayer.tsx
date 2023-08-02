"use client";
import { useState, useEffect } from 'react';
import styles from './ActionDisplayer.module.css';

interface ActionDisplayerProps {
  actions: string[];
}

const timer = 4000;

/**
 * ActionDisplayer component that displays random actions in a text animation.
 * @param {ActionDisplayerProps} props - The props for the ActionDisplayer component.
 * @returns {JSX.Element} The JSX element representing the ActionDisplayer.
 */

const ActionDisplayer: React.FC<ActionDisplayerProps> = ({ actions }) => {
  const [index, setIndex] = useState(0);
  const [randomAction, setRandomAction] = useState(actions[0]);

  /**
   * useEffect to update the index at regular intervals and rotate through actions.
   * @listens actions
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % actions.length);
    }, timer);

    return () => clearInterval(interval);
  }, [actions]);

  /**
   * useEffect to update the randomAction whenever the index or actions change.
   * @listens index
   * @listens actions
   */
  useEffect(() => {
    setRandomAction(actions[index]);
  }, [index, actions]);

  return (
    <div className={styles['action-displayer']}>
      <span key={randomAction} className={styles['text-animation']}>
        is {randomAction}
      </span>
    </div>
  );
};

export default ActionDisplayer;