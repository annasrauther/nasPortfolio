import Loader from "@/components/effects/Loader"

/**
 * Loading Page
 *
 * This page displays a loading effect using the Loader component.
 *
 * @returns {JSX.Element} The Loading page JSX element.
 */

const Loading: React.FC = () => {
  return (
    <Loader duration={100} />
  );
};

export default Loading;
