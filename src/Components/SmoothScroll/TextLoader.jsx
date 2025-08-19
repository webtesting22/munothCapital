import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TextLoader = ({ 
    children, 
    className = "", 
    loading = false, 
    skeletonLines = 3,
    skeletonHeight = 20,
    skeletonGap = 8,
    loadingDelay = 300,
    ...props 
}) => {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
        if (!loading) {
            const timer = setTimeout(() => {
                setShowContent(true);
            }, loadingDelay);
            return () => clearTimeout(timer);
        } else {
            setShowContent(false);
        }
    }, [loading, loadingDelay]);

    const skeletonVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: "easeOut"
            }
        })
    };

    const contentVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    if (loading) {
        return (
            <div className={`text-loader-skeleton ${className}`} {...props}>
                {Array.from({ length: skeletonLines }).map((_, index) => (
                    <motion.div
                        key={index}
                        custom={index}
                        variants={skeletonVariants}
                        initial="hidden"
                        animate="visible"
                        style={{
                            height: skeletonHeight,
                            background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
                            backgroundSize: '200% 100%',
                            borderRadius: '4px',
                            marginBottom: index < skeletonLines - 1 ? skeletonGap : 0,
                            animation: 'shimmer 1.5s infinite'
                        }}
                    />
                ))}
            </div>
        );
    }

    return (
        <AnimatePresence mode="wait">
            {showContent && (
                <motion.div
                    className={`text-loader-content ${className}`}
                    variants={contentVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    {...props}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default TextLoader;
