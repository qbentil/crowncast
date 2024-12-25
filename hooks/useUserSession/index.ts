import { useEffect, useState } from "react";

import { IUser } from "@/models/user.model";
import UserService from "@/services/user.service";
import { getCookie } from "typescript-cookie";
import { useAuthContext } from "@/hooks/userContext";

const useUserSession = () => {
    const [userToken, setUserToken] = useState<string | null>(null);
    const [userInfo, setUserInfo] = useState<IUser | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const { login, logout } = useAuthContext();

    useEffect(() => {
        const fetchUserInfo = async () => {
            // Check for the access token in cookies
            const token = getCookie("access_token");

            if (!token) {
                setIsLoading(false);
                setError("No token found");
                return;
            }

            setUserToken(token);

            try {
                const userData = await UserService.getUserInfo();
                setUserInfo(userData);
                login(userData);  // Set user context
            } catch (err) {
                setError("Failed to fetch user info");
                logout();
            } finally {
                setIsLoading(false);
            }
        };

        fetchUserInfo();
    }, [login, logout]);

    return { userToken, userInfo, isLoading, error };
};

export default useUserSession;
