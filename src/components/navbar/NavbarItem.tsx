"use client";
import Link from "next/link";
import style from "./NavbarItem.module.css";

interface NavbarItemProps {
    href: string;
    title: string;
    className?: string;
    path: string;
}

const NavbarItem = ({ href, title, className = "", path }: NavbarItemProps) => {  
    return (
      <Link className={`${className} ${style['navbar-item']} ${path === href ? style.active : ""}`} href={href}>
          {title}
      </Link>
    );
  };

export default NavbarItem