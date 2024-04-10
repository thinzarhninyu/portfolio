import { getProjects, getSkills } from "@/data/data"
import { Project } from "../project";
import Link from "next/link";
import { SkillType } from "@prisma/client";
import { Skill } from "../skill";
import { MotionButton } from "../button";

export const Projects: React.FC = async () => {

    const projects = await getProjects();
    const skills = await getSkills();

    return (
        <section className="">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-left mt-16">
                    <h2 className="mt-6 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl lg:text-2xl">Projects</h2>
                </div>
                <div className="flex flex-wrap mt-5 gap-y-3">
                    {projects?.filter((project) => project.featured === true).map((project) => (
                        <div key={project.id} className="w-full sm:w-full md:w-full lg:w-1/3 px-0 lg:px-2 py-2">
                            <Project project={project} />
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center items-center mt-10">
                <MotionButton>
                    <Link href="/projects" className="inline-flex justify-center items-center px-4 py-2 outline outline-offset-2 outline-1 font-medium rounded-lg text-gray-600 dark:text-gray-300 hover:underline">
                        View More
                    </Link>
                </MotionButton>
            </div>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-left mt-16">
                    <h2 className="mt-6 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl lg:text-2xl">Tech Stacks</h2>
                </div>
                <div className="flex flex-wrap mt-5 gap-y-3">
                    {skills && (
                        <>
                            <Skill title="Languages" skills={skills.filter((skill) => skill.type === SkillType.LANGUAGE)} />
                            <Skill title="Full-Stack Development" skills={skills.filter((skill) => skill.type === SkillType.FULLSTACK || skill.type === SkillType.MOBILE)} />
                            <Skill title="Databases & Hosting" skills={skills.filter((skill) => skill.type === SkillType.DATABASE || skill.type === SkillType.HOSTING)} />
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}