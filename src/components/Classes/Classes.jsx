import React from 'react';
import './Classes.css';

const Classes = () => {
    const classes = [
        {
            id: 1,
            title: 'Creative Writing',
            category: 'Language Arts',
            image: '📝',
            description: 'Develop storytelling skills and creative expression',
            level: 'All Ages',
        },
        {
            id: 2,
            title: 'STEM Robotics',
            category: 'Technology',
            image: '🤖',
            description: 'Build and program robots to solve real-world challenges',
            level: 'Ages 8-16',
        },
        {
            id: 3,
            title: 'Digital Art',
            category: 'Arts',
            image: '🎨',
            description: 'Master digital design and illustration techniques',
            level: 'All Ages',
        },
        {
            id: 4,
            title: 'Mathematics Mastery',
            category: 'Science',
            image: '📐',
            description: 'Build mathematical confidence through interactive lessons',
            level: 'Ages 6-18',
        },
        {
            id: 5,
            title: 'Language Learning',
            category: 'Languages',
            image: '🌐',
            description: 'Learn Spanish, French, Mandarin and more interactively',
            level: 'All Ages',
        },
        {
            id: 6,
            title: 'Music Production',
            category: 'Music',
            image: '🎵',
            description: 'Create, produce, and share your own music compositions',
            level: 'Ages 12+',
        },
    ];

    return (
        <section className="classes section section-white" id="classes">
            <div className="container">
                <div className="section-header fade-in-up">
                    <h2>Fun & Engaging Classes for Every Age</h2>
                    <p>Discover our diverse range of classes designed to spark creativity and build essential skills.</p>
                </div>

                <div className="classes-grid grid grid-3">
                    {classes.map((cls, index) => (
                        <div
                            key={cls.id}
                            className="class-card fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="class-image">{cls.image}</div>
                            <div className="class-category">{cls.category}</div>
                            <h3>{cls.title}</h3>
                            <p>{cls.description}</p>
                            <div className="class-footer">
                                <span className="class-level">{cls.level}</span>
                                <button className="btn-icon">→</button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="classes-cta fade-in-up" style={{ animationDelay: '0.8s' }}>
                    <h3>Ready to get started?</h3>
                    <button className="btn btn-primary">Explore All Classes</button>
                </div>
            </div>
        </section>
    );
};

export default Classes;