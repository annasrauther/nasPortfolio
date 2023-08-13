import { FaGithub, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
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
        {/* Email Icon */}
        <li>
          <a
            href="mailto:annasrauther95@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <AiOutlineMail size={'2em'} color={'#d44638'} />
          </a>
        </li>

        {/* LinkedIn Icon */}
        <li>
          <a
            href="https://www.linkedin.com/in/annasrauther95/"
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
            href="https://github.com/annasrauther"
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
            href="https://api.whatsapp.com/send?phone=8097896998"
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
