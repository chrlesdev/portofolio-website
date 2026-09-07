import { supabase } from "@/lib/supabase/supabase";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Github, CheckCircle2 } from "lucide-react";

interface PageProps {
  params: Promise<{
    projectId: string;
  }>;
}

// Low-quality placeholder blur string for dynamic remote images
const blurPlaceholder =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMSAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNlMmU4ZjAiLz48L3N2Zz4=";

export default async function ProjectDetailPage({ params }: PageProps) {
  const { projectId } = await params;
  const decodedParam = decodeURIComponent(projectId);

  const { data: project, error } = await supabase.from("Projects").select("*").or(`slug.eq."${decodedParam}",title.eq."${decodedParam}"`).maybeSingle();

  if (error || !project) {
    notFound();
  }

  const tagsArray: string[] = Array.isArray(project.tags) ? project.tags : typeof project.tags === "string" ? project.tags.split(",").map((t: string) => t.trim()) : [];

  const goalsArray: string[] = Array.isArray(project.Goals) ? project.Goals : Array.isArray(project.goals) ? project.goals : [];

  const galleryImages: string[] = Array.isArray(project.gallery_images) ? project.gallery_images : [];

  const mainImage = galleryImages[0] || project.image_url;
  const secondaryImages = galleryImages.slice(1);

  return (
    <section className="bg-white min-h-screen">
      <div className="bg-slate-50 border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-emerald-600 mb-8 transition-colors group">
            <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
            Back to projects
          </Link>

          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="space-y-4 max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight">{project.title || project.slug}</h1>
              <p className="text-xl text-slate-600 leading-relaxed">{project.short_description || project.overview?.shortDescription}</p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {project.live_url && (
                <Link href={project.live_url} target="_blank">
                  <Button className="bg-emerald-600 hover:bg-emerald-700 rounded-full px-6 shadow-lg shadow-emerald-200">
                    Live Demo <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              )}
              {project.github_url && (
                <Link href={project.github_url} target="_blank">
                  <Button variant="outline" className="rounded-full px-6 border-slate-200 hover:bg-slate-100">
                    Source Code <Github className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-16">
            {mainImage && (
              <div className="p-3 bg-slate-50 rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <div className="relative aspect-video overflow-hidden rounded-2xl bg-slate-100">
                  <Image src={mainImage} alt={project.title || "Project preview"} fill priority placeholder="blur" blurDataURL={blurPlaceholder} className="object-cover" />
                </div>
              </div>
            )}

            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span className="h-8 w-1.5 bg-emerald-500 rounded-full" />
                About the Project
              </h2>
              <div className="prose prose-slate max-w-none">
                <p className="text-slate-600 text-lg leading-relaxed whitespace-pre-line">{project.description}</p>
              </div>
            </div>

            {goalsArray.length > 0 && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
                  <span className="h-8 w-1.5 bg-emerald-500 rounded-full" />
                  Key Features & Implementation
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {goalsArray.map((goal: string, index: number) => (
                    <div key={index} className="flex gap-3 p-5 bg-slate-50 rounded-2xl border border-slate-100 items-start">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                      <p className="text-slate-700 text-sm leading-relaxed">{goal}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {secondaryImages.length > 0 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Project Screenshots</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {secondaryImages.map((image: string, index: number) => (
                    <div key={index} className="p-3 bg-white rounded-[1.5rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                      <div className="relative aspect-video overflow-hidden rounded-xl bg-slate-100">
                        <Image
                          src={image}
                          alt={`${project.title} preview ${index + 2}`}
                          fill
                          loading="lazy"
                          placeholder="blur"
                          blurDataURL={blurPlaceholder}
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8 bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
              {tagsArray.length > 0 && (
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-wider text-[11px]">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {tagsArray.map((tag: string, index: number) => (
                      <Badge key={index} className="bg-white border-slate-200 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors py-1.5 px-3 text-xs font-medium">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {project.role && (
                <div className="pt-6 border-t border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase tracking-wider text-[11px]">Role</h3>
                  <p className="text-slate-600 text-sm">{project.role}</p>
                </div>
              )}

              {project.category && (
                <div className="pt-6 border-t border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-2 uppercase tracking-wider text-[11px]">Category</h3>
                  <p className="text-slate-600 text-sm capitalize">{project.category}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
