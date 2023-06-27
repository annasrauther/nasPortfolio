import Link from 'next/link'
import style from "./NeoButton.module.css";

interface NeoButtonProps {
    href: string;
    target?: string;
    text: string;
    showArrow?: boolean;
    hasBg?: boolean;
}

const NeoButton = ({
  href,
  target="",
  text,
  showArrow=false,
  hasBg=false
}:NeoButtonProps) => {
  return (
    <>
      <Link
        href={href}
        target={target}
        className={`${style['neo-button']} ${hasBg ? style['bg-blue'] : ""}`}>
        {text} { showArrow &&
          <span className="ml-2 text-2xl">&#8594;</span>
        }
      </Link>
    </>
  )
}

export default NeoButton