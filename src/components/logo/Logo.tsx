import Link from "next/link";
import Image from "next/image";
import style from "./Logo.module.css";

const Logo = () => {
  return (
    <Link href="/" className={style.logo}>
      <Image
        src="/logo.jpeg"
        alt="Nas Rauther Logo"
        width={65}
        height={65}
        priority={true}
      />
    </Link>
  );
};

export default Logo;
