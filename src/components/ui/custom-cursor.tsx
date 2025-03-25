"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CursorProps {
    color?: string;
    size?: number;
}

export function CustomCursor({
    color = "#ee581b",
    size = 32,
}: CursorProps) {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });

            if (!isActive) setIsActive(true);
        };

        window.addEventListener("mousemove", handleMouseMove);

        document.body.classList.add('cursor-active');

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            document.body.classList.remove('cursor-active');
        };
    }, [isActive]);

    if (typeof window === "undefined" || !isActive) return null;

    return (
        <motion.div
            className="cursor-container fixed inset-0 pointer-events-none z-50"
            style={{
                position: "fixed",
                left: mousePosition.x,
                top: mousePosition.y,
                transform: "translate(-18px, -6px)",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
        >
            <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ transform: "scaleX(-1)" }}
            >
                <path
                    d="M3,10.714L21,3L13.286,21L12,12Z"
                    fill={color}
                    stroke="none"
                />
            </svg>
        </motion.div>
    );
} 