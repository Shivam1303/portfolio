"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface ElasticLineProps {
    isVertical?: boolean;
    grabThreshold?: number;
    releaseThreshold?: number;
    strokeWidth?: number;
    color?: string;
    className?: string;
}

export function ElasticLine({
    isVertical = false,
    grabThreshold = 50,
    releaseThreshold = 100,
    strokeWidth = 1,
    color = "currentColor",
    className = "",
}: ElasticLineProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [lineData, setLineData] = useState({ start: 0, end: 0, control: 0 });
    const [isGrabbed, setIsGrabbed] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
    const [containerOffset, setContainerOffset] = useState({ x: 0, y: 0 });

    // Set up initial line position
    useEffect(() => {
        if (!containerRef.current) return;

        const updateContainerData = () => {
            const rect = containerRef.current?.getBoundingClientRect();
            if (!rect) return;

            setContainerSize({ width: rect.width, height: rect.height });
            setContainerOffset({ x: rect.left, y: rect.top });

            if (isVertical) {
                setLineData({
                    start: 0,
                    end: rect.height,
                    control: rect.height / 2,
                });
            } else {
                setLineData({
                    start: 0,
                    end: rect.width,
                    control: rect.width / 2,
                });
            }
        };

        updateContainerData();
        window.addEventListener("resize", updateContainerData);
        return () => window.removeEventListener("resize", updateContainerData);
    }, [isVertical]);

    // Mouse move handler
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });

            const relativeX = e.clientX - containerOffset.x;
            const relativeY = e.clientY - containerOffset.y;

            if (isVertical) {
                const center = containerSize.width / 2;
                const distance = Math.abs(relativeX - center);

                if (distance < grabThreshold) {
                    setIsGrabbed(true);
                    setLineData(prev => ({ ...prev, control: relativeY }));
                } else if (isGrabbed && distance > releaseThreshold) {
                    setIsGrabbed(false);
                }
            } else {
                const center = containerSize.height / 2;
                const distance = Math.abs(relativeY - center);

                if (distance < grabThreshold) {
                    setIsGrabbed(true);
                    setLineData(prev => ({ ...prev, control: relativeX }));
                } else if (isGrabbed && distance > releaseThreshold) {
                    setIsGrabbed(false);
                }
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [containerOffset, containerSize, grabThreshold, isGrabbed, isVertical, releaseThreshold]);

    // Animation for control point when released
    useEffect(() => {
        if (!isGrabbed) {
            const centerPoint = isVertical ? lineData.end / 2 : lineData.end / 2;
            setLineData(prev => ({ ...prev, control: centerPoint }));
        }
    }, [isGrabbed, isVertical, lineData.end]);

    // Generate SVG path
    const pathData = isVertical
        ? `M${containerSize.width / 2},${lineData.start} Q${lineData.control},${lineData.end / 2
        } ${containerSize.width / 2},${lineData.end}`
        : `M${lineData.start},${containerSize.height / 2} Q${lineData.control},${containerSize.height / 2
        } ${lineData.end},${containerSize.height / 2}`;

    return (
        <div ref={containerRef} className={`relative w-full h-full overflow-hidden ${className}`}>
            <motion.svg
                width="100%"
                height="100%"
                className="absolute top-0 left-0 pointer-events-none"
            >
                <motion.path
                    d={pathData}
                    stroke={color}
                    strokeWidth={strokeWidth}
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{
                        pathLength: 1,
                        opacity: 1,
                        d: pathData
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 20,
                        pathLength: { delay: 0.2, duration: 0.8 },
                        opacity: { duration: 0.4 }
                    }}
                />
            </motion.svg>
        </div>
    );
} 