import Image from 'next/image'
import Link from "next/link";
import style from './page.module.css'

import {
  Hero,
} from "@/components";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
      </main>
    </>
  )
}