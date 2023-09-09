import { extra, other_extra } from '@/app/data';

export default function AboutMeExtracurricular() {

    return (
        <div className="mx-5">
            <h1 className='mb-10 text-xl'>Extracurricular (CCA)</h1>

            <div className="px-10 bg-gray-800 border border-gray-700 rounded-lg shadow">
                <ol className="relative border-l border-gray-200 dark:border-gray-700 mt-10 z-0 px-5">
                    {extra.map(({ club, school, period, position, description }) => (
                        <li key={club} className="mb-10 ml-6">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-900 rounded-full -left-3 ring-8 ring-gray-900">
                                <svg className="w-2.5 h-2.5 text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </span>
                            <h3 className="flex items-center mb-1 text-lg font-semibold text-white">{club} <br /> @ {school}</h3>
                            <p className='block mb-2 text-sm font-normal leading-none text-gray-300'>{position}</p>
                            <time className="block mb-4 text-sm font-normal leading-none text-gray-300">{period}</time>
                            <ul className="space-y-1 text-gray-200 list-inside dark:text-gray-400">

                                {description.map(description => (
                                    <li key={description} className="flex items-center text-justify">
                                        <svg className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                        {description}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ol>
            </div>

            <h1 className='mb-10 text-xl mt-10'>Community Service/ Other Experiences</h1>

            <div className="px-10 bg-gray-800 border border-gray-700 rounded-lg shadow">
                <ol className="relative border-l border-gray-200 dark:border-gray-700 px-5 z-0 mt-10">
                    {other_extra.map(({ event, place, period, position, description }) => (
                        <li key={event} className="mb-10 ml-6">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-900 rounded-full -left-3 ring-8 ring-gray-900">
                                <svg className="w-2.5 h-2.5 text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </span>
                            <h3 className="flex items-center mb-1 text-lg font-semibold text-white">{event} <br /> @ {place}</h3>
                            <p className='block mb-2 text-sm font-normal leading-none text-gray-300'>{position}</p>
                            <time className="block mb-4 text-sm font-normal leading-none text-gray-300">{period}</time>
                            <ul className="space-y-1 text-gray-200 list-inside dark:text-gray-400">

                                {description.map(description => (
                                    <li key={description} className="flex items-center text-justify">
                                        <svg className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                        </svg>
                                        {description}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}