import HeroSection from "@/components/HeroPage";
import AboutSection from "@/components/AboutSection";
import Projects from "@/components/ProjectList";
import Contacts from "@/components/Contact";

import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#ffffff]">
      <div className="container mx-auto px-12 py-4" id="hero">
        <HeroSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contacts />
      </div>

      <footer className="text-center flex flex-col md:flex-row justify-between p-6 text-sm text-muted-foreground border-black mt-12 border-t-2 space-y-4 md:space-y-0 md:space-x-4">
        <span>© {new Date().getFullYear()} Charles.Dev</span>

        <div className="flex justify-center space-x-5">
          <Link href="https://github.com/chrlesdev" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">
            GitHub
          </Link>

          {/* Internal link using Next.js Link */}
          <Link href="/resume.pdf" target="_blank" className="underline flex h-fit hover:text-black">
            Resume
          </Link>

          <Link href="https://www.linkedin.com/in/muhamad-charles-cornelio-a53a75339/" target="_blank" rel="noopener noreferrer" className="underline hover:text-black">
            LinkedIn
          </Link>
        </div>
      </footer>
    </main>
  );
}
