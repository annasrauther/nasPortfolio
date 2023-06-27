import style from './Slide.module.css';

interface SlideProps {
  backgroundColor: string;
  children: React.ReactNode;
}

const Slide: React.FC<SlideProps> = ({ backgroundColor, children }) => {
  return (
    <div style={{ backgroundColor }} className={style.slide}>
      {children}
    </div>
  );
};

export default Slide;
