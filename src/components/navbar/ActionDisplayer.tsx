"use client";
import { useState, useEffect } from 'react';
import styles from './ActionDisplayer.module.css';

/**
 * The time interval (in milliseconds) used to update the random action in the ActionDisplayer component.
 * @constant {number}
 */
const timer = 3000;

/**
 * Represents the props for the ActionDisplayer component.
 * @interface ActionDisplayerProps
 * @property {string[]} actions - An array of strings representing the list of actions to be displayed.
 */
interface ActionDisplayerProps {
  actions: string[];
}

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
      <span key={randomAction} className={styles['action-displayer__text']}>
        is {randomAction}
      </span>
    </div>
  );
};

export default ActionDisplayer;
