"use client";

import { Cookies, getCookie, removeCookie, setCookie } from "typescript-cookie";

import { AuthServiceTSQ } from "@/services/authService";
import axios from "axios";

const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
const Axios = axios.create({
    baseURL: `${apiBaseUrl}/`,
    withCredentials: false,
    headers: {
        Accept: "application/json",
        Pragma: "no-cache",
    },
});

Axios.interceptors.request.use(
    function (config) {
        const userToken = getCookie("access_token");
        if (userToken) {
            config.headers["Authorization"] = `Bearer ${userToken}`;
        }
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

Axios.interceptors.response.use(
    function (response) {
        return response;
    },
    async function (error) {
        const originalRequest = error.config;
        const currentUrl = window.location.href;
        const authService = new AuthServiceTSQ()
        if (error.response.status === 401) {
            originalRequest._retry = true;
            try {
                await authService.refreshToken(error); // Refresh token
                const token = Cookies.get("access_token");
                axios.defaults.headers.common["Authorization"] = "Bearer " + token;
                return Axios(originalRequest);
            } catch (err) {
                authService.logout();
                window.location.href = `/login?redirect_to=${encodeURIComponent(
                    currentUrl
                )}`;
            }
            removeCookie("access_token");
        }
        return Promise.reject(error);
    }
);

export default Axios;