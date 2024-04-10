import React from 'react';
import { Copyright } from 'lucide-react';

export default function Footer(): JSX.Element {
    return (
        <footer className="py-5 dark:bg-neutral-900">
            <div className="flex flex-col lg:flex-row justify-center items-center pt-2.5">
                <div className='flex flex-row justify-center items-center'>
                    <Copyright className="mr-1" size={16} />
                    <p>2024 Thinzar Hnin Yu.</p>
                </div>
                <p className='md:block sm:block'>&nbsp;All Rights Reserved.</p>
            </div>
        </footer>
    )
}