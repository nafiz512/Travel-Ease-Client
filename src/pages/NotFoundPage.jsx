import React from "react";
import { NavLink } from "react-router";
import { motion } from "framer-motion";

const NotFoundPage = () => {
    return (
        <div className="min-h-screen bg-base-100 flex items-center justify-center px-4">
            <div className="max-w-2xl mx-auto text-center">
                {/* Animated Number */}
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                    className="text-9xl font-bold text-primary mb-4"
                >
                    404
                </motion.div>

                {/* Content */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-6"
                >
                    <h1 className="text-3xl md:text-4xl font-bold text-base-content">
                        Page Not Found
                    </h1>

                    <p className="text-base-content/70 text-lg max-w-md mx-auto">
                        The page you're looking for doesn't exist or has been
                        moved. Let's get you back to exploring vehicles!
                    </p>

                    {/* Action Button */}
                    <NavLink to="/">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn btn-primary btn-lg px-8 mt-4"
                        >
                            Back to Homepage
                        </motion.button>
                    </NavLink>
                </motion.div>
            </div>
        </div>
    );
};

export default NotFoundPage;
