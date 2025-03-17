"use client";

import { motion, useScroll } from "framer-motion";

export function ScrollProgress() {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 z-[9999]"
            style={{
                scaleX: scrollYProgress,
                transformOrigin: "0%",
                boxShadow: "0 1px 4px rgba(0, 0, 0, 0.1)"
            }}
        />
    );
} 