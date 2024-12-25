import React, { useEffect, useState } from 'react';

import Link from 'next/link';
import { cn } from '@/lib/utils';

interface Tab {
    label: string;
    value?: string;
}

interface TabsProps {
    tabs: Tab[] | string[];
    activeTab?: string | number;
    setActiveTab?: (tab: any) => void;
    type?: 'link' | 'button';
    parentRoute?: string;
}

const Tabs: React.FC<TabsProps> = ({ tabs, activeTab, setActiveTab, type = 'button', parentRoute = '' }) => {
    // Determine the active tab value, falling back to the index if no value is provided
    const getValue = (tab: Tab | string, index: number) => {
        if (typeof tab === 'string') {
            return index.toString();  // If tab is a string, use the index as value
        }
        return tab.value ?? index.toString();  // If tab is an object, use value or index
    };

    const getLabel = (tab: Tab | string) => {
        return typeof tab === 'string' ? tab : tab.label;  // Get the label, depending on type
    };

    const getHref = (tab: Tab | string, index: number) => {
        const value = getValue(tab, index);
        const tabPath = typeof tab === 'string' ? tab.toLowerCase().replace(/\s+/g, '-') : value;

        // Ensure there is no double slash in the final URL
        return `/${parentRoute.replace(/\/$/, '')}/${tabPath}`.replace(/\/\/+/g, '/');
    };

    const [active, setActive] = useState<string | number>(activeTab ?? getValue(tabs[0], 0));

    useEffect(() => {
        if (activeTab !== undefined) {
            setActive(activeTab.toString());  // Ensure the active tab state is a string for consistency
        }
    }, [activeTab]);

    const _handleClick = (tab: Tab | string, index: number) => {
        const tabValue = getValue(tab, index);
        setActiveTab && setActiveTab(tabValue);
        setActive(tabValue);
    };

    return (
        <div className="flex border-b border-gray w-full">
            {tabs.map((tab, index) => {
                const isActive = active === getValue(tab, index);
                const commonClasses = cn(
                    'px-4 py-2 text-primary relative focus:outline-none transition-colors duration-200 font-normal border-b border-transparent',
                    isActive && 'bg-gray font-medium border-primary border-b-2'
                );

                return type === 'link' ? (
                    <Link
                        key={index}
                        href={getHref(tab, index)}
                        className={commonClasses}
                        onClick={() => _handleClick(tab, index)}
                    >
                        {getLabel(tab)}
                    </Link>
                ) : (
                    <button
                        key={index}
                        className={commonClasses}
                        onClick={() => _handleClick(tab, index)}
                    >
                        {getLabel(tab)}
                    </button>
                );
            })}
        </div>
    );
};

export default Tabs;
