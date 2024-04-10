"use client"

import { motion } from "framer-motion";
import { Facebook, Github, Instagram, Linkedin, Mail, Send } from "lucide-react";

const items: { link: string, Icon: React.ReactNode, className: string }[] = [
    {
        link: "https://www.linkedin.com/in/thinzarhninyu/",
        Icon: <Linkedin />,
        className: "text-linkedin"
    },
    {
        link: "https://github.com/thinzarhninyu",
        Icon: <Github />,
        className: "text-github"
    },
    {
        link: "https://www.instagram.com/micxehye/",
        Icon: <Instagram />,
        className: "text-instagram"
    },
    {
        link: "https://www.facebook.com/thinzarhninyu/",
        Icon: <Facebook />,
        className: "text-facebook"
    },
    {
        link: "https://t.me/micxehye",
        Icon: <Send />,
        className: "text-send"
    },
    {
        link: "mailto:thinzarhninyu.17@gmail.com",
        Icon: <Mail />,
        className: "text-mail"
    }
];

export const ContactIcons: React.FC = () => {
    return (
        <div className="justify-center items-center w-full flex md:w-auto lg:w-auto lg:order-1">
            <ul className="flex mt-4 font-medium flex-row space-x-3 lg:space-x-8 lg:mt-0 items-center justify-center">
                {items.map((item, index) => (
                    <motion.button
                        key={index}
                        whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
                        whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
                    >
                        <li>
                            <a href={item.link} className={item.className}>
                                {item.Icon}
                            </a>
                        </li>
                    </motion.button>
                ))}
            </ul>
        </div>
    );
};