import Project from "@/components/projects/project"
import { projects } from "../data"

export default function Projects(): JSX.Element {

    const sorted_projects = projects
        .slice()
        .sort((a, b) => b.date.getTime() - a.date.getTime())

    return (
        <main>
            <h1 className='text-center mb-10 text-2xl'>Projects</h1>
            <div>
                {sorted_projects.map(({ title, description, language, image, link, code }) => (
                    <div key={title} className='w-full flex justify-center items-center mb-10'>
                        <Project link={link} code={code} title={title} description={description} language={language} image={image} />
                    </div>
                ))}
            </div>
        </main>
    )
}