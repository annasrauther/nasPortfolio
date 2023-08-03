import styles from './Loader.module.css';
import Image from 'next/image';

/**
 * Represents the Loader component that displays a loading svg.
 * @returns {JSX.Element} JSX.Element
 */
const Loader: React.FC = () => {
  return (
    <div className={styles.loading_wrapper}>
      <Image
        src="/loader.svg"
        width={100}
        height={100}
        alt="Loader"
      />
    </div>
  );
};

export default Loader;
