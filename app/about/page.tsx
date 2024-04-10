import { getCertifications, getExtracurriculars, getInterests, getPersonalityTraits } from "@/data/data";
import { Calendar } from "lucide-react";
import { Certification } from "../_components/certification";
import { Badge } from "@/components/ui/badge";

const AboutPage: React.FC = async () => {

    const extracurriculars = await getExtracurriculars();
    const certifications = await getCertifications();
    const interests = await getInterests();
    const personality = await getPersonalityTraits();

    return (
        <main className="flex min-h-screen flex-col items-center justify-between px-10 pb-20 sm:px-24 sm:pb-24">
            <div className='pt-12 sm:pt-24'>
                <section className="">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl lg:text-5xl">More About Me</h2>
                        </div>
                    </div>
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="text-left mt-16">
                            <h2 className="mt-6 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl lg:text-2xl">Extracurriculars</h2>
                        </div>
                        <div className="px-6 sm:px-10 py-5 outline outline-offset-2 outline-1 outline-gray-300 rounded-lg mt-5">
                            <ol className="relative border-l border-gray-200 dark:border-gray-700 pl-1 z-0 space-y-5">
                                {extracurriculars?.map(({ position, company, startDate, endDate, description }) => (
                                    <li key={position} className="ml-6">
                                        <span className="bg-white absolute flex items-center justify-center w-6 h-6 outline outline-offset-2 outline-1 rounded-full -left-3 p-1">
                                            <Calendar className="w-6 h-6 text-gray-600" />
                                        </span>
                                        <h3 className="flex items-center mb-3 text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100">
                                            {position}  <br />{company}
                                        </h3>
                                        <time className="block mb-4 text-sm font-normal leading-none text-gray-900 dark:text-gray-100">{startDate.toLocaleDateString(undefined, { month: 'short', year: 'numeric' })} - {endDate?.toLocaleDateString(undefined, { month: 'short', year: 'numeric' }) ?? "present"}</time>
                                        {description.map((desc, index) => (
                                            <p key={index} className="mb-1 text-base font-normal text-gray-900 dark:text-gray-100 text-justify">{desc}</p>
                                        ))}
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="text-left mt-16">
                            <h2 className="mt-6 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl lg:text-2xl">Certifications</h2>
                        </div>
                        <div className="flex flex-wrap mt-5 gap-y-3">
                            {certifications?.map((cert) => (
                                <div key={cert.id} className="w-full sm:w-full md:w-full lg:w-1/3 px-0 lg:px-2 py-2">
                                    <Certification certification={cert} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="text-left mt-16">
                            <h2 className="mt-6 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl lg:text-2xl">Interests</h2>
                        </div>
                        <div className="px-6 sm:px-10 py-5 outline outline-offset-2 outline-1 outline-gray-300 rounded-lg mt-5">
                            <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
                                {interests?.map((interest) => (
                                    <div key={interest.id} className="flex  justify-between items-center">
                                        <Badge>{interest.name}</Badge>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="text-left mt-16">
                            <h2 className="mt-6 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl lg:text-2xl">Personality</h2>
                        </div>
                        <div className="px-6 sm:px-10 py-5 outline outline-offset-2 outline-1 outline-gray-300 rounded-lg mt-5">
                            <h2 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100">My Personality Type</h2>
                            {personality?.map((trait) => (
                                <div key={trait.id} className="flex justify-between items-center text-justify">
                                    {trait.description}
                                </div>
                            ))}
                            <h2 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100 mt-7">My Values</h2>
                            {personality?.map((trait) => (
                                <div key={trait.id} className="flex justify-between items-center text-justify">
                                    {trait.values}
                                </div>
                            ))}
                            <h2 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100 mt-7">My Strengths</h2>
                            {personality?.map((trait) => (
                                <div key={trait.id} className="flex flex-wrap items-center gap-x-2 gap-y-2">
                                    {trait.strengths.map((name, index) => (
                                        <div key={index} className="flex justify-between items-center">
                                            <Badge>{name}</Badge>
                                        </div>
                                    ))}
                                </div>
                            ))}
                            <h2 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100 mt-7">My Weaknesses</h2>
                            {personality?.map((trait) => (
                                <div key={trait.id} className="flex flex-wrap items-center gap-x-2 gap-y-2">
                                    {trait.weaknesses.map((name, index) => (
                                        <div key={index} className="flex justify-between items-center">
                                            <Badge>{name}</Badge>
                                        </div>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default AboutPage;