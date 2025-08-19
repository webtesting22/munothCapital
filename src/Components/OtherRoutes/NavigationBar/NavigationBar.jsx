import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

    return (
        <nav className={`navigation-bar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="nav-container">
                {/* Logo Section */}
                <div className="nav-logo">
                   <Link to="/"> <img 
                        src={companyInfo.logoIcon} 
                        alt={companyInfo.name} 
                        className="logo-icon"
                    /></Link>
                    {/* <span className="logo-text">{companyInfo.name}</span> */}
                </div>

                {/* Desktop Navigation Links */}
                <div className="nav-links">
                    {navigationData.map((item) => (
                        <Link
                            key={item.id}
                            to={item.path}
                            className="nav-link"
                            title={item.description}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="nav-cta">
                    <Link to={companyInfo.ctaButton.path} className="cta-button">
                        <div className="cta-icon">
                            <span className="arrow-icon">→</span>
                        </div>
                        <span className="cta-text">{companyInfo.ctaButton.text}</span>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
                    <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                {navigationData.map((item) => (
                    <Link
                        key={`mobile-${item.id}`}
                        to={item.path}
                        className="mobile-nav-link"
                        title={item.description}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {item.title}
                    </Link>
                ))}
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
            </div>
        </nav>
    );
};

export default NavigationBar;