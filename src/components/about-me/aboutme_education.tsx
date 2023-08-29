import Link from 'next/link';
import { education } from '@/app/data';

export default function AboutMeEducation() {

    return (
        <div className="mx-5">
            <h1 className='mb-10 text-xl'>Education</h1>


            <ol className="relative border-l border-gray-200 dark:border-gray-700 px-5 z-0">
                {education.map(({ school, concentration, period, description, present, view, link }) => (
                    <li key={concentration} className="mb-10 ml-6">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-900 rounded-full -left-3 ring-8 ring-gray-900">
                            <svg className="w-2.5 h-2.5 text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                            </svg>
                        </span>
                        <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
                            {concentration}  <br />@ {school}
                            {/* {present && (
                                <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3 sm:block md:block">
                                    Present
                                </span>
                            )} */}
                        </h3>

                        <time className="block mb-4 text-sm font-normal leading-none text-gray-300">{period}</time>
                        <p className="mb-4 text-base font-normal text-gray-200 text-justify">{description}</p>
                        <Link href={link} className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700">View {view}</Link>
                    </li>
                ))}
            </ol>

        </div>
    )
}