import KDB from "../KDB"
import { skills } from "@/app/data"


export default function AboutMeSkills() {

    return (
        <div className="mx-5">
            <h1 className='mb-10 text-xl'>Skills</h1>

            <div className="p-6 bg-gray-800 border border-gray-200 rounded-lg shadow border-gray-700 mb-4">
                <p className="mb-3">Frontend Skill-sets</p>
                <div className='flex flex-row flex-wrap items-center'>
                    {skills[0].map((topic) => (
                        <div key={topic} className='flex flex-row items-center justify-center'>
                            <div className='w-full justify-center mr-4 mb-4'>
                                <KDB content={topic} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="p-6 bg-gray-800 border border-gray-200 rounded-lg shadow border-gray-700 mb-4">
                <p className="mb-3">Backend Skill-sets</p>
                <div className='flex flex-row flex-wrap items-center'>
                    {skills[1].map((topic) => (
                        <div key={topic} className='flex flex-row items-center justify-center'>
                            <div className='w-full justify-center mr-4 mb-4'>
                                <KDB content={topic} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="p-6 bg-gray-800 border border-gray-200 rounded-lg shadow border-gray-700 mb-4">
                <p className="mb-3">Database Skill-sets</p>
                <div className='flex flex-row flex-wrap items-center'>
                    {skills[2].map((topic) => (
                        <div key={topic} className='flex flex-row items-center justify-center'>
                            <div className='w-full justify-center mr-4 mb-4'>
                                <KDB content={topic} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="p-6 bg-gray-800 border border-gray-200 rounded-lg shadow border-gray-700">
                <p className="mb-3">Other Skill-sets</p>
                <div className='flex flex-row flex-wrap items-center'>
                    {skills[3].map((topic) => (
                        <div key={topic} className='flex flex-row items-center justify-center'>
                            <div className='w-full justify-center mr-4 mb-4'>
                                <KDB content={topic} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}