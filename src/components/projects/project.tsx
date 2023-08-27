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

export default function Project({
    title, description, language, image, link
}: {
    title: string,
    description: string,
    language: string[],
    image: string,
    link: string
}) {
    return (
        <Link href={link} className='w-full h-full'>
            <Card className='bg-black border-white text-white w-full h-full flex flex-col lg:flex-row'>
                <div className='flex w-full lg:w-3/10'>
                    <Image
                        src={image}
                        alt="project image"
                        width={300}
                        height={300}
                        blurDataURL="data:..."
                        placeholder="blur"
                        className='w-full'
                    />
                </div>
                <div className='flex w-full lg:w-7/10'>
                    <div>
                        <CardHeader>
                            <CardTitle>{title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>{description}</p>
                        </CardContent>
                        <CardFooter>
                            <p>Made with: {language.join(', ')}</p>
                        </CardFooter>
                    </div>
                </div>
            </Card>
        </Link>
    )
}