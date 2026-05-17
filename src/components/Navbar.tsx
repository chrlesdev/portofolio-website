"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavbarPages = [
    { name: "Home", href: "/#hero" },
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/#projects" },
  ];

  return (
    <nav className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 px-6 py-4 ${isScrolled ? "top-2" : "top-0"}`}>
      <div
        className={`mx-auto max-w-7xl transition-all duration-500 rounded-2xl ${
          isScrolled ? "bg-white/70 dark:bg-slate-900/80 backdrop-blur-md shadow-lg border border-slate-200/50 dark:border-slate-800/50 px-6 py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-1">
            <span className="font-bold text-2xl tracking-tighter text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors">
              Charles<span className="text-emerald-500">.</span>Dev
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-2">
              {NavbarPages.map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>
                    <Button variant="ghost" className="text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 rounded-full px-5 transition-all">
                      {item.name}
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="h-10 w-[1px] bg-slate-200 dark:bg-slate-800 " />

            <Link href="/#contact">
              <Button className="bg-slate-900 dark:bg-emerald-600 hover:bg-emerald-600 dark:hover:bg-emerald-500 text-white rounded-full px-6 transition-all shadow-md">Contact Me</Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex items-center gap-4">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-xl border-slate-200 dark:border-slate-800 dark:bg-slate-900 shadow-sm">
                  <Menu className="h-5 w-5 text-slate-700 dark:text-slate-300" />
                </Button>
              </PopoverTrigger>
              <PopoverContent align="end" className="w-56 p-2 rounded-2xl mt-2 border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl">
                <div className="flex flex-col gap-1">
                  {NavbarPages.map((item, index) => (
                    <Link key={index} href={item.href}>
                      <Button variant="ghost" className="w-full justify-start text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 rounded-xl">
                        {item.name}
                      </Button>
                    </Link>
                  ))}
                  <hr className="my-1 border-slate-100 dark:border-slate-800" />
                  <Link href="/#contact">
                    <Button className="w-full justify-start bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl">Contact Me</Button>
                  </Link>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </nav>
  );
}
