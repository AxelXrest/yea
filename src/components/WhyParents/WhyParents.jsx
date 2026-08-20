import React from 'react';
import './WhyParents.css';

const WhyParents = () => {
    const reasons = [
        {
            icon: '👶',
            title: 'Developmentally Appropriate',
            description: 'Our curriculum is designed by child development experts to match each age group\'s learning needs.',
        },
        {
            icon: '🛡️',
            title: 'Safe & Secure Platform',
            description: 'We prioritize your child\'s safety with strict privacy controls and secure online learning environments.',
        },
        {
            icon: '👨‍👩‍👧',
            title: 'Family-Focused Approach',
            description: 'Regular progress reports and family activities strengthen bonds while supporting learning.',
        },
        {
            icon: '💪',
            title: 'Builds Confidence',
            description: 'Through positive reinforcement and achievable goals, we help children develop self-esteem.',
        },
    ];

    return (
        <section className="why-parents section section-light">
            <div className="container">
                <div className="why-parents-content">
                    <div className="why-parents-text fade-in-up">
                        <h2>Why Parents Trust Elevate for Early Learning</h2>
                        <p>We understand that choosing an educational platform for your child is an important decision. That's why we focus on creating a nurturing, safe, and effective learning environment.</p>

                        <div className="reasons-list">
                            {reasons.map((reason, index) => (
                                <div key={index} className="reason-item fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                    <div className="reason-icon">{reason.icon}</div>
                                    <div className="reason-content">
                                        <h4>{reason.title}</h4>
                                        <p>{reason.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="btn btn-primary">Learn More About Our Approach</button>
                    </div>

                    <div className="why-parents-image slide-in-right">
                        <div className="image-placeholder-alt">
                            <div className="family-illustration">
                                <div className="person person-1">👨</div>
                                <div className="person person-2">👩</div>
                                <div className="person person-3">👧</div>
                                <div className="person person-4">👦</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyParents;