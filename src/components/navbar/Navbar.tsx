"use client";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import style from "./Navbar.module.css";
import {
  MenuIcon,
  CloseIcon,
  TwitterIcon,
  GithubIcon,
  LinkedInIcon,
  Logo,
} from "@/components";
import NavbarItem from "./NavbarItem";
import { Bowlby_One } from "next/font/google";

const bolby = Bowlby_One({
  subsets: ["latin"],
  weight: "400",
});

const navigationLinks = [
  { href: "/", title: "Home" },
  { href: "/about", title: "About" },
  { href: "/projects", title: "Projects" },
  { href: "/resume", title: "Resume" },
  { href: "/contact", title: "Contact" },
];

const socialLinks = [
  { href: "https://twitter.com", title: "Twitter", icon: <TwitterIcon /> },
  { href: "https://github.com", title: "Github", icon: <GithubIcon /> },
  { href: "https://linkedin.com", title: "LinkedIn", icon: <LinkedInIcon /> },
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
    <>
      <div className={style["navbar-wrapper"]}>
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
          <nav className={` ${style.navbar} ${bolby.className}`}>
            {navigationLinks.map((link) => (
              <NavbarItem
                key={link.href}
                href={link.href}
                title={link.title}
                path={path}
              />
            ))}
          </nav>
          <hr style={{ margin: "10px 0 25px" }} />
          <nav className={style["social-links"]}>
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-links__item"
              >
                {link.icon}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
