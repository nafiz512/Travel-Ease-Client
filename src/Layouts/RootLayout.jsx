import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";

const RootLayout = () => {
    return (
        <div className="">
            <Toaster position="top-center" reverseOrder={false} />
            <div className="sticky top-0 z-50 bg-base-100">
                <Navbar />
            </div>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default RootLayout;
