import React, { useState } from 'react';
import './Gallery.css';

const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const galleryItems = [
        { id: 1, category: 'activities', title: 'Robotics Challenge', icon: '🤖' },
        { id: 2, category: 'events', title: 'Learning Showcase', icon: '🎉' },
        { id: 3, category: 'activities', title: 'Creative Workshop', icon: '🎨' },
        { id: 4, category: 'events', title: 'Science Fair', icon: '🔬' },
        { id: 5, category: 'activities', title: 'Digital Creation', icon: '💻' },
        { id: 6, category: 'events', title: 'Book Club Meeting', icon: '📚' },
        { id: 7, category: 'activities', title: 'Team Building', icon: '👥' },
        { id: 8, category: 'events', title: 'Talent Show', icon: '⭐' },
    ];

    const categories = ['all', 'activities', 'events'];

    const filteredItems =
        selectedCategory === 'all'
            ? galleryItems
            : galleryItems.filter((item) => item.category === selectedCategory);

    return (
        <section className="gallery section section-white">
            <div className="container">
                <div className="section-header fade-in-up">
                    <h2>Gallery & Learning Moments</h2>
                    <p>See the amazing activities and achievements of our students</p>
                </div>

                <div className="gallery-filters fade-in-up" style={{ animationDelay: '0.2s' }}>
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </div>

                <div className="gallery-grid">
                    {filteredItems.map((item, index) => (
                        <div
                            key={item.id}
                            className="gallery-item fade-in-up"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <div className="gallery-item-content">
                                <div className="gallery-icon">{item.icon}</div>
                                <h3>{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;