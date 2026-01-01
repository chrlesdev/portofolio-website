import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import Link from "next/link";
import Image from "next/image";
import { allProjects } from "@/lib/projectDetails/main";

export default function ProjectLists() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl text-black mb-4">My Projects</h1>
      </div>
      <div className="w-full flex justify-center">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 p-6 max-w-7xl w-full">
          {allProjects.map((project, index) => (
            <Link href={`/project/${project.slug}`} key={index} className="hover">
              <Card className="w-full max-w-sm  hover:shadow-lg transition-transform hover:scale-[1.02] group h-full bg-gradient-to-br from-white via-gray-100 to-gray-50 p-6 rounded-xl shadow">
                <CardHeader>
                  <CardTitle>{project.overview.title}</CardTitle>
                  <CardAction className="flex gap-2">
                    {/* Optional: Add live link if available */}
                    {/* <Button asChild>
                      <Link href={project || "#"} target="_blank">
                        <FaLink />
                      </Link>
                    </Button> */}
                  </CardAction>
                </CardHeader>
                <CardContent className="rounded-2xl">
                  <Image src={project.screenshots[0]?.image || "/placeholder.jpg"} alt="project image" width={500} height={500} className="rounded-2xl object-cover" />
                </CardContent>
                <CardDescription className="p-3 flex justify-center text-black">{project.overview.shortDescription}</CardDescription>
                <CardFooter className="px-4">
                  <span
                    className="relative inline-block text-sm font-medium text-black group-hover:text-black transition-colors duration-300
                    after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-black after:transition-all after:duration-300 group-hover:after:w-full"
                  >
                    Details
                  </span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}
