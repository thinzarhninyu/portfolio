import Link from 'next/link';
import { X } from 'lucide-react';

import { menuItems } from '@/data/constants';

export const MobileDrawer: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    return (
        <div
            className={`fixed flex flex-col justify-center items-center z-10 top-0 right-0 h-full w-full bg-white dark:bg-neutral-900 text-black transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
            <button className="absolute right-7 top-4 p-3 dark:text-gray-100" onClick={onClose}>
                <X size="24" />
            </button>
            <ul className="flex flex-col justify-center items-center space-y-4">
                {menuItems.map((item, index) => (
                    <li key={index} className="hover:font-semibold dark:text-gray-100">
                        <Link href={item.href} onClick={onClose}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}