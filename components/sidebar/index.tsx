"use client"

import { INavItem, getRoutes } from '../../utils/routes';
import React, { useEffect, useState } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { LogoutCurve } from 'iconsax-react'
import clsx from "clsx";
import { useAuthContext } from "@/hooks/userContext";
import { usePathname } from 'next/navigation';

const NavItem: React.FC<INavItem> = ({ name, path, Icon }) => {
    const pathname = usePathname();
    const [active, setActive] = useState<boolean>(false);

    useEffect(() => {
        // Check if the current pathname matches the nav item's path
        // console.log({ path, pathname })
        if (path === "/") {
            setActive("/" === path); // Set active if the path is "/"
        } else {
            setActive(pathname.endsWith(path)); // Set active for other paths
        }
    }, [pathname, path]);

    return (
        <p
            className={clsx(
                "flex items-center text-white justify-start w-full px-3 py-2 rounded-full",
                active && "bg-primary text-white", // Highlight active item,
                "hover:bg-primary"
            )}
        >
            <Link
                href={`/${path}`}
                className="flex items-center justify-start w-full h-full "
            >
                {Icon && <Icon />}
                <span className="ml-4">{name}</span>
            </Link>
        </p>
    );
};

const Sidebar = () => {
    const { user, logout } = useAuthContext();
    const routes = getRoutes(user?.role!);


    useEffect(() => {
        // disableDevTools();
    }, []);
    return (
        <div className="w-full h-full bg-sidebar relative">
            {/* logo */}
            <div className="flex items-center justify-center gap-x-2 h-16">
                <Image src="/assets/logo.png" alt="logo" width={40} height={40} className='border border-white rounded bg-white' />
                <p className='font-bold text-white text-2xl'>Tap2Win E.</p>
            </div>
            <div className='flex items-start justify-center pl-6 pr-2 mt-6 gap-y-1 flex-col w-full'>
                {/* nav with icons */}
                {
                    routes.map(route => <NavItem key={route.path} {...route} />)
                }

            </div>

            {/* logout */}
            <div className="absolute bottom-20 w-full px-8">
                <div onClick={logout} className=" cursor-pointer flex items-center justify-start w-full h-16 text-white hover:text-gray">
                    <LogoutCurve />
                    <span className="ml-4">Logout</span>
                </div>
            </div>
        </div>
    )
}

export default Sidebar