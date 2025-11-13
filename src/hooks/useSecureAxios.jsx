import axios from "axios";
import React, { use, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

const instance = axios.create({
    baseURL: "https://travel-ease-server-lovat.vercel.app",
});
const useSecureAxios = () => {
    const { user } = use(AuthContext);

    useEffect(() => {
        const reqInterceptor = instance.interceptors.request.use(
            (config) => {
                const token = user?.accessToken;

                if (token) {
                    config.headers.userToken = `Bearer ${token}`;
                }
                return config;
            },
            (error) => Promise.reject(error)
        );
        return () => {
            instance.interceptors.request.eject(reqInterceptor);
        };
    }, [user?.accessToken]);
    return instance;
};

export default useSecureAxios;
