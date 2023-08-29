import React from 'react';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from "@/components/ui/badge"

export default function Project({
    title, description, language, image, link, code
}: {
    title: string,
    description: string,
    language: string[],
    image: string,
    link: string,
    code: string
}) {
    return (
        <Card className='bg-black border-white text-white w-full h-full flex flex-col lg:flex-row'>
            <div className='w-full lg:w-25'>
                <Image
                    src={image}
                    alt="project image"
                    layout="responsive"
                    width={100}
                    height={100}
                    blurDataURL="data:..."
                    placeholder="blur"
                    className='w-full rounded-l-lg'
                />
            </div>
            <div className='flex w-full lg:w-75'>
                <div>
                    <CardHeader>
                        <CardTitle>{title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className='text-justify'>{description}</p>
                        <div className='flex flex-row flex-wrap justify-left items-center mt-5 space-x-3'>
                            {language.map(language => (
                                <div key={language} className='flex items-center justify-left'>
                                    <div className='w-full justify-left mb-4'>
                                        <Badge className='bg-white text-black'>{language}</Badge>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                    <CardFooter>
                        <div className='flex flex-row flex-wrap justify-left items-center space-x-3'>
                            <Link href={link} className="inline-flex justify-center items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700">Link to Demo</Link>
                            <Link href={code} className="inline-flex justify-center items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700">Link to Code</Link>
                        </div>
                    </CardFooter>
                </div>
            </div>
        </Card>
    )
}