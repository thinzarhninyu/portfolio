import { Facebook, Github, Instagram, Linkedin, Mail, Send } from "lucide-react"

export const ContactIcons: React.FC = () => {

    return (
        <div
            className="justify-center items-center w-full flex md:w-auto lg:w-auto lg:order-1"
        >
            <ul className="flex mt-4 font-medium flex-row space-x-3 lg:space-x-8 lg:mt-0 items-center justify-center">
                <li>
                    <a href="https://www.linkedin.com/in/thinzarhninyu/">
                        <Linkedin className="text-2xl hover:decoration-white" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/thinzarhninyu">
                        <Github className="text-2xl hover:decoration-white" />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/micxehye/">
                        <Instagram className="text-2xl hover:decoration-white" />
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/thinzarhninyu/">
                        <Facebook className="text-2xl hover:decoration-white" />
                    </a>
                </li>
                <li>
                    <a href="https://t.me/micxehye">
                        <Send className="text-2xl hover:decoration-white" />
                    </a>
                </li>
                <li>
                    <a href="mailto:thinzarhninyu.17@gmail.com">
                        <Mail className="text-2xl hover:decoration-white" />
                    </a>
                </li>
            </ul>
        </div>
    )
}