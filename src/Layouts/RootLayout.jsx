import React, { use } from "react";
import { Outlet, useLocation, useNavigation } from "react-router";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "../components/Footer";
import LoadingEffect from "../components/LoadingEffect";
import { AuthContext } from "../context/AuthContext";

const RootLayout = () => {
    const location = useLocation();
    const { loading } = use(AuthContext);
    const navigation = useNavigation();
    const isLoading = navigation.state == "loading";

    return (
        <div>
            <Toaster position="top-center" reverseOrder={false} />
            <nav className="sticky top-0 z-50 bg-base-100">
                <Navbar />
            </nav>
            <main className="min-h-screen">
                {isLoading || loading ? (
                    <LoadingEffect></LoadingEffect>
                ) : (
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
                )}
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default RootLayout;
