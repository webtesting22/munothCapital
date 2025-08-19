import React from 'react';
import { motion } from 'framer-motion';

const StaggeredChildren = ({ children, className = "", staggerDelay = 0.1, ...props }) => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            className={className}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            {...props}
        >
            {React.Children.map(children, (child, index) => (
                <motion.div
                    key={index}
                    variants={itemVariants}
                    custom={index}
                >
                    {child}
                </motion.div>
            ))}
        </motion.div>
    );
};

export default StaggeredChildren;
