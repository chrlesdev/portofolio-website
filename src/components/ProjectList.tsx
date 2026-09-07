import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { supabase } from "@/lib/supabase/supabase";
import Image from "next/image";
import Link from "next/link";

interface Project {
  id: string;
  title: string;
  slug: string;
  description: string;
  cover_image: string;
  live_url?: string;
  github_url?: string;
  tags?: string[];
}

const blurPlaceholder =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNlMmU4ZjAiLz48L3N2Zz4=";

export default async function ProjectSection() {
  const { data: projects, error } = await supabase.from("Projects").select("*").order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching projects:", error.message);
    return null;
  }

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-slate-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-slate-900 mb-3 sm:mb-4 tracking-tight">Selected Works</h2>
          <div className="h-1.5 w-12 bg-emerald-500 rounded-full mb-4 sm:mb-6" />
          <p className="text-slate-500 text-sm sm:text-base max-w-lg px-2">A showcase of my recent development projects, focusing on performance, scalability, and user experience.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {projects?.map((project: Project, index: number) => {
            const isPriority = index < 2;

            return (
              <Link href={`/project/${project.slug}`} key={project.id} className="group outline-none flex">
                <Card className="relative w-full flex flex-col border-none bg-white rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(16,185,129,0.12)] group-hover:-translate-y-1.5">
                  <div className="p-3 sm:p-4 pb-0">
                    <div className="relative aspect-video w-full overflow-hidden rounded-xl sm:rounded-2xl bg-slate-100">
                      {project.cover_image && (
                        <Image
                          src={project.cover_image.trim()}
                          alt={project.title}
                          fill
                          priority={isPriority}
                          loading={isPriority ? "eager" : "lazy"}
                          placeholder="blur"
                          blurDataURL={blurPlaceholder}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col flex-1 p-5 sm:p-6 pt-4">
                    <CardHeader className="p-0 mb-2">
                      <CardTitle className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors line-clamp-1">{project.title}</CardTitle>
                    </CardHeader>

                    <CardContent className="p-0 flex-1">
                      <CardDescription className="text-slate-500 text-xs sm:text-sm leading-relaxed line-clamp-2 mb-4">{project.description}</CardDescription>

                      {project.tags && project.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {project.tags.slice(0, 3).map((tag, idx) => (
                            <span key={idx} className="px-2.5 py-1 text-[11px] font-medium text-slate-600 bg-slate-100 rounded-md">
                              {tag}
                            </span>
                          ))}
                          {project.tags.length > 3 && <span className="px-2 py-1 text-[11px] font-medium text-slate-400">+{project.tags.length - 3}</span>}
                        </div>
                      )}
                    </CardContent>

                    <CardFooter className="p-0 pt-2 mt-auto">
                      <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider">
                        <span className="relative">
                          View Details
                          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-emerald-500 transition-all duration-300 group-hover:w-full" />
                        </span>
                        <ArrowRight className="w-4 h-4 transform transition-transform group-hover:translate-x-1 text-emerald-500" />
                      </div>
                    </CardFooter>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
