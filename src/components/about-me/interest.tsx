import React from 'react';
import Link from 'next/link';
import { Card } from '../ui/card';

export default function Interest({
    image, text, page
}: {
    image: string,
    text: string,
    page: string
}) {
    return (
        <Card className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative">
            <img className="rounded-lg h-48 w-full object-cover" src={image} alt="product image" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <Link href={page} className="text-black bg-white px-4 py-2 rounded-md hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700">{text}</Link>
            </div>
        </Card>

    )
}