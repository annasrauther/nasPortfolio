"use client";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import style from "./Navbar.module.css";
import {
  MenuIcon,
  CloseIcon,
  Logo,
} from "@/components";
import NavbarItem from "./NavbarItem";

const navigationLinks = [
  { href: "/", title: "Home" },
  { href: "/projects", title: "Projects" },
  { href: "/skills", title: "Skills" },
];

const Navbar = () => {
  const path = usePathname();
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    window.addEventListener("mousedown", handleOutsideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      toggleSidebar();
    }
  }, [path]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    toggleSidebar();
  };

  return (
    <div className={`${style["navbar-wrapper"]} container`}>
      <Logo />
      {isOpen ? (
        <div className={style["close-icon"]} onClick={toggleSidebar}>
          <CloseIcon width={50} height={50} />
        </div>
      ) : (
        <div className={style["menu-icon"]} onClick={handleMenuClick}>
          <MenuIcon width={50} height={50} />
        </div>
      )}

      <div
        ref={sidebarRef}
        className={`${style.sidebar} ${isOpen ? style.active : ""}`}
      >
        <nav className={` ${style.navbar}`}>
          {navigationLinks.map((link) => (
            <NavbarItem
              key={link.href}
              href={link.href}
              title={link.title}
              path={path}
            />
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
