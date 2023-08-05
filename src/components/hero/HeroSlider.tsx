import HeroTech from '@/components/hero/HeroTech';
import styles from './HeroTech.module.css';

/**
 * Represents a single technical skill item.
 * @interface TechItem
 * @property {string} name - The name of the technology.
 * @property {any} icon - The icon representing the technology.
 * @property {string} color - The color associated with the technology.
 */
interface TechItem {
  name: string;
  icon: any;
  color: string;
}

/**
 * Props for the HeroSlider component.
 * @interface HeroSliderProps
 * @property {TechItem[]} techList - The list of technical skills to display in the slider.
 */
interface HeroSliderProps {
  techList: TechItem[];
}

/**
 * HeroSlider Component
 *
 * This component represents a slider that displays technical skills from the given technology list.
 *
 * @component
 * @param {HeroSliderProps} props - The component props.
 * @returns {JSX.Element} The HeroSlider component JSX element.
 */
const HeroSlider: React.FC<HeroSliderProps> = ({ techList }) => {
  return (
    <>
      <h3 className={styles.hero__subtitle}>Experience in building the web and working with technologies like</h3>
      <div className={styles.hero__tech}>
        {
          techList.map((tech, index) => (
            <HeroTech key={index} tech={tech} />
          ))
        }
      </div>
    </>
  );
};

export default HeroSlider;
