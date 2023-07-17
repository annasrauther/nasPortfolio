import NeoButton from '../button/NeoButton'
import style from './Hero.module.css'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className={style.hero}>
      <div className={style.hero__content}>
      <h1 className={style.hero__header}>
        <span className={style.hero__title}>Nas</span>
        <span className={style.hero__subtitle}>Rauther</span>
        <span className={style.hero__tagline}>Crafting User-friendly interfaces</span>
        <NeoButton
          href="/about"
          text="About Me"
          hasBg={true}
          block={true}
        ></NeoButton>
      </h1>
        <Image
          src="/hero-bg.svg"
          alt="Nas Rauther Hero Image"
          width={1000}
          height={1000}
        />
      </div>
    </section>
  )
}

export default Hero