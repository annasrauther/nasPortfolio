import Link from "next/link";
import Image from "next/image";
import style from "./Logo.module.css";

const Logo = () => {
  return (
    <Link href="/" className={style.logo}>
      <Image
        src="/logo.png"
        alt="Nas Rauther Logo"
        width={75}
        height={75}
        priority={true}
      />
    </Link>
  );
};

export default Logo;
