import React from 'react';
import './Teachers.css';

const Teachers = () => {
    const teachers = [
        {
            id: 1,
            name: 'Sarah Johnson',
            role: 'Creative Writing Lead',
            emoji: '👩‍🏫',
            bio: 'Award-winning author with 15+ years of teaching experience',
        },
        {
            id: 2,
            name: 'David Chen',
            role: 'STEM Robotics Expert',
            emoji: '👨‍🏫',
            bio: 'PhD in Computer Science, passionate about tech education',
        },
        {
            id: 3,
            name: 'Emma Garcia',
            role: 'Digital Arts Instructor',
            emoji: '👩‍🎨',
            bio: 'Graphic designer and multimedia specialist',
        },
        {
            id: 4,
            name: 'Michael Torres',
            role: 'Mathematics Specialist',
            emoji: '👨‍🏫',
            bio: 'Published math educator focused on student engagement',
        },
    ];

    return (
        <section className="teachers section section-light">
            <div className="container">
                <div className="section-header fade-in-up">
                    <h2>Caring & Passionate Teachers</h2>
                    <p>Our team of dedicated educators brings expertise, enthusiasm, and genuine care for every student's success.</p>
                </div>

                <div className="teachers-grid">
                    {teachers.map((teacher, index) => (
                        <div
                            key={teacher.id}
                            className="teacher-card fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="teacher-avatar">{teacher.emoji}</div>
                            <h3>{teacher.name}</h3>
                            <p className="teacher-role">{teacher.role}</p>
                            <p className="teacher-bio">{teacher.bio}</p>
                            <button className="btn-sm">Learn More</button>
                        </div>
                    ))}
                </div>

                <div className="teachers-cta fade-in-up" style={{ animationDelay: '0.5s' }}>
                    <h3>Meet More Amazing Educators</h3>
                    <p>Explore our full team of certified and experienced instructors</p>
                    <button className="btn btn-outline">View All Teachers</button>
                </div>
            </div>
        </section>
    );
};

export default Teachers;