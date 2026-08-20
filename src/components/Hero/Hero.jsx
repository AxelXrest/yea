import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text fade-in-up">
                        <h1>Inspiring Young Minds to Explore And Shine</h1>
                        <p>Transform your child's learning journey with our innovative educational platform designed to spark curiosity and build confidence in every student.</p>
                        <div className="hero-actions">
                            <button className="btn btn-primary">Start Free Trial</button>
                            <button className="btn btn-outline">Learn More</button>
                        </div>
                    </div>

                    <div className="hero-image slide-in-right">
                        <div className="image-placeholder">
                            <div className="placeholder-content">
                                <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="200" cy="200" r="180" fill="#FFE5B4"/>
                                    <circle cx="200" cy="120" r="50" fill="#FFD7A8"/>
                                    <circle cx="185" cy="110" r="6" fill="#333"/>
                                    <circle cx="215" cy="110" r="6" fill="#333"/>
                                    <path d="M 185 130 Q 200 140 215 130" stroke="#333" strokeWidth="2" fill="none"/>
                                    <rect x="160" y="170" width="80" height="60" fill="#FF6B6B" rx="10"/>
                                    <rect x="100" y="175" width="60" height="20" fill="#FFD7A8" rx="10"/>
                                    <rect x="240" y="175" width="60" height="20" fill="#FFD7A8" rx="10"/>
                                    <rect x="175" y="230" width="15" height="50" fill="#FFD7A8" rx="8"/>
                                    <rect x="210" y="230" width="15" height="50" fill="#FFD7A8" rx="8"/>
                                    <rect x="290" y="150" width="20" height="40" fill="#FFD7A8" rx="10"/>
                                    <circle cx="305" cy="135" r="12" fill="#FFD7A8"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hero-stats">
                    <div className="stat-item fade-in-up">
                        <div className="stat-number">500+</div>
                        <div className="stat-label">Happy Families</div>
                    </div>
                    <div className="stat-item fade-in-up" style={{ animationDelay: '0.2s' }}>
                        <div className="stat-number">100+</div>
                        <div className="stat-label">Expert Teachers</div>
                    </div>
                    <div className="stat-item fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <div className="stat-number">50+</div>
                        <div className="stat-label">Unique Classes</div>
                    </div>
                    <div className="stat-item fade-in-up" style={{ animationDelay: '0.6s' }}>
                        <div className="stat-number">98%</div>
                        <div className="stat-label">Success Rate</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;