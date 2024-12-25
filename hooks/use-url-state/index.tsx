"use client"

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

import { useCallback } from 'react';

export default function useUrlState<T = any>(field: string): any {
    console.log("called useUrlState")
    // return "something here"
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    const setState = useCallback(
        (newState: T) => {
            const params = new URLSearchParams(searchParams.toString());

            if (newState !== undefined && newState !== null) {
                params.set(field, String(newState));
            } else {
                params.delete(field);
            }

            router.push(`${pathname}?${params.toString()}`);
        },
        [field, pathname, router, searchParams]
    );

    const value = searchParams.get(field) as T | undefined;

    return [value, setState];
}