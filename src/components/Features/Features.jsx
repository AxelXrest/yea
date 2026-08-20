import React from 'react';
import './Features.css';

const Features = () => {
    const features = [
        {
            id: 1,
            icon: '🎯',
            title: 'Personalized Learning',
            description: 'Each child learns at their own pace with customized curriculum tailored to their unique needs.',
        },
        {
            id: 2,
            icon: '👨‍🏫',
            title: 'Expert Instructors',
            description: 'Learn from experienced educators who are passionate about fostering creativity and critical thinking.',
        },
        {
            id: 3,
            icon: '🌍',
            title: 'Global Community',
            description: 'Connect with learners from around the world and broaden your perspective through cultural exchange.',
        },
        {
            id: 4,
            icon: '🏆',
            title: 'Proven Results',
            description: 'Our students consistently show improvement in academic performance and confidence levels.',
        },
        {
            id: 5,
            icon: '💡',
            title: 'Creative Expression',
            description: 'Encourage imagination and innovation through hands-on projects and interactive learning experiences.',
        },
        {
            id: 6,
            icon: '📱',
            title: 'Learning Anywhere',
            description: 'Access quality education anytime, anywhere with our flexible online platform and mobile app.',
        },
    ];

    return (
        <section className="features section section-light" id="services">
            <div className="container">
                <div className="section-header fade-in-up">
                    <h2>Why Choose Our Platform</h2>
                    <p>We combine cutting-edge technology with proven teaching methods to create an exceptional learning experience.</p>
                </div>

                <div className="features-grid grid grid-3">
                    {features.map((feature, index) => (
                        <div
                            key={feature.id}
                            className="feature-card fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;