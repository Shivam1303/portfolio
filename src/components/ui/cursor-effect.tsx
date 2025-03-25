"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Point {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    color: string;
}

interface CursorEffectProps {
    quantity?: number;
    interactionDistance?: number;
    maxSpeed?: number;
    minSize?: number;
    maxSize?: number;
    colors?: string[];
    opacity?: number;
}

export function CursorEffect({
    quantity = 30,
    interactionDistance = 120,
    maxSpeed = 3,
    minSize = 2,
    maxSize = 5,
    colors = ["#ee581b", "#313bac", "#e4e4e4"],
    opacity = 0.6,
}: CursorEffectProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
    const pointsRef = useRef<Point[]>([]);
    const animationRef = useRef<number | undefined>(undefined);

    // Initialize points
    useEffect(() => {
        const initPoints = () => {
            pointsRef.current = [];

            for (let i = 0; i < quantity; i++) {
                pointsRef.current.push({
                    x: Math.random() * dimensions.width,
                    y: Math.random() * dimensions.height,
                    vx: (Math.random() - 0.5) * maxSpeed,
                    vy: (Math.random() - 0.5) * maxSpeed,
                    size: minSize + Math.random() * (maxSize - minSize),
                    color: colors[Math.floor(Math.random() * colors.length)],
                });
            }
        };

        if (dimensions.width > 0 && dimensions.height > 0) {
            initPoints();
        }
    }, [dimensions, quantity, maxSpeed, minSize, maxSize, colors]);

    // Set up canvas and handle resizing
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current && canvasRef.current.parentElement) {
                const { offsetWidth, offsetHeight } = canvasRef.current.parentElement;
                setDimensions({
                    width: offsetWidth,
                    height: offsetHeight,
                });
                canvasRef.current.width = offsetWidth;
                canvasRef.current.height = offsetHeight;
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Handle mouse movement
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    // Animation loop
    useEffect(() => {
        if (!canvasRef.current || dimensions.width === 0) return;

        const ctx = canvasRef.current.getContext("2d");
        if (!ctx) return;

        const animate = () => {
            if (!canvasRef.current) return;

            ctx.clearRect(0, 0, dimensions.width, dimensions.height);

            // Update and draw points
            pointsRef.current.forEach((point) => {
                // Calculate distance to mouse
                const dx = mousePosition.x - point.x;
                const dy = mousePosition.y - point.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                // Apply force if within interaction distance
                if (distance < interactionDistance) {
                    const force = (interactionDistance - distance) / interactionDistance;
                    point.vx -= (dx / distance) * force * 0.5;
                    point.vy -= (dy / distance) * force * 0.5;
                }

                // Update position
                point.x += point.vx;
                point.y += point.vy;

                // Apply friction
                point.vx *= 0.98;
                point.vy *= 0.98;

                // Bounce off edges
                if (point.x < 0 || point.x > dimensions.width) {
                    point.vx = -point.vx;
                }
                if (point.y < 0 || point.y > dimensions.height) {
                    point.vy = -point.vy;
                }

                // Draw point
                ctx.beginPath();
                ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2);
                ctx.fillStyle = point.color;
                ctx.globalAlpha = opacity;
                ctx.fill();
            });

            // Draw connections between points
            ctx.globalAlpha = opacity * 0.3;
            ctx.strokeStyle = "#ee581b";
            ctx.lineWidth = 0.5;

            for (let i = 0; i < pointsRef.current.length; i++) {
                for (let j = i + 1; j < pointsRef.current.length; j++) {
                    const p1 = pointsRef.current[i];
                    const p2 = pointsRef.current[j];
                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < interactionDistance) {
                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [dimensions, interactionDistance, maxSpeed, mousePosition, opacity]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
        />
    );
} 