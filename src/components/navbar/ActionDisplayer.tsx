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
  const [isMobile, setIsMobile] = useState(false);

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

  /**
   * useEffect to detect window resize and determine if it's a mobile view.
   */
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);

    /* Call the handleResize function immediately to set the initial value. */
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  /**
   * If it's a mobile view, return null (don't render the action displayer).
   */
  if (isMobile) {
    return null;
  }

  return (
    <div className={styles['action-displayer']}>
      <span key={randomAction} className={styles['text-animation']}>
        is {randomAction}
      </span>
    </div>
  );
};

export default ActionDisplayer;