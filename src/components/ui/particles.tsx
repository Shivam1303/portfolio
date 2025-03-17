"use client";

import React, { useRef, useEffect, useState } from "react";

interface Particle {
    x: number;
    y: number;
    size: number;
    speedX: number;
    speedY: number;
    color: string;
}

interface ParticlesProps {
    className?: string;
    quantity?: number;
    staticity?: number;
    ease?: number;
    refresh?: boolean;
    lightModeColor?: string;
    darkModeColor?: string;
    particleSize?: number;
    minSpeed?: number;
    maxSpeed?: number;
    opacity?: number;
    connectParticles?: boolean;
    connectionDistance?: number;
    connectionOpacity?: number;
}

export function Particles({
    className = "",
    quantity = 100,
    staticity = 50,
    ease = 50,
    refresh = false,
    lightModeColor = "#141414",
    darkModeColor = "#ee581b",
    particleSize = 2,
    minSpeed = 0.1,
    maxSpeed = 0.5,
    opacity = 0.3,
    connectParticles = true,
    connectionDistance = 100,
    connectionOpacity = 0.25,
}: ParticlesProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const canvasContainerRef = useRef<HTMLDivElement>(null);
    const context = useRef<CanvasRenderingContext2D | null>(null);
    const particles = useRef<Particle[]>([]);
    const mousePosition = useRef({ x: 0, y: 0 });
    const mouse = useRef({ x: 0, y: 0 });
    const canvasSize = useRef({ w: 0, h: 0 });
    const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [currentColor, setCurrentColor] = useState(lightModeColor);

    // Detect theme changes
    useEffect(() => {
        const detectTheme = () => {
            if (typeof window !== "undefined") {
                const isDark = document.documentElement.classList.contains("dark");
                setIsDarkMode(isDark);
                setCurrentColor(isDark ? darkModeColor : lightModeColor);
            }
        };

        // Initial detection
        detectTheme();

        // Set up a mutation observer to watch for class changes on the html element
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (
                    mutation.type === "attributes" &&
                    mutation.attributeName === "class"
                ) {
                    detectTheme();
                    // Reinitialize particles with new color
                    if (particles.current.length > 0) {
                        particles.current.forEach(p => {
                            p.color = isDarkMode ? darkModeColor : lightModeColor;
                        });
                    }
                }
            });
        });

        observer.observe(document.documentElement, { attributes: true });

        return () => {
            observer.disconnect();
        };
    }, [darkModeColor, lightModeColor]);

    useEffect(() => {
        if (canvasRef.current) {
            context.current = canvasRef.current.getContext("2d");
        }

        initCanvas();
        initParticles();
        animate();

        window.addEventListener("resize", initCanvas);
        window.addEventListener("mousemove", onMouseMove);

        return () => {
            window.removeEventListener("resize", initCanvas);
            window.removeEventListener("mousemove", onMouseMove);
        };
    }, []);

    useEffect(() => {
        if (refresh) {
            initParticles();
        }
    }, [refresh]);

    // Update particles when theme changes
    useEffect(() => {
        if (particles.current.length > 0) {
            particles.current.forEach(p => {
                p.color = currentColor;
            });
        }
    }, [currentColor]);

    const initCanvas = () => {
        if (canvasContainerRef.current && canvasRef.current && context.current) {
            canvasSize.current.w = canvasContainerRef.current.offsetWidth;
            canvasSize.current.h = canvasContainerRef.current.offsetHeight;

            canvasRef.current.width = canvasSize.current.w * dpr;
            canvasRef.current.height = canvasSize.current.h * dpr;

            canvasRef.current.style.width = `${canvasSize.current.w}px`;
            canvasRef.current.style.height = `${canvasSize.current.h}px`;

            context.current.scale(dpr, dpr);
        }
    };

    const initParticles = () => {
        particles.current = [];

        for (let i = 0; i < quantity; i++) {
            const x = Math.random() * canvasSize.current.w;
            const y = Math.random() * canvasSize.current.h;
            const size = Math.random() * particleSize + 0.5;

            const speedMultiplier = Math.random() * (maxSpeed - minSpeed) + minSpeed;
            const speedX = (Math.random() - 0.5) * speedMultiplier;
            const speedY = (Math.random() - 0.5) * speedMultiplier;

            particles.current.push({
                x,
                y,
                size,
                speedX,
                speedY,
                color: currentColor,
            });
        }
    };

    const onMouseMove = (e: MouseEvent) => {
        if (canvasContainerRef.current) {
            const rect = canvasContainerRef.current.getBoundingClientRect();
            const { w, h } = canvasSize.current;

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            if (x >= 0 && x <= w && y >= 0 && y <= h) {
                mouse.current.x = x;
                mouse.current.y = y;
            }
        }
    };

    const animate = () => {
        if (!context.current) return;

        context.current.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h);

        // Ease the mouse position
        mousePosition.current.x += (mouse.current.x - mousePosition.current.x) / ease;
        mousePosition.current.y += (mouse.current.y - mousePosition.current.y) / ease;

        // Draw connections between particles
        if (connectParticles) {
            for (let i = 0; i < particles.current.length; i++) {
                for (let j = i + 1; j < particles.current.length; j++) {
                    const p1 = particles.current[i];
                    const p2 = particles.current[j];

                    const dx = p1.x - p2.x;
                    const dy = p1.y - p2.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < connectionDistance) {
                        // Calculate opacity based on distance
                        const opacity = 1 - (distance / connectionDistance);

                        context.current.beginPath();
                        context.current.strokeStyle = `${currentColor}${Math.floor(opacity * connectionOpacity * 255).toString(16).padStart(2, '0')}`;
                        context.current.lineWidth = 0.5;
                        context.current.moveTo(p1.x, p1.y);
                        context.current.lineTo(p2.x, p2.y);
                        context.current.stroke();
                    }
                }
            }
        }

        // Update and draw particles
        particles.current.forEach((p, i) => {
            // Move particles
            p.x += p.speedX;
            p.y += p.speedY;

            // Wrap particles around canvas
            if (p.x > canvasSize.current.w) p.x = 0;
            else if (p.x < 0) p.x = canvasSize.current.w;

            if (p.y > canvasSize.current.h) p.y = 0;
            else if (p.y < 0) p.y = canvasSize.current.h;

            // Calculate distance to mouse
            const dx = mousePosition.current.x - p.x;
            const dy = mousePosition.current.y - p.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const maxDistance = 150;

            // Move particles away from mouse based on distance
            if (distance < maxDistance) {
                const angle = Math.atan2(dy, dx);
                const force = (maxDistance - distance) / maxDistance;
                const moveX = Math.cos(angle) * force * staticity;
                const moveY = Math.sin(angle) * force * staticity;

                p.x -= moveX * 0.01;
                p.y -= moveY * 0.01;
            }

            // Draw particle
            context.current!.beginPath();
            context.current!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            context.current!.fillStyle = `${p.color}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`;
            context.current!.fill();
        });

        requestAnimationFrame(animate);
    };

    return (
        <div
            className={`absolute inset-0 overflow-hidden ${className}`}
            ref={canvasContainerRef}
        >
            <canvas ref={canvasRef} className="absolute inset-0" />
        </div>
    );
} 