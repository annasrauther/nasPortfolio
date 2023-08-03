import HeroTech from '@/components/hero/HeroTech';
import styles from './HeroTech.module.css';

interface TechItem {
  name: string;
  icon: any;
  color: string;
}

interface TechSliderProps {
  techList: TechItem[];
}

/**
 * TechSlider Component
 *
 * This component represents a slider that displays a technical skills from the given technology list.
 *
 * @param {TechSliderProps} props - The component props.
 * @returns {JSX.Element} The TechSlider component JSX element.
 */
const TechSlider: React.FC<TechSliderProps> = ({ techList }) => {
  return (
    <>
      <h3 className={styles.hero_sub_title}>Experience in building the web and working with technologies like</h3>
      <div className={styles.heroTech}>
        {
          techList.map((tech, index) => {
            return (
              <HeroTech key={index} tech={tech} />
            )
          }
          )
        }
      </div>
    </>
  );
};

export default TechSlider;
