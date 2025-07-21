"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 my-4">
        <div className="col-span-7 place-self-center place-items-center grid lg:place-items-start text-center sm:text-left">
          <h1 className="max-w-2xl mb-4 sm:text-5xl lg:text-6xl text-4xl font-extrabold leading-tight text-black">
            <span className="block text-transparent bg-clip-text bg-gradient-to-br from-black via-slate-500 to-black">Hi, I&apos;m Muhamad Charles Cornelio</span>
          </h1>
          <TypeAnimation sequence={["Web Developer", 2000, 2000, "Next.js Enthusiast", 2000]} wrapper="p" className="text-muted-foreground text-base sm:text-lg lg:text-xl max-w-xl mb-6" speed={50} repeat={Infinity} />

          <p className="text-muted-foreground text-base sm:text-lg lg:text-xl max-w-xl mb-6">
            A fullstack web developer crafting modern, responsive, and scalable web apps using technologies like <strong>Next.js</strong>, <strong>Express</strong>, and <strong>MySQL</strong>.
          </p>

          <div className="flex gap-4 mt-6 flex-wrap">
            <Link href={"https://www.linkedin.com/in/muhamad-charles-cornelio-a53a75339/"} target="_blank">
              <Button variant={"outline"}>Hire me</Button>
            </Link>
            <Link href={"/resume.pdf"} target="_blank">
              <Button>View CV</Button>
            </Link>
          </div>
        </div>

        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="bg-gradient-to-br from-[#c0ffe3] via-[#abf7b6] to-[#e0f7ec] lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] rounded-3xl relative">
            <Image src={"/Hello.svg"} alt="hello image" height={300} width={300} className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
          </div>
        </div>
      </div>
    </section>
  );
}
