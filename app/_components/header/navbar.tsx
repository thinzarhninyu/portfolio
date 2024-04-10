"use client"

import { useState } from 'react';
import { LogoLink } from './logo-link';
import { DesktopNavLinks } from './desktop-nav-links';
import { MobileMenuButton } from './mobile-menu-button';
import { MobileDrawer } from './mobile-drawer';

export const Navbar: React.FC = () => {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <>
            <div className="hidden relative py-3 sm:flex flex-col justify-center">
                <LogoLink />
                <DesktopNavLinks />
            </div>
            <div className="sm:hidden relative flex flex-row my-4">
                <LogoLink />
                <MobileMenuButton onClick={handleDrawerToggle} />
                <MobileDrawer isOpen={isDrawerOpen} onClose={handleDrawerToggle} />
            </div>
        </>
    )
}