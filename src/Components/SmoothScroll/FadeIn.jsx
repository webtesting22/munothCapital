import React from 'react';
import { motion } from 'framer-motion';

const FadeIn = ({ 
    children, 
    className = "", 
    direction = "up", 
    delay = 0, 
    duration = 0.6,
    ...props 
}) => {
    const getDirectionalVariants = (dir) => {
        switch (dir) {
            case "up":
                return { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
            case "down":
                return { hidden: { opacity: 0, y: -30 }, visible: { opacity: 1, y: 0 } };
            case "left":
                return { hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } };
            case "right":
                return { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } };
            case "scale":
                return { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } };
            default:
                return { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };
        }
    };

    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={getDirectionalVariants(direction)}
            transition={{ 
                duration, 
                delay,
                ease: "easeOut"
            }}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default FadeIn;
