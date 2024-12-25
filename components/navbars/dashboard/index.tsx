/* eslint-disable @next/next/no-img-element */



"use client"

import { ArrowDown2, Notification } from 'iconsax-react';
import React, { useState } from 'react';

import Breadcrumb from '../../breadcrumb';
import Notifications from './notifcations';
import { useAuthContext } from '@/hooks/userContext';

const Navbar = () => {
    const { user } = useAuthContext();
    const [showNotifications, setShowNotifications] = useState(false);
    return (
        <div className="w-full h-full flex justify-between items-center px-4">
            <Breadcrumb />
            <div className="flex items-center justify-center gap-x-6">
                <div
                    className="text-black w-10 h-10 flex items-center justify-center rounded-lg relative cursor-pointer"
                >
                    <span onClick={() => setShowNotifications(!showNotifications)}>
                        <Notification className="text-lg" />
                        <div className="w-4 h-4 bg-primary rounded-full absolute top-0 -right-1 flex items-center justify-center text-xs text-white border-2 border-white">
                            4
                        </div>
                    </span>
                    {showNotifications &&
                        <div className="absolute top-12 w-80 bg-white shadow-lg rounded-lg p-4 z-50">
                            <Notifications />
                        </div>

                    }
                </div>

                <div className="flex items-center gap-x-2 px-10">
                    <div className="w-10 h-10 rounded-lg bg-gray relative">
                        <img
                            src={user?.profileImageUrl ?? '/assets/avatar.avif'}
                            alt=""
                            className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="h-3 w-3 bg-green-500 rounded-full absolute -bottom-0 -right-0 border-2 border-white"></div>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-text font-bold">{user?.name ?? 'N/A'}</p>
                        <p className="text-text text-sm capitalize">
                            {user?.role?.split('-').join(' ')}
                        </p>
                    </div>
                </div>
                {/* <ArrowDown2 className="text-sm cursor-pointer text-text" size={16} /> */}
            </div>
        </div>
    );
};

export default Navbar;
