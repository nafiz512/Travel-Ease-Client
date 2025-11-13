import axios from "axios";
import React from "react";

const axiosfetch = axios.create({
    baseURL: "https://travel-ease-server-lovat.vercel.app",
});
const useAxios = () => {
    return axiosfetch;
};

export default useAxios;
