"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { allProjects } from "@/lib/projectDetails/main";
import { ArrowRight } from "lucide-react"; // Import for a cleaner look

export default function ProjectLists() {
  return (
    <section id="projects" className="py-20 bg-slate-50/30">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 tracking-tight">Selected Works</h2>
          <div className="h-1.5 w-12 bg-emerald-500 rounded-full mb-6"></div>
          <p className="text-slate-500 max-w-lg">A showcase of my recent development projects, focusing on performance, scalability, and user experience.</p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {allProjects.map((project, index) => (
            <Link href={`/project/${project.slug}`} key={index} className="group outline-none">
              <Card className="relative h-full border-none bg-white rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(16,185,129,0.1)] group-hover:-translate-y-2">
                {/* Image Section - Using a container to create a 'frame' effect */}
                <div className="p-4 pb-0">
                  <div className="relative aspect-video overflow-hidden rounded-2xl bg-slate-100">
                    <Image src={project.screenshots[0]?.image || "/placeholder.jpg"} alt={project.overview.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-emerald-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </div>

                {/* Content Section */}
                <CardHeader className="px-7 pt-6 pb-2">
                  <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">{project.overview.title}</CardTitle>
                </CardHeader>

                <CardContent className="px-7 py-0">
                  <CardDescription className="text-slate-500 text-[15px] leading-relaxed line-clamp-2">{project.overview.shortDescription}</CardDescription>
                </CardContent>

                <CardFooter className="px-7 pt-6 pb-8">
                  <div className="flex items-center gap-2 text-sm font-bold text-slate-900 uppercase tracking-wider">
                    <span className="relative">
                      View Details
                      <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-emerald-500 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                    <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1 text-emerald-500" />
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
