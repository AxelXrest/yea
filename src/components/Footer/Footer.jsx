import React from 'react';
import './Footer.css';
import logoMark from '../../assets/young-explorers-mark.svg';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="footer-content">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-section footer-brand fade-in-up">
                            <div className="footer-logo">
                                <img className="logo-mark" src={logoMark} alt="" />
                                <span>Young Explorers Academy</span>
                            </div>
                            <p>Inspiring young minds to explore, learn, and shine through innovative education.</p>
                            <div className="social-links">
                                <a href="#" className="social-icon">f</a>
                                <a href="#" className="social-icon">𝕏</a>
                                <a href="#" className="social-icon">in</a>
                                <a href="#" className="social-icon">ig</a>
                            </div>
                        </div>

                        <div className="footer-section fade-in-up" style={{ animationDelay: '0.1s' }}>
                            <h4>Platform</h4>
                            <ul className="footer-links">
                                <li><a href="#home">Home</a></li>
                                <li><a href="#classes">Classes</a></li>
                                <li><a href="#teachers">Teachers</a></li>
                                <li><a href="#testimonials">Testimonials</a></li>
                            </ul>
                        </div>

                        <div className="footer-section fade-in-up" style={{ animationDelay: '0.2s' }}>
                            <h4>Company</h4>
                            <ul className="footer-links">
                                <li><a href="#about">About Us</a></li>
                                <li><a href="#careers">Careers</a></li>
                                <li><a href="#blog">Blog</a></li>
                                <li><a href="#press">Press</a></li>
                            </ul>
                        </div>

                        <div className="footer-section fade-in-up" style={{ animationDelay: '0.3s' }}>
                            <h4>Legal</h4>
                            <ul className="footer-links">
                                <li><a href="#privacy">Privacy Policy</a></li>
                                <li><a href="#terms">Terms of Service</a></li>
                                <li><a href="#cookies">Cookie Policy</a></li>
                                <li><a href="#contact">Contact</a></li>
                            </ul>
                        </div>

                        <div className="footer-section fade-in-up" style={{ animationDelay: '0.4s' }}>
                            <h4>Newsletter</h4>
                            <p>Subscribe for updates and educational tips.</p>
                            <div className="newsletter-form">
                                <input type="email" placeholder="Enter your email" />
                                <button className="btn-subscribe">→</button>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom">
                        <p>&copy; 2024 Young Explorers Academy. All rights reserved. Designed for curious minds.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;