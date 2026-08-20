import React, { useState } from 'react';
import './Gallery.css';
import outdoorLearning from '../../assets/Gallery/766662154_17975864136087640_1016867383154150636_n..jpg';
import youngArtists from '../../assets/Gallery/742111074_17971381986087640_6969529160507688559_n..jpg';
import poolTeam from '../../assets/Gallery/766147205_17975863917087640_3616330027367717205_n..jpg';
import creativeWorkshop from '../../assets/Gallery/775280571_17978001051087640_3443872459565289741_n..jpg';
import natureWalk from '../../assets/Gallery/775213420_17977997985087640_2461788668490017299_n..jpg';
import community from '../../assets/Gallery/670236112_17958748455087640_8986407078884567280_n..jpg';
import celebration from '../../assets/Gallery/778794224_17977998066087640_8387950399133694154_n..jpg';
import discovery from '../../assets/Gallery/780702175_17978000982087640_7661009874535361218_n..jpg';

const Gallery = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const galleryItems = [
        { id: 1, category: 'activities', title: 'Outdoor discovery', image: outdoorLearning, alt: 'Children learning together outdoors' },
        { id: 2, category: 'community', title: 'A place to belong', image: community, alt: 'Young Explorers children gathered together' },
        { id: 3, category: 'activities', title: 'Creative workshops', image: creativeWorkshop, alt: 'Children taking part in a creative activity' },
        { id: 4, category: 'community', title: 'Making memories', image: celebration, alt: 'Children celebrating together' },
        { id: 5, category: 'activities', title: 'Learning in nature', image: natureWalk, alt: 'Children exploring a forest trail' },
        { id: 6, category: 'community', title: 'Growing together', image: poolTeam, alt: 'A group of children posing together outdoors' },
        { id: 7, category: 'activities', title: 'Curious hands', image: youngArtists, alt: 'Children creating art together' },
        { id: 8, category: 'activities', title: 'Big journeys', image: discovery, alt: 'Children exploring a new place' },
    ];

    const categories = ['all', 'activities', 'community'];
    const [selectedImage, setSelectedImage] = useState(null);

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
                        <button
                            key={item.id}
                            className="gallery-item fade-in-up"
                            style={{ animationDelay: `${index * 0.05}s` }}
                            onClick={() => setSelectedImage(item)}
                            aria-label={`View ${item.title}`}
                        >
                            <img src={item.image} alt={item.alt} />
                            <span className="gallery-item-overlay">
                                <small>{item.category}</small>
                                <strong>{item.title}</strong>
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {selectedImage && (
                <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label={selectedImage.title} onClick={() => setSelectedImage(null)}>
                    <button className="lightbox-close" onClick={() => setSelectedImage(null)} aria-label="Close image viewer">×</button>
                    <img src={selectedImage.image} alt={selectedImage.alt} onClick={(event) => event.stopPropagation()} />
                    <p>{selectedImage.title}</p>
                </div>
            )}
        </section>
    );
};

export default Gallery;