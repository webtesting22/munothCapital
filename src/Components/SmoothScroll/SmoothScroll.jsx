import React from 'react';
import { motion } from 'framer-motion';

const SmoothScroll = ({ children, className = "", ...props }) => {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ 
                duration: 0.6, 
                ease: "easeOut",
                staggerChildren: 0.1
            }}
            {...props}
        >
            {children}
        </motion.div>
    );
};

export default SmoothScroll;
