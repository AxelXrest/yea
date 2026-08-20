import React from 'react';
import './Learning.css';

const Learning = () => {
    const methods = [
        {
            id: 1,
            icon: '🎬',
            title: 'Interactive Videos',
            description: 'Engaging video content with interactive elements and real-world applications',
        },
        {
            id: 2,
            icon: '🎮',
            title: 'Gamified Learning',
            description: 'Learn through fun games and challenges that reward progress and achievement',
        },
        {
            id: 3,
            icon: '🤝',
            title: 'Live Sessions',
            description: 'Connect with instructors and peers in real-time interactive learning sessions',
        },
        {
            id: 4,
            icon: '📊',
            title: 'Progress Tracking',
            description: 'Detailed analytics help students see their growth and areas for improvement',
        },
        {
            id: 5,
            icon: '🎯',
            title: 'Personalized Goals',
            description: 'AI-powered recommendations create custom learning paths for each student',
        },
        {
            id: 6,
            icon: '🏅',
            title: 'Badges & Rewards',
            description: 'Earn certificates and badges as you complete courses and achieve milestones',
        },
    ];

    return (
        <section className="learning section section-white" id="learning">
            <div className="container">
                <div className="section-header fade-in-up">
                    <h2>Learning Through Fun, Play, and Creativity</h2>
                    <p>Our multi-sensory approach combines different learning methods to engage every student's unique learning style.</p>
                </div>

                <div className="methods-grid">
                    {methods.map((method, index) => (
                        <div
                            key={method.id}
                            className="method-card fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="method-header">
                                <div className="method-icon">{method.icon}</div>
                                <h3>{method.title}</h3>
                            </div>
                            <p>{method.description}</p>
                        </div>
                    ))}
                </div>

                <div className="learning-cta fade-in-up" style={{ animationDelay: '0.8s' }}>
                    <div className="cta-content">
                        <h3>Start Your Learning Journey Today</h3>
                        <p>Join thousands of students who are already discovering their potential through our innovative platform.</p>
                        <button className="btn btn-primary">Start Free Trial Now</button>
                    </div>
                    <div className="cta-decoration">
                        <div className="decoration-item">📚</div>
                        <div className="decoration-item">💡</div>
                        <div className="decoration-item">🌟</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Learning;