"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative bg-emerald-50 dark:bg-emerald-950/20 rounded-[3rem] p-8 overflow-hidden border border-emerald-200/50 dark:border-emerald-900/30 shadow-2xl shadow-emerald-500/10">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          <div className="space-y-2">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-slate-500">Available for projects</h2>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900">
              Hi, I&apos;m <span className="text-black">Charles.</span>
            </h1>
            <div className="h-12 sm:h-16">
              {" "}
              <TypeAnimation
                sequence={["Web Developer", 2000, "Next.js Enthusiast", 2000, "Fullstack Engineer", 2000]}
                wrapper="span"
                className="text-2xl sm:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500"
                speed={50}
                repeat={Infinity}
              />
            </div>
          </div>

          <p className="text-slate-600 text-lg sm:text-xl max-w-2xl leading-relaxed">
            I craft high-performance, responsive web applications using
            <span className="text-slate-900 font-medium"> Next.js</span>,<span className="text-slate-900 font-medium"> Express</span>, and
            <span className="text-slate-900 font-medium"> MySQL</span>. Focused on turning complex problems into elegant digital solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="https://www.linkedin.com/in/muhamad-charles-cornelio-a53a75339/" target="_blank">
              <Button size="lg" className="w-full sm:w-auto px-8 bg-slate-900 hover:bg-slate-800 text-white transition-all">
                Hire Me
              </Button>
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 relative flex justify-center items-center">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-emerald-200 rounded-full blur-[80px] opacity-50" />

          <div className="relative z-10 bg-white p-4 rounded-[2rem] shadow-2xl border border-slate-100 transition-transform hover:scale-[1.02] duration-300">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-100 lg:w-[380px] lg:h-[380px] w-[280px] h-[280px] rounded-[1.5rem] relative overflow-hidden">
              <Image src="/Hello.svg" alt="Charles illustration" fill className="object-contain p-8" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
