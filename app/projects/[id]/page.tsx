import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';
import { getProjectById } from '@/data/data';
import Link from 'next/link';
import { Globe, GithubIcon } from 'lucide-react';
import Image from 'next/image';

const ProjectDetail: React.FC<{ params: { id: string } }> = async ({ params }) => {

    const project = await getProjectById(params.id);

    if (!project) {
        return (
            <main className="flex min-h-screen flex-col items-center justify-center px-10 pb-20 sm:px-16 sm:pb-24">
                <h2 className="mt-6 text-xl font-bold tracking-tight text-gray-900">Project Not Found</h2>
            </main>
        )
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between px-10 pb-20 sm:px-16 sm:pb-24">
            <div className='pt-12 sm:pt-24'>
                <section className="">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl lg:text-5xl">{project.name}</h2>
                        </div>
                    </div>
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 mt-16">
                        <Card className="border-0 outline-0 shadow-none">
                            <div className="flex justify-center items-center mt-5 mb-10">
                                <Image src={project.image[0]} alt={project.name} width={700} height={200} />
                            </div>
                            <CardHeader>
                                <CardDescription className="text-gray-600 dark:text-gray-200 text-md text-justify">{project.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className='text-gray-600 dark:text-gray-200 text-md mb-3'>Technologies Used:</div>
                                <div className="flex justify-between items-center">
                                    <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
                                        {project.technologies.map((tech, index) => (
                                            <Badge key={index}>{tech.name}</Badge>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter className='flex justify-center items-center mt-3'>
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
                    </div>
                </section>
            </div>
        </main>

    )
}

export default ProjectDetail;