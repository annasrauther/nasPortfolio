import Image from 'next/image'
import Link from "next/link";
import style from './page.module.css'

import {
  TextEffect,
  NeoButton,
  SlideWrapper,
  Slide,
} from "@/components";

const logo = "/logo.jpeg";
const profilePic = "/profile.webp";
const bird = "/bird-poly.png";

export default function Home() {
  return (
    <>
    <SlideWrapper>
      <Slide backgroundColor="white">
        <div className={style['hero-section']}>
          <div className={style['hero-section__col']}>
            <TextEffect
              text="Beyond the Pixels: Crafting Experiences with Code and Design"
              className={style['hero-section__title']}
            />
            <p className={style['hero-section__title']}>
              As a skilled full-stack developer, I am dedicated to turning
              ideas into innovative web applications. Explore my latest
              projects and articles, showcasing my expertise in React.js and
              web development.
            </p>
            <div className={style['hero-section__callout']}>
              <NeoButton href="/resume" text="Resume" hasBg={true} />
              <NeoButton href="/contact" text="Contact" />
              <Link
                href="/contact"
                target={"_blank"}
                className="ml-4 text-lg font-medium underline capitalize text-dark md:text-base"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className={style['hero-section__col']}>
            <Image
              src={logo}
              alt="Nas Rauther"
              className="w-full h-auto lg:hidden md:inline-block md:w-full"
              priority
              width={350}
              height={350}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
          </div>
        </div>

      </Slide>
      <Slide backgroundColor="orange">
        <div className="grid w-full grid-cols-2 gap-4">
          <div className="col-span-1">
          {/* <img className="rounded-lg shadow-xl" src="https://cdn.devdojo.com/images/december2020/dashboard-011.png" alt=""/> */}
          </div>
          <div className="col-span-1">
          <h3 className="mt-2 text-2xl sm:text-left md:text-4xl">Design Made Easy</h3>
              <p className="mt-5 text-lg text-gray-700 text md:text-left">Crafting your user experience has never been easier, with our intuitive drag'n drop interface you will be creating beatiful designs in no time.</p>
          </div>
        </div>
      </Slide>
    </SlideWrapper>
  </>
  )
}