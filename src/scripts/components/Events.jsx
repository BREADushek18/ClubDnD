import React, { useState } from 'react';
import '../../styles/Events.scss';

const eventsData = [
    {
        image: '../src/assets/images/HeroImageBack.jpg',
        description: 'Пример описания пример описания пример описания пример описания пример описания пример описания пример описания пример описания пример описания ',
    },
    {
        image: '../src/assets/images/BackCardTest1.jpg',
        description: 'Пример описания пример описания пример описания пример описания пример описания пример описания пример описания пример описания пример описания ',
    },
    {
        image: '../src/assets/images/BackCardTest2.jpg',
        description: 'Пример описания пример описания пример описания пример описания пример описания пример описания пример описания пример описания пример описания ',
    },
];

const Events = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextEvent = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % eventsData.length);
    };

    const prevEvent = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + eventsData.length) % eventsData.length);
    };

    const handleSignUp = () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="events-section">
            <h2 className="events-title">Предстоящие события</h2>
            <div className="event-container">
                <button className="arrow left" onClick={prevEvent}>←</button>
                <div className="event">
                    <img src={eventsData[currentIndex].image} alt="Событие" className="event-image" />
                    <div className="event-description">
                        <p>{eventsData[currentIndex].description}</p>
                        <button className="signup-button" onClick={handleSignUp}>Хочу записаться</button>
                    </div>
                </div>
                <button className="arrow right" onClick={nextEvent}>→</button>
            </div>
        </section>
    );
};

export default Events;
