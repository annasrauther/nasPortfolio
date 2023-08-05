import { FaGithub, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import styles from './Hero.module.css';

/**
 * SocialIcons Component
 *
 * This component represents the social icons section of the hero.
 * It displays links to social media profiles using corresponding icons.
 *
 * @component
 * @returns {JSX.Element} The SocialIcons component JSX element.
 */
const SocialIcons: React.FC = () => {
  return (
    <div className={styles.social__container}>
      <ul>
        {/* LinkedIn Icon */}
        <li>
          <a
            href="https://www.linkedin.com/in/al-annas-rauther-5b8a4a1b4/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={'2em'} color={'#0967c2'} />
          </a>
        </li>
        {/* GitHub Icon */}
        <li>
          <a
            href="https://github.com/YourGitHubUsername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
          >
            <FaGithub size={'2em'} color={'black'} />
          </a>
        </li>
        {/* WhatsApp Icon */}
        <li>
          <a
            href="https://api.whatsapp.com/send?phone=1234567890"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsappSquare size={'2em'} color={'#25d466'} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialIcons;
