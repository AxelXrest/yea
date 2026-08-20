import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            quote: 'My daughter has become more confident and engaged with learning. The interactive lessons make education fun!',
            author: 'Maria Rodriguez',
            role: 'Parent of Sophie, Age 8',
            avatar: '👩‍🦰',
            rating: 5,
        },
        {
            id: 2,
            quote: 'The teachers are amazing! They really care about each student\'s progress. I\'ve learned so much and had fun doing it.',
            author: 'James Williams',
            role: 'Student, Age 12',
            avatar: '👦',
            rating: 5,
        },
        {
            id: 3,
            quote: 'Young Explorers has transformed how my son approaches learning. He actually looks forward to class time!',
            author: 'David Lee',
            role: 'Parent of Noah, Age 10',
            avatar: '👨',
            rating: 5,
        },
        {
            id: 4,
            quote: 'The personalized learning paths help me focus on what I need to improve. Highly recommended!',
            author: 'Aisha Patel',
            role: 'Student, Age 14',
            avatar: '👩',
            rating: 5,
        },
    ];

    return (
        <section className="testimonials section section-white" id="testimonials">
            <div className="container">
                <div className="section-header fade-in-up">
                    <h2>What Parents Say About Young Explorers</h2>
                    <p>Join thousands of satisfied families who have seen real results in their children's learning and confidence.</p>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className="testimonial-card fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="testimonial-header">
                                <div className="testimonial-avatar">{testimonial.avatar}</div>
                                <div>
                                    <h4>{testimonial.author}</h4>
                                    <p className="testimonial-role">{testimonial.role}</p>
                                </div>
                            </div>

                            <div className="testimonial-rating">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <span key={i} className="star">⭐</span>
                                ))}
                            </div>

                            <p className="testimonial-quote">"{testimonial.quote}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;