import styles from './Loader.module.css';
import Image from 'next/image';

/**
 * Represents the Loader component that displays a loading svg.
 * @returns {JSX.Element} JSX.Element
 */
const Loader: React.FC = () => {
  return (
    <div className={styles.loading_wrapper}>
      <h1 className={styles.loading_text}>Loading...</h1>
      <Image
        className={styles.logo}
        src="/logo.png"
        width={75}
        height={75}
        alt="Logo"
      />
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
