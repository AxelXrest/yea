import React from 'react';
import './Stats.css';

const Stats = () => {
    const stats = [
        { number: '5000+', label: 'Active Students' },
        { number: '150+', label: 'Online Classes' },
        { number: '98%', label: 'Parent Satisfaction' },
        { number: '30%', label: 'Academic Growth' },
    ];

    return (
        <section className="stats section section-white">
            <div className="container">
                <div className="stats-grid">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-card fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
                            <div className="stat-value">{stat.number}</div>
                            <div className="stat-text">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;