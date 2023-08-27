import React from 'react';
import { BiCopyright } from "react-icons/bi";
import { Separator } from "@/components/ui/separator"

export default function Footer(): JSX.Element {
    return (
        <footer className="bg-black text-white py-2.5">
            <Separator />
            <div className="flex flex-col lg:flex-row justify-center items-center pt-2.5">
                <div className='flex flex-row justify-center items-center'>
                    <BiCopyright className="mr-2" />
                    <p>2023 Thinzar Hnin Yu.</p>
                </div>
                <p className='md:block sm:block'>&nbsp;All Rights Reserved.</p>
            </div>
        </footer>
    )
}