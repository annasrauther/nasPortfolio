interface SlideWrapperProps {
    children: React.ReactNode;
}
const SlideWrapper = ({ children }:SlideWrapperProps) => {
  return (
    <div style={{position: "relative"}}>
      {children}
    </div>
  );
};

export default SlideWrapper;