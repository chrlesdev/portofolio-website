"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useState, useEffect } from "react";
import { Menu } from "lucide-react"; // Install lucide-react if you haven't

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
    <nav
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 px-6 py-4 ${
        isScrolled
          ? "top-2" // Moves slightly down when scrolling for a floating effect
          : "top-0"
      }`}
    >
      <div className={`mx-auto max-w-7xl transition-all duration-500 rounded-2xl ${isScrolled ? "bg-white/70 backdrop-blur-md shadow-lg border border-slate-200/50 px-6 py-2" : "bg-transparent py-4"}`}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-1">
            <span className="font-bold text-2xl tracking-tighter text-slate-900 group-hover:text-emerald-600 transition-colors">
              Charles<span className="text-emerald-500">.</span>Dev
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-2">
              {NavbarPages.map((item, index) => (
                <li key={index}>
                  <Link href={item.href}>
                    <Button variant="ghost" className="text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-full px-5 transition-all">
                      {item.name}
                    </Button>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="h-6 w-[1px] bg-slate-200 mx-2" />
            <Link href="/#contact">
              <Button className="bg-slate-900 hover:bg-emerald-600 text-white rounded-full px-6 transition-all shadow-md hover:shadow-emerald-200">Contact Me</Button>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-xl border-slate-200 shadow-sm">
                  <Menu className="h-5 w-5 text-slate-700" />
                </Button>
              </PopoverTrigger>
              <PopoverContent align="end" className="w-56 p-2 rounded-2xl mt-2 border-slate-100 shadow-xl">
                <div className="flex flex-col gap-1">
                  {NavbarPages.map((item, index) => (
                    <Link key={index} href={item.href}>
                      <Button variant="ghost" className="w-full justify-start text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl">
                        {item.name}
                      </Button>
                    </Link>
                  ))}
                  <hr className="my-1 border-slate-100" />
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
