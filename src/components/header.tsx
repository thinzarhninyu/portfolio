import React from 'react';
import {
    BiLogoLinkedinSquare,
    BiLogoGithub,
    BiLogoInstagram,
    BiLogoFacebookSquare,
    BiLogoGmail,
    BiLogoTelegram
} from "react-icons/bi";
import Link from "next/link";

export default function Header(): JSX.Element {
    return (
        <header className="sticky top-0 bg-black z-50">
            <nav className="text-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <div
                        className="justify-center items-center w-full flex md:w-auto lg:w-auto lg:order-1"
                    >
                        <ul className="flex mt-4 font-medium flex-row lg:space-x-8 lg:mt-0 items-center justify-center">
                            <li>
                                <Link
                                    href="/"
                                    className="block pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 hover:underline"
                                    aria-current="page"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about-me"
                                    className="block pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 hover:underline"
                                    aria-current="page"
                                >
                                    About Me
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/projects"
                                    className="block pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 hover:underline"
                                    aria-current="page"
                                >
                                    Projects
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div
                        className="justify-center items-center w-full flex md:w-auto lg:w-auto lg:order-1"
                    >
                        <ul className="flex mt-4 font-medium flex-row space-x-3 lg:space-x-8 lg:mt-0 items-center justify-center">
                            <li>
                                <a href="https://www.linkedin.com/in/thinzar-hnin-yu/">
                                    <BiLogoLinkedinSquare className="text-2xl hover:decoration-white" />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/thinzarhninyu">
                                    <BiLogoGithub className="text-2xl hover:decoration-white" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/micxehye/">
                                    <BiLogoInstagram className="text-2xl hover:decoration-white" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/thinzarhninyu/">
                                    <BiLogoFacebookSquare className="text-2xl hover:decoration-white" />
                                </a>
                            </li>
                            <li>
                                <a href="https://t.me/micxehye">
                                    <BiLogoTelegram className="text-2xl hover:decoration-white" />
                                </a>
                            </li>
                            <li>
                                <a href="mailto:thinzarhninyu.17@gmail.com">
                                    <BiLogoGmail className="text-2xl hover:decoration-white" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
