"use client"

import { Calendar } from "lucide-react"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { format } from 'date-fns';

export const Timeline: React.FC<{ title: string, place: string, description: string[], startDate: Date, endDate: Date | null }> = ({ title, place, description, startDate, endDate }) => {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true });

    return (
        <li className="ml-6" ref={ref}
            style={{
                opacity: isInView ? 1 : 0,
                transition: "ease-in-out 0.75s"
            }}>
            <span className="bg-white absolute flex items-center justify-center w-6 h-6 outline outline-offset-2 outline-1 rounded-full -left-3 p-1">
                <Calendar className="w-6 h-6 text-gray-600" />
            </span>
            <h3 className="flex items-center mb-3 text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100">
                {title}  <br />{place}
            </h3>
            <time className="block mb-4 text-sm font-normal leading-none text-gray-900 dark:text-gray-100">{format(startDate, 'MMM yyyy')}   - {endDate ? format(endDate, 'MMM yyyy') : "present"}</time>
            {description.map((desc, index) => (
                <p key={index} className="mb-1 text-base font-normal text-gray-900 dark:text-gray-100 text-justify">{desc}</p>
            ))}
        </li>
    )
}