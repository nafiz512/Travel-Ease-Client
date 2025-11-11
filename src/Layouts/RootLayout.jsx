import React from "react";
import { Outlet, useLocation } from "react-router";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";

const RootLayout = () => {
    const location = useLocation();

    return (
        <div className="">
            <Toaster position="top-center" reverseOrder={false} />
            <div className="sticky top-0 z-50 bg-base-100">
                <Navbar />
            </div>
            <main>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -10, opacity: 0 }}
                        transition={{ duration: 0.1 }}
                    >
                        <Outlet />
                    </motion.div>
                </AnimatePresence>
            </main>
        </div>
    );
};

export default RootLayout;
