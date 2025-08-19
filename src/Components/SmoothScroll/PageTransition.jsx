import React from 'react';
import { motion } from 'framer-motion';

const PageTransition = ({ 
    children, 
    className = "",
    initialDelay = 0,
    ...props 
}) => {
    const pageVariants = {
        initial: {
            opacity: 0,
            y: 20,
            scale: 0.98
        },
        in: {
            opacity: 1,
            y: 0,
            scale: 1
        },
        out: {
            opacity: 0,
            y: -20,
            scale: 0.98
        }
    };

    const pageTransition = {
        type: "tween",
        ease: "anticipate",
        duration: 0.6,
        delay: initialDelay
    };

    return (
        <motion.div
            className={`page-transition ${className}`}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;
