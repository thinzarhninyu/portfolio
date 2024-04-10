import React from "react";
import { Block } from "../block";
import { introductionBlocks } from "@/data/constants";
import { File, Book, Laptop, Pencil, Search } from "lucide-react";
import Link from "next/link";
import { getEducationDetails, getExperienceDetails } from "@/data/data";
import { Timeline } from "../timeline";
import { MotionButton } from "../button";

export const Introduction: React.FC = async () => {

    const education = await getEducationDetails();
    const experience = await getExperienceDetails();

    return (
        <section className="">
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl lg:text-5xl">Welcome!</h2>
                    <p className="mx-auto mt-4 max-w-4xl text-lg font-normal text-gray-700 dark:text-gray-200 lg:text-lg lg:leading-8">
                        I am <b>Thinzar</b> Hnin Yu, a software developer based in Singapore. I am passionate about building software that solves real-world problems. I am a final year Diploma in Information Technology student, specializing in Software Development, studying @ Singapore Polytechnic.
                    </p>
                </div>
                <div className="flex justify-center items-center mt-7">
                    <MotionButton>
                        <Link href="/resume.pdf" className="inline-flex justify-center items-center px-4 py-2 outline outline-offset-2 outline-1 font-medium rounded-lg text-gray-600 dark:text-gray-300 hover:underline">
                            <File className="mr-2" /> View CV
                        </Link>
                    </MotionButton>
                </div>
                <ul className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-10 sm:mt-16 lg:mt-15 lg:max-w-5xl lg:grid-cols-4">
                    {introductionBlocks.map((block, index) => (
                        <li key={index} className="flex-start group relative flex lg:flex-col">
                            <Block
                                icon={
                                    block.icon === "laptop" ? <Laptop className="h-5 w-5 text-gray-600 group-hover:text-white" /> :
                                        block.icon === "book" ? <Book className="h-5 w-5 text-gray-600 group-hover:text-white" /> :
                                            block.icon === "pencil" ? <Pencil className="h-5 w-5 text-gray-600 group-hover:text-white" /> :
                                                block.icon === "search" ? <Search className="h-5 w-5 text-gray-600 group-hover:text-white" /> : null
                                }
                                title={block.title}
                                description={block.description}
                            />
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-left mt-16">
                    <h2 className="mt-6 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl lg:text-2xl">Education</h2>
                </div>
                <div className="px-6 sm:px-10 py-5 outline outline-offset-2 outline-1 outline-gray-300 rounded-lg mt-5">
                    <ol className="relative border-l border-gray-200 dark:border-gray-700 pl-1 z-0 space-y-5">
                        {education?.map(({ school, degree, field, startDate, endDate, description }) => (
                            <Timeline key={degree} title={degree} place={school} startDate={startDate} endDate={endDate} description={description} />
                        ))}
                    </ol>
                </div>
            </div>
            <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="text-left mt-16">
                    <h2 className="mt-6 text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl lg:text-2xl">Work Experience</h2>
                </div>
                <div className="px-6 sm:px-10 py-5 outline outline-offset-2 outline-1 outline-gray-300 rounded-lg mt-5">
                    <ol className="relative border-l border-gray-200 dark:border-gray-700 pl-1 z-0 space-y-5">
                        {experience?.map(({ position, company, startDate, endDate, description }) => (
                            <Timeline key={position} title={position} place={company} startDate={startDate} endDate={endDate} description={description} />
                        ))}
                    </ol>
                </div>
            </div>
            <div className="flex justify-center items-center mt-10">
                <MotionButton>
                    <Link href="/about" className="inline-flex justify-center items-center px-4 py-2 outline outline-offset-2 outline-1 font-medium rounded-lg text-gray-600 dark:text-gray-300 hover:underline">
                        Click here to view more about me!
                    </Link>
                </MotionButton>
            </div>
        </section>
    )
}