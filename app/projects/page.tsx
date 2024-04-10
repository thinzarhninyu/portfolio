import { getProjects } from "@/data/data"
import { Project } from "../_components/project";

const AllProjects: React.FC = async () => {

    const projects = await getProjects();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between px-10 pb-20 sm:px-24 sm:pb-24">
            <div className='pt-12 sm:pt-24'>
                <section className="">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl lg:text-5xl">Projects</h2>
                        </div>
                    </div>
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 mt-16">
                        <div className="flex flex-wrap mt-5 gap-y-3">
                            {projects?.map((project) => (
                                <div key={project.id} className="w-full sm:w-full md:w-full lg:w-1/3 px-0 lg:px-2 py-2">
                                    <Project project={project} />
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default AllProjects;