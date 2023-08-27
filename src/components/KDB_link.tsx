import React from 'react';
import Link from 'next/link'

export default function KDB({
    content,
    id,
    // changeTab
}: {
    content: string,
    id: string,
    // changeTab: () => void;
}) {
    return (
        <Link className='w-full' href={`#${id}`}>
            <kbd className="w-full px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">{content}</kbd>
        </Link>
    )
}