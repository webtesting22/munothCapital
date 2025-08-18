import React, { useEffect, useRef } from "react";
import "./HeroHomeVideoContainer.css";

const HeroHomeVideoContainer = () => {
    const overlayRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Component is in viewport, start white overlay slide animation from left to right
                    if (overlayRef.current) {
                        overlayRef.current.style.transform = 'translateX(100%)';
                        overlayRef.current.style.transition = 'transform 1.5s ease-in-out';
                    }
                } else {
                    // Component is out of viewport, reset overlay to left position
                    if (overlayRef.current) {
                        overlayRef.current.style.transform = 'translateX(0%)';
                        overlayRef.current.style.transition = 'none';
                    }
                }
            });
        }, {
            threshold: 0.1, // Start when 10% of component is visible
            rootMargin: '0px 0px -50px 0px' // Start animation slightly before fully in view
        });

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <>
            <div className="paddingSide marginTop80px" ref={containerRef}>
                <div className="VideoContainerHeroHome">
                    <video className="borderRadius40px" src="https://cdn.prod.website-files.com/66f7e75deaee2c0e17b0887d%2F66fbdf569f0fa4faa9f6126a_6563868-hd_1920_1080_25fps-transcode.mp4" autoPlay muted loop />
                    {/* White overlay layer that slides from left to right */}
                    <div className="white-overlay" ref={overlayRef}></div>
                </div>
            </div>
        </>
    )
}

export default HeroHomeVideoContainer;