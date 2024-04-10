"use client"

import { useInView } from "framer-motion"
import { useRef } from "react"
import { Projects } from "@prisma/client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { GithubIcon, Globe, SquareArrowOutUpRight } from "lucide-react"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export const Project: React.FC<{ project: Projects & { technologies: { name: string }[] } }> = ({ project }) => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true });

    return (
        <Card ref={ref} key={project.id} className="w-full min-h-[300px] shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-[1.025] flex flex-col"
            style={{
                opacity: isInView ? 1 : 0,
                transition: "ease-in-out 0.75s"
            }}>
            <Link href={`/projects/${project.id}`} className="absolute top-4 right-4 z-10 bg-white inline-flex justify-center items-center px-4 py-2 outline outline-offset-0 outline-1 font-medium rounded-lg text-gray-600 dark:text-gray-900 hover:underline">
                <SquareArrowOutUpRight className="h-5 w-5" />
            </Link>
            <div className="flex justify-center items-center w-full p-3 h-60">
                <Image src={project.image[0]} alt={project.name} width={300} height={50} className="w-full h-full object-cover rounded-lg" />
            </div>
            <CardHeader className="pt-3">
                <CardTitle className="text-lg text-center overflow-hidden line-clamp-1">
                    {project.name}
                </CardTitle>
                <CardDescription className="overflow-hidden line-clamp-3 dark:text-gray-300">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-x-0.5 gap-y-3 justify-center items-center">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                        <Badge key={index}>{tech.name}</Badge>
                    ))}
                    {project.technologies.length > 3 && (
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Badge>+{project.technologies.length - 3}</Badge>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>{project.technologies.slice(3).map(tech => tech.name).join(", ")}</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    )}
                </div>
            </CardContent>
            <CardFooter className="justify-center items-center flex flex-row gap-x-4">
                <div className="flex flex-row gap-x-3">
                    {project.link && (
                        <Link href={project.link} className="inline-flex justify-center items-center px-4 py-2 outline outline-offset-2 outline-1 font-medium rounded-lg text-gray-600 dark:text-gray-300 hover:underline">
                            <Globe className="h-5 w-5" />
                        </Link>
                    )}
                    {project.github && (
                        <Link href={project.github} className="inline-flex justify-center items-center px-4 py-2 outline outline-offset-2 outline-1 font-medium rounded-lg text-gray-600 dark:text-gray-300 hover:underline">
                            <GithubIcon className="h-5 w-5" />
                        </Link>
                    )}
                </div>
            </CardFooter>
        </Card>
    )
}