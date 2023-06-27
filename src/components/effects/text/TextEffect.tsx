"use client";
import { useLayoutEffect } from "react";
import style from "./TextEffect.module.css";
import { Black_Han_Sans } from "next/font/google";

interface TextEffectProps {
  text: string;
  className?: string;
}

const blackHanFont = Black_Han_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-blackHanFont",
});

type Color = "red" | "blue" | "green" | "yellow" | "voilet" | "orange" | "pink" | "brown";

type Colors = {
  [key in Color]: string[];
};

const colors: Colors = {
  red: ['#FF0000', '#FF6666', '#FF3333', '#FF9999'],
  blue: ['#0000FF', '#6699FF', '#3333FF', '#99CCFF'],
  green: ['#00FF00', '#66FF66', '#33FF33', '#99FF99'],
  yellow: ['#FFFF00', '#FFFF66', '#FFFF33', '#FFFF99'],
  voilet: ['#6600FF', '#9966FF', '#6633FF', '#9999FF'],
  orange: ['#FF6600', '#FF9933', '#FF9900', '#FFCC66'],
  pink: ['#FF0066', '#FF6699', '#FF3366', '#FF99CC'],
  brown: ['#996633', '#CC9966', '#CC9933', '#FFCC99'],
};

function getRandomColorShade(): string {
  const colorKeys = Object.keys(colors) as Color[];
  const randomColorKey = colorKeys[Math.floor(Math.random() * colorKeys.length)];
  const randomColorShades = colors[randomColorKey];
  const randomShade = randomColorShades[Math.floor(Math.random() * randomColorShades.length)];
  return randomShade;
}

const TextEffect = ({ text, className = "" }: TextEffectProps) => {
  useLayoutEffect(() => {
    const updateRandomColor = () => {
      const words = document.querySelectorAll(".random-color-word");
      words.forEach((word) => {
        const spanElement = word as HTMLElement;
        spanElement.style.textShadow = `1px 1px ${getRandomColorShade()}`;
      });
    };

    updateRandomColor();
  }, []);

  return (
    <div className={`${blackHanFont.className} ${style['text-wrapper']}`}>
      <h1
        className={`${className} ${style['text-wrapper__title']}`}
      >
        {text.split(" ").map((word, index) => (
          <span
            key={word + "-" + index}
            className="random-color-word"
          >
            {word}&nbsp;
          </span>
        ))}
      </h1>
    </div>
  );
};

export default TextEffect;
