import React from "react";
import { motion, useScroll } from "framer-motion";
const ScrollMotion = () => {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div
            id="scroll-indicator"
            style={{
                scaleX: scrollYProgress,
                originX: 0,
                zIndex: 1000,
            }}
            className=" bg-blue-500 top-17 left-0 right-0 h-1 fixed "
        />
    );
};

export default ScrollMotion;
