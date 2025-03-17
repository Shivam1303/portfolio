"use client";

import { motion, useInView, useAnimation, Variant } from "framer-motion";
import { useEffect, useRef, ReactNode } from "react";

type ScrollAnimationProps = {
    children: ReactNode;
    variants?: {
        hidden: Variant;
        visible: Variant;
    };
    className?: string;
    viewportAmount?: number;
    delay?: number;
};

const defaultVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

export function ScrollAnimation({
    children,
    variants = defaultVariants,
    className = "",
    viewportAmount = 0.2,
    delay = 0
}: ScrollAnimationProps) {
    const controls = useAnimation();
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { amount: viewportAmount, once: true });

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [isInView, controls]);

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
            className={className}
            style={{ willChange: "opacity, transform" }}
            transition={{ delay }}
        >
            {children}
        </motion.div>
    );
}

export function StaggeredScrollAnimation({
    children,
    staggerDelay = 0.1,
    ...props
}: ScrollAnimationProps & { staggerDelay?: number; }) {
    return (
        <>
            {Array.isArray(children) ?
                children.map((child, index) => (
                    <ScrollAnimation key={index} delay={index * staggerDelay} {...props}>
                        {child}
                    </ScrollAnimation>
                )) :
                <ScrollAnimation {...props}>{children}</ScrollAnimation>
            }
        </>
    );
} 