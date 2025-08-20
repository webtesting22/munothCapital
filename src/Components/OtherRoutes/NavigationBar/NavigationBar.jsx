import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { navigationData, companyInfo } from './NavigationData';
import './NavigationBar.css';

const NavigationBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const scrolled = scrollPosition > 100;
            setIsScrolled(scrolled);

            // Add/remove body class for proper spacing
            if (scrolled) {
                document.body.classList.add('nav-sticky');
            } else {
                document.body.classList.remove('nav-sticky');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            // Clean up body class when component unmounts
            document.body.classList.remove('nav-sticky');
        };
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const MobileNumber = "919033003188"

    return (
        <nav className={`navigation-bar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-container Container">
                {/* Logo Section */}
                <motion.div
                    className="nav-logo"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <Link to="/"> <img
                        src={companyInfo.logoIcon}
                        alt={companyInfo.name}
                        className="logo-icon"
                    /></Link>
                    {/* <span className="logo-text">{companyInfo.name}</span> */}
                </motion.div>

                {/* Desktop Navigation Links */}
                <motion.div
                    className="nav-links"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                >
                    {navigationData.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.3 + (index * 0.1),
                                ease: "easeOut"
                            }}
                        >
                            <Link
                                to={item.path}
                                className="nav-link"
                                title={item.description}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.title}
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    className="nav-cta"
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                >
                    <Link to={companyInfo.ctaButton.path} className="cta-button">
                        <div className="cta-icon">
                            <span className="arrow-icon">→</span>
                        </div>
                        <span className="cta-text">{companyInfo.ctaButton.text}</span>
                    </Link>
                </motion.div>

                {/* Mobile Menu Button */}
                <motion.button
                    className="mobile-menu-btn"
                    onClick={toggleMobileMenu}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></span>
                    <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></span>
                </motion.button>
            </div>

            {/* Mobile Navigation Menu */}
            <motion.div
                className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{
                    opacity: isMobileMenuOpen ? 1 : 0,
                    y: isMobileMenuOpen ? 0 : -20
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
            >
                {navigationData.map((item, index) => (
                    <motion.div
                        key={`mobile-${item.id}`}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{
                            opacity: isMobileMenuOpen ? 1 : 0,
                            x: isMobileMenuOpen ? 0 : -20
                        }}
                        transition={{
                            duration: 0.4,
                            delay: index * 0.1,
                            ease: "easeOut"
                        }}
                    >
                        <Link
                            to={item.path}
                            className="mobile-nav-link"
                            title={item.description}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item.title}
                        </Link>
                    </motion.div>
                ))}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                        opacity: isMobileMenuOpen ? 1 : 0,
                        x: isMobileMenuOpen ? 0 : -20
                    }}
                    transition={{
                        duration: 0.4,
                        delay: navigationData.length * 0.1,
                        ease: "easeOut"
                    }}
                >
                    <Link
                        to={companyInfo.ctaButton.path}
                        className="mobile-cta-button"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <div className="cta-icon">
                            <span className="arrow-icon">→</span>
                        </div>
                        <span className="cta-text">{companyInfo.ctaButton.text}</span>
                    </Link>
                </motion.div>
            </motion.div>
        </nav>
    );
};

export default NavigationBar;