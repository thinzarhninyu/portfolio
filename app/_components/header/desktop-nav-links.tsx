import Link from 'next/link';

import { menuItems } from "@/data/constants";

export const DesktopNavLinks: React.FC = () => {
    return (
        <ul className="absolute right-3 flex flex-row space-x-6">
            {menuItems.map((item, index) => (
                <li key={index} className="hover:font-semibold">
                    <Link href={item.href}>{item.title}</Link>
                </li>
            ))}
        </ul>
    );
}