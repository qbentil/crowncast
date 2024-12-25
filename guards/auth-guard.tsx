"use client";

import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

import BouncingSquaresLoader from "@/components/preloader";
import { useAuthContext } from "@/hooks/userContext";
import useUserSession from "@/hooks/useUserSession";

const AuthGuard = ({
    children,
    isPublic,
}: {
    children: React.ReactNode;
    isPublic?: boolean;
}) => {
    const { isLoggedIn } = useAuthContext();
    const router = useRouter();
    const pathname = usePathname();

    // Use the custom hook to manage user session
    const { userToken, userInfo, isLoading, error } = useUserSession();


    if (!isLoading && error) {
        router.push("/signin")
    }

    useEffect(() => {
        if (!isPublic) {
            // If there's an error (no token, failed fetch, etc.), redirect to sign-in
            if (error) {
                router.push("/signin");
            } else if (userInfo) {
                // Cookies.set("access_token", userToken!);
                if (pathname === "/signin") {
                    router.push("/");
                }
            }
        } else if (isPublic && isLoggedIn) {
            // If user is logged in and tries to access a public page like sign-in, redirect to home
            router.push("/");
        }
    }, [isLoggedIn, userInfo, error, pathname, router, isPublic, userToken]);

    // Show loader while checking token or fetching user info
    if (isLoading) {
        return <BouncingSquaresLoader />;
    }

    return <>{children}</>;
};

export default AuthGuard;
