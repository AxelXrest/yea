import React from 'react';
import './Hero.css';
import groupPhoto from '../../assets/Gallery/766147205_17975863917087640_3616330027367717205_n..jpg';

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
                        <img src={groupPhoto} alt="Young Explorers students enjoying a group activity by the pool" />
                        <div className="hero-image-caption">
                            <span className="caption-kicker">Explore together</span>
                            <strong>Curiosity grows<br />when we learn outside.</strong>
                            <span className="caption-meta">Hands-on learning for curious minds</span>
                        </div>
                        <div className="hero-image-badge">Learn · Connect · Discover</div>
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