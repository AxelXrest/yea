import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            id: 1,
            question: 'What age groups do you serve?',
            answer: 'We serve children from ages 4 to 18. We have specialized curricula for each age group to ensure content is developmentally appropriate.',
        },
        {
            id: 2,
            question: 'How does the free trial work?',
            answer: 'Our free trial gives you 2 weeks of unlimited access to all classes and features. No credit card required. You can cancel anytime.',
        },
        {
            id: 3,
            question: 'Are the instructors certified?',
            answer: 'Yes, all our instructors are certified educators with extensive experience in their respective fields. We conduct thorough background checks for safety.',
        },
        {
            id: 4,
            question: 'What is your class schedule like?',
            answer: 'Classes are offered at multiple times throughout the day and evening to accommodate different schedules. You can view available times when signing up.',
        },
        {
            id: 5,
            question: 'Can my child learn at their own pace?',
            answer: 'Yes! While we offer live classes, we also provide recorded lessons and self-paced modules so students can learn whenever they\'re ready.',
        },
        {
            id: 6,
            question: 'How do you track progress?',
            answer: 'Parents receive weekly progress reports, and students can view their own dashboards with achievements, completed modules, and areas for growth.',
        },
    ];

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq section section-light">
            <div className="container">
                <div className="section-header fade-in-up">
                    <h2>Frequently Asked Questions</h2>
                    <p>Find answers to common questions about our platform, programs, and services.</p>
                </div>

                <div className="faq-container">
                    {faqs.map((faq, index) => (
                        <div
                            key={faq.id}
                            className={`faq-item ${openIndex === index ? 'active' : ''} fade-in-up`}
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <button
                                className="faq-question"
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={openIndex === index}
                            >
                                <span className="question-text">{faq.question}</span>
                                <span className="toggle-icon">+</span>
                            </button>

                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="faq-contact fade-in-up" style={{ animationDelay: '0.5s' }}>
                    <h3>Still have questions?</h3>
                    <p>Can't find the answer you're looking for? Please contact our support team.</p>
                    <button className="btn btn-primary">Contact Support</button>
                </div>
            </div>
        </section>
    );
};

export default FAQ;