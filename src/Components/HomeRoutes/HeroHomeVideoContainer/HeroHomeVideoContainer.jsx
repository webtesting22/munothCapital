import React, { useEffect, useRef, useState } from "react";
import "./HeroHomeVideoContainer.css";

const HeroHomeVideoContainer = () => {
    const overlayRef = useRef(null);
    const containerRef = useRef(null);
    const videoRef = useRef(null);
    const [isIOS, setIsIOS] = useState(false);
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [autoplayAttempted, setAutoplayAttempted] = useState(false);

    // Detect iOS device
    useEffect(() => {
        const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                   (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
        setIsIOS(iOS);
    }, []);

    // Handle video autoplay and mobile-specific behavior
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const handleVideoLoad = () => {
            setVideoLoaded(true);
            
            // For mobile devices (including iOS), attempt autoplay
            if (isIOS) {
                // iOS requires user interaction, but we'll still try autoplay
                // and show play button if it fails
                attemptAutoplay();
            } else {
                // For non-iOS mobile devices, autoplay should work
                attemptAutoplay();
            }
        };

        const attemptAutoplay = async () => {
            try {
                // Ensure video is properly configured for autoplay
                video.muted = true;
                video.playsInline = true;
                video.loop = true;
                
                // Set video properties for better mobile compatibility
                video.setAttribute('webkit-playsinline', 'true');
                video.setAttribute('x5-playsinline', 'true');
                video.setAttribute('x5-video-player-type', 'h5');
                video.setAttribute('x5-video-player-fullscreen', 'false');
                
                // Try to play the video
                const playPromise = video.play();
                
                if (playPromise !== undefined) {
                    await playPromise;
                    console.log('Video autoplay successful on mobile');
                    
                    // Ensure loop is working
                    video.loop = true;
                    
                    // Hide play button overlay if it exists
                    const playOverlay = document.querySelector('.ios-play-overlay');
                    if (playOverlay) {
                        playOverlay.style.display = 'none';
                        playOverlay.classList.remove('show');
                    }
                }
            } catch (error) {
                console.log('Autoplay failed on mobile:', error);
                // If autoplay fails, show play button for iOS
                if (isIOS) {
                    showPlayButton();
                }
            }
        };

        const showPlayButton = () => {
            // Only show play button for iOS devices
            if (!isIOS) return;
            
            // Show the existing overlay
            const playOverlay = document.querySelector('.ios-play-overlay');
            if (playOverlay) {
                playOverlay.style.display = 'flex';
                playOverlay.classList.add('show');
            }
        };

        const handleUserInteraction = () => {
            if (isIOS && !autoplayAttempted) {
                setAutoplayAttempted(true);
                attemptAutoplay();
            }
        };

        // Add event listeners
        video.addEventListener('loadedmetadata', handleVideoLoad);
        video.addEventListener('canplay', handleVideoLoad);
        video.addEventListener('canplaythrough', handleVideoLoad);
        
        // Listen for user interactions to enable autoplay on iOS
        document.addEventListener('touchstart', handleUserInteraction, { once: true });
        document.addEventListener('click', handleUserInteraction, { once: true });

        // Handle video errors
        video.addEventListener('error', (e) => {
            console.error('Video error:', e);
            if (isIOS) {
                showPlayButton();
            }
        });

        // Handle video pause (iOS might pause automatically)
        video.addEventListener('pause', () => {
            if (isIOS && video.readyState >= 3) {
                // Video was paused, show play button after a delay
                setTimeout(() => {
                    if (video.paused) {
                        showPlayButton();
                    }
                }, 1000);
            }
        });

        // Ensure video keeps looping
        video.addEventListener('ended', () => {
            if (video.loop) {
                video.currentTime = 0;
                video.play().catch(() => {
                    // If autoplay fails, show play button for iOS
                    if (isIOS) {
                        showPlayButton();
                    }
                });
            }
        });

        return () => {
            video.removeEventListener('loadedmetadata', handleVideoLoad);
            video.removeEventListener('canplay', handleVideoLoad);
            video.removeEventListener('canplaythrough', handleVideoLoad);
            video.removeEventListener('error', handleUserInteraction);
            video.removeEventListener('pause', handleUserInteraction);
            video.removeEventListener('ended', handleUserInteraction);
            document.removeEventListener('touchstart', handleUserInteraction);
            document.removeEventListener('click', handleUserInteraction);
        };
    }, [isIOS, autoplayAttempted]);

    // Intersection Observer for overlay animation
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
                    <video 
                        ref={videoRef}
                        className="borderRadius40px" 
                        src="https://cdn.prod.website-files.com/66f7e75deaee2c0e17b0887d%2F66fbdf569f0fa4faa9f6126a_6563868-hd_1920_1080_25fps-transcode.mp4" 
                        autoPlay 
                        muted 
                        loop 
                        playsInline
                        preload="metadata"
                        webkit-playsinline="true"
                        x5-playsinline="true"
                        x5-video-player-type="h5"
                        x5-video-player-fullscreen="false"
                    />
                    
                    {/* iOS-specific play button overlay - only show if autoplay fails */}
                    {isIOS && (
                        <div className="ios-play-overlay" style={{ display: 'none' }}>
                            <button 
                                className="ios-play-button"
                                onClick={() => {
                                    if (videoRef.current) {
                                        videoRef.current.play();
                                        // Hide the overlay after clicking
                                        const overlay = document.querySelector('.ios-play-overlay');
                                        if (overlay) {
                                            overlay.style.display = 'none';
                                        }
                                    }
                                }}
                            >
                                ▶
                            </button>
                        </div>
                    )}
                    
                    {/* White overlay layer that slides from left to right */}
                    <div className="white-overlay" ref={overlayRef}></div>
                </div>
            </div>
        </>
    )
}

export default HeroHomeVideoContainer;