"use client";

import { useEffect } from "react";

export function MagneticEffect() {
    useEffect(() => {
        const magneticElements = document.querySelectorAll('a, button, [role="button"]');
        const magneticStrength = 0.5;

        const handleMouseMove = (e: MouseEvent, element: Element) => {
            const rect = element.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const distanceX = e.clientX - centerX;
            const distanceY = e.clientY - centerY;
            const pull = 20 * magneticStrength;
            (element as HTMLElement).style.transform =
                `translate(${distanceX / pull}px, ${distanceY / pull}px)`;
        };

        const handleMouseLeave = (element: Element) => {
            (element as HTMLElement).style.transform = "";
        };

        magneticElements.forEach(element => {
            const moveHandler = (e: MouseEvent) => handleMouseMove(e, element);
            const leaveHandler = () => handleMouseLeave(element);

            element.addEventListener("mousemove", moveHandler as EventListener);
            element.addEventListener("mouseleave", leaveHandler);

            // Store handlers as properties on the element for cleanup
            interface ExtendedElement extends Element {
                _magneticMoveHandler?: EventListener;
                _magneticLeaveHandler?: EventListener;
            }
            const extendedElement = element as ExtendedElement;
            extendedElement._magneticMoveHandler = moveHandler as EventListener;
            extendedElement._magneticLeaveHandler = leaveHandler;
        });

        return () => {
            magneticElements.forEach(element => {
                interface ExtendedElement extends Element {
                    _magneticMoveHandler?: EventListener;
                    _magneticLeaveHandler?: EventListener;
                }
                const extendedElement = element as ExtendedElement;
                if (extendedElement._magneticMoveHandler) {
                    element.removeEventListener("mousemove", extendedElement._magneticMoveHandler);
                }
                if (extendedElement._magneticLeaveHandler) {
                    element.removeEventListener("mouseleave", extendedElement._magneticLeaveHandler);
                }
            });
        };
    }, []);

    return null;
} 