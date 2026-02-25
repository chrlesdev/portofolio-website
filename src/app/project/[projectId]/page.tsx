import { allProjects } from "@/lib/projectDetails/main";
import { notFound } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  params: Promise<{
    projectId: string;
  }>;
};

export default async function ProjectDetailPage({ params }: Props) {
  const { projectId } = await params;
  const project = allProjects.find((p) => p.slug.toLowerCase() === projectId.toLowerCase());

  if (!project) return notFound();

  return (
    <section className="bg-white min-h-screen">
      <div className="bg-slate-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <Link href="/#projects" className="flex items-center gap-2 text-slate-500 hover:text-emerald-600 transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to projects
          </Link>

          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="space-y-4 max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">{project.overview.title}</h1>
              <p className="text-xl text-slate-600 leading-relaxed">{project.overview.shortDescription}</p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {project.links.demo && (
                <Link href={project.links.demo} target="_blank">
                  <Button className="bg-emerald-600 hover:bg-emerald-700 rounded-full px-6 shadow-lg shadow-emerald-200">
                    Live Demo <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              )}
              <Link href={project.links.github} target="_blank">
                <Button variant="outline" className="rounded-full px-6 border-slate-200 hover:bg-slate-100">
                  Source Code <Github className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-16">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="h-8 w-1.5 bg-emerald-500 rounded-full"></span>
                About the Project
              </h2>
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-600 text-lg leading-relaxed whitespace-pre-line">{project.description}</p>
              </div>
            </div>

            {project.goals && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                  <span className="h-8 w-1.5 bg-emerald-500 rounded-full"></span>
                  Key Features & Implementation
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.goals.map((goal, index) => (
                    <div key={index} className="flex gap-3 p-5 bg-slate-50 rounded-2xl border border-slate-100 items-start">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <p className="text-slate-700 text-sm leading-relaxed">{goal}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Visual Showcase</h2>
              <Carousel opts={{ align: "start", loop: true }} className="w-full relative">
                <CarouselContent className="-ml-4">
                  {project.screenshots.map((item, idx) => (
                    <CarouselItem key={idx} className="pl-4 md:basis-1/2">
                      <Card className="overflow-hidden border-slate-100 shadow-md group h-full">
                        <div className="relative aspect-video">
                          <Image src={item.image} alt={item.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                        </div>
                        <CardContent className="p-5 bg-white">
                          <h3 className="font-bold text-slate-900">{item.title}</h3>
                          <p className="text-sm text-slate-500 mt-1">{item.description}</p>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex justify-end gap-2 mt-4">
                  <CarouselPrevious className="static translate-y-0" />
                  <CarouselNext className="static translate-y-0" />
                </div>
              </Carousel>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8 bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-wider text-[11px]">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <Badge key={idx} className="bg-white border-slate-200 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors py-1.5 px-3 text-xs font-medium">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase tracking-wider text-[11px]">Role</h3>
                <p className="text-slate-600 text-sm">Fullstack Developer</p>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase tracking-wider text-[11px]">Category</h3>
                <p className="text-slate-600 text-sm capitalize">{project.category}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
