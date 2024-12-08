import React, { useState } from 'react';
import '../../styles/Events.scss';

const eventsData = [
    {
        title: 'Новый Год',
        description: 'Провожаем 2024 красиво! Приглашаем на тематическую вечеринку. Конкурсы, настолки, веселье и конечно же - подарки от Деда Мороза. Приходите 29.12.2024 в 19:00. Стоимость входа - 400 рублей.',
        image: '../src/assets/images/EventsNewYear.jpg',
    },
    {
        title: 'Мастер-класс по настольным играм',
        description: 'Научитесь новым стратегиям и тактикам, которые помогут вам стать настоящим мастером настольных игр. Приходите 15.01.2025 в 18:00. Стоимость входа - 400 рублей.',
        image: '../src/assets/images/Masterclass.jpg',
    },
    {
        title: 'Семена Зла',
        description: 'Мутанты атакуют! После Великой Катастрофы выжившие мутанты пытаются захватить последний оплот человечества - Ковчег. Старик, последний хранитель старого мира, призывает вас на помощь, чтобы отразить натиск Семян Зла! Сразитесь с растительными монстрами, используя свои сверхспособности, и спасите Ковчег! Приходите 25.01 в 16:00. Стоимость участия - 500 рублей (Для новичков - 690 рублей).',
        image: '../src/assets/images/SeedsEvil.jpg',
    },
];

const Events = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [notification, setNotification] = useState('');

    const nextEvent = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % eventsData.length);
    };

    const prevEvent = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + eventsData.length) % eventsData.length);
    };

    const handleSignUp = () => {
        setNotification(`Вы записались на "${eventsData[currentIndex].title}", ждем вас в гости!`);
        setTimeout(() => {
            setNotification('');
        }, 3000);
    };

    return (
        <section className="events-section">
            <h2 className="events-title">Предстоящие события</h2>
            <div className="event-container">
                <button className="arrow left" onClick={prevEvent}>←</button>
                <div className="event">
                    <div className="event-image-container">
                        <img src={eventsData[currentIndex].image} alt="Событие" className="event-image" />
                    </div>
                    <div className="event-details-container">
                        <h3 className="event-title">{eventsData[currentIndex].title}</h3>
                        <p className="event-details">{eventsData[currentIndex].description}</p>
                        <button className="signup-button" onClick={handleSignUp}>Хочу принять участие</button>
                    </div>
                </div>
                <button className="arrow right" onClick={nextEvent}>→</button>
            </div>
            {notification && (
                <div className="notification-modal">
                    <p>{notification}</p>
                </div>
            )}
        </section>
    );
};

export default Events;