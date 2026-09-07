import HeroSection from "@/components/HeroPage";
import AboutSection from "@/components/AboutSection";
import Projects from "@/components/ProjectList";
import Contacts from "@/components/Contact";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-white dark:bg-[#020617] text-slate-900 dark:text-slate-100 transition-colors duration-500">
      <section id="hero" className="container mx-auto px-6 py-10 lg:py-20">
        <HeroSection />
      </section>

      <section id="about" className="bg-slate-50/80 border-y border-slate-100">
        <AboutSection />
      </section>

      <section id="projects" className="py-10">
        <Projects />
      </section>

      <section id="contact" className="bg-slate-50/50 py-20">
        <Contacts />
      </section>

      <footer className="bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col items-center md:items-start gap-2">
              <span className="font-bold text-xl tracking-tighter">
                Charles<span className="text-emerald-500">.</span>Dev
              </span>
              <p className="text-slate-500 text-sm">Built with Next.js, Tailwind, and Passion.</p>
            </div>

            <div className="flex items-center gap-8">
              <Link href="https://github.com/chrlesdev" target="_blank" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">
                GitHub
              </Link>
              <Link href="https://www.linkedin.com/in/muhamad-charles-cornelio-a53a75339/" target="_blank" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">
                LinkedIn
              </Link>
              <Link href="/resume.pdf" target="_blank" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">
                Resume
              </Link>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-50 text-center">
            <p className="text-xs text-slate-400">© {new Date().getFullYear()} Muhamad Charles Cornelio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
