import React, { useEffect, useRef } from "react";
import "./AttachmentImages.css";

const AttachmentImages = () => {
    const imageRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!imageRef.current || !containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // Calculate how much of the component is visible in viewport
            const visiblePercentage = Math.max(0, Math.min(1,
                (viewportHeight - rect.top) / (rect.height + viewportHeight)
            ));

            // Smooth parallax effect from 0 to 100px based on visibility
            const translateY = visiblePercentage * 200;

            imageRef.current.style.transform = `translateY(${translateY}px)`;
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Component is in viewport, start parallax effect
                    handleScroll(); // Initial call
                    window.addEventListener('scroll', handleScroll);
                } else {
                    // Component is out of viewport, remove parallax effect
                    window.removeEventListener('scroll', handleScroll);
                    if (imageRef.current) {
                        imageRef.current.style.transform = 'translateY(0px)';
                    }
                }
            });
        }, {
            threshold: 0.1 // Start when 10% of component is visible
        });

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            observer.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="AttachmentImagesContainer marginTop80px" ref={containerRef}>
            <div className="paddingSide">
                <div className="AttachmentBackgroundImagesParallax">
                    <div className="TextLeftSidetop">
                        <h2>
                            <span>Connect.</span> <br />
                            <span>Clarify.</span>
                            <span>Inspire.</span>
                        </h2>
                    </div>
                    <img
                        ref={imageRef}
                        src="https://s3.ap-south-1.amazonaws.com/prepseed/prod/ldoc/media/AttachmentBack.jpg"
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}

export default AttachmentImages;