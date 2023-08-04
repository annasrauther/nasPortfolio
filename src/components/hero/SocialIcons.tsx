import { FaGithub, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import styles from './Hero.module.css';

const SocialIcons: React.FC = () => {
  return (
    <div className={styles.socialIcons}>
      <ul>
        <li>
          <a href="https://www.linkedin.com/in/al-annas-rauther-5b8a4a1b4/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={'2em'} color={'#0967c2'} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/al-annas-rauther-5b8a4a1b4/" target="_blank" rel="noopener noreferrer">
            <FaGithub size={'2em'} color={'black'} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/al-annas-rauther-5b8a4a1b4/" target="_blank" rel="noopener noreferrer">
            <FaWhatsappSquare size={'2em'} color={'#25d466'} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialIcons;