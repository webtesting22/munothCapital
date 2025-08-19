import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaImage, FaSpinner } from 'react-icons/fa';

const ImageLoader = ({ 
    src, 
    alt, 
    className = "", 
    fallbackSrc = null,
    loadingDelay = 500,
    ...props 
}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setIsLoading(false);
        setImageLoaded(true);
    };

    const handleImageError = () => {
        setIsLoading(false);
        setHasError(true);
    };

    return (
        <div className={`image-loader-container ${className}`} style={{ position: 'relative' }}>
            {/* Loading State */}
            <AnimatePresence>
                {isLoading && (
                    <motion.div
                        className="image-loading-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'linear-gradient(135deg, #f3f4f6, #e5e7eb)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 'inherit',
                            zIndex: 1
                        }}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '10px'
                            }}
                        >
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            >
                                <FaSpinner style={{ fontSize: '24px', color: '#6b7280' }} />
                            </motion.div>
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                                style={{ 
                                    fontSize: '12px', 
                                    color: '#6b7280',
                                    fontWeight: '500'
                                }}
                            >
                                Loading...
                            </motion.span>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Error State */}
            <AnimatePresence>
                {hasError && (
                    <motion.div
                        className="image-error-overlay"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: 'linear-gradient(135deg, #fef2f2, #fee2e2)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 'inherit',
                            zIndex: 1
                        }}
                    >
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '10px'
                            }}
                        >
                            <FaImage style={{ fontSize: '32px', color: '#ef4444' }} />
                            <span style={{ 
                                fontSize: '12px', 
                                color: '#dc2626',
                                fontWeight: '500',
                                textAlign: 'center'
                            }}>
                                Image failed to load
                            </span>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Actual Image */}
            <motion.img
                src={hasError && fallbackSrc ? fallbackSrc : src}
                alt={alt}
                onLoad={handleImageLoad}
                onError={handleImageError}
                style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: 'inherit'
                }}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ 
                    opacity: imageLoaded ? 1 : 0, 
                    scale: imageLoaded ? 1 : 1.1 
                }}
                transition={{ 
                    duration: 0.6, 
                    ease: "easeOut",
                    delay: loadingDelay / 1000
                }}
                {...props}
            />
        </div>
    );
};

export default ImageLoader;
