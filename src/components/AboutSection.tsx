"use client";

import Image from "next/image";

export default function AboutSection() {
  const skills = [
    { name: "Next.js", icon: "/nextjs.svg" },
    { name: "React", icon: "/react.svg" },
    { name: "Node.js", icon: "/Node.js.svg" },
    { name: "Express", icon: "/Express.svg" },
    { name: "MySQL", icon: "/MySQL.svg" },
    { name: "Prisma", icon: "/prisma.svg" },
  ];

  return (
    <section className="px-4 sm:px-6 py-20 bg-slate-50/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <div className="h-1 w-20 bg-emerald-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* 1. Illustration Box (Spans 7 cols) */}
          <div className="md:col-span-7 bg-white border border-slate-200 p-8 rounded-3xl shadow-sm flex items-center justify-center group hover:border-emerald-200 transition-colors">
            <div className="relative w-full h-48 md:h-64 transition-transform duration-500 group-hover:scale-105">
              <Image src="/about.svg" fill alt="Working illustration" className="object-contain" />
            </div>
          </div>

          {/* 2. Skills Box (Spans 5 cols) */}
          <div className="md:col-span-5 bg-white border border-slate-200 p-8 rounded-3xl shadow-sm flex flex-col">
            <h4 className="font-bold text-xl mb-6 flex items-center gap-2">
              <span className="text-emerald-500">🧠</span> Tech Stack
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill) => (
                <div key={skill.name} className="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="relative w-8 h-8">
                    <Image src={skill.icon} alt={skill.name} fill className="object-contain" />
                  </div>
                  <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="md:col-span-5 bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100 p-8 rounded-3xl shadow-sm">
            <h4 className="font-bold text-xl mb-6 flex items-center gap-2">
              <span className="text-emerald-500">🎓</span> Education
            </h4>
            <div className="space-y-6">
              <div className="relative pl-6 border-l-2 border-emerald-200">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-emerald-500 rounded-full border-4 border-white"></div>
                <h5 className="font-bold text-slate-800 leading-none">Purwadhika</h5>
                <p className="text-sm text-emerald-700 font-medium mb-1">Fullstack Web Development</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider">Bootcamp</p>
              </div>
              <div className="relative pl-6 border-l-2 border-emerald-200">
                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-emerald-300 rounded-full border-4 border-white"></div>
                <h5 className="font-bold text-slate-800 leading-none">Smas Budi Luhur</h5>
                <p className="text-sm text-slate-600">High School Graduate</p>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 bg-slate-900 p-8 rounded-3xl shadow-xl text-white flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4 text-emerald-400">👋 Hey, I&apos;m Charles</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              A passionate fullstack developer focused on building <span className="text-white font-medium underline decoration-emerald-500 underline-offset-4">clean and scalable</span> apps. I specialize in bridging the gap between complex
              backend logic and intuitive frontend design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
