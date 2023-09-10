import { certifications } from "@/app/data"
import Image from "next/image"
import { Badge } from "../ui/badge"

export default function AboutMeCertificates() {
    return (
        <div className="mx-5">
            <h1 className='mb-10 text-xl'>Certifications</h1>
            <div className="px-5 bg-gray-800 border border-gray-700 rounded-lg shadow">
                <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                    {certifications.map(({ name, link, date, image, school }) => (
                        <li key={name} className="bg-gray-300 text-black my-5 p-5 sm:py-4 rounded-lg">
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                    <Image className="w-8 h-8 rounded-full" src={image} alt="Image" width={300} height={300} />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
                                        <a href={link}>{name}</a>
                                    </p>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">
                                        {school.map(school => (
                                            <div key={school} className='flex items-center justify-left'>
                                                <div className='w-full justify-left'>
                                                    <Badge className='bg-white text-black'>{school}</Badge>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="inline-flex items-center">
                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">{date}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div >
        </div >
    )
}