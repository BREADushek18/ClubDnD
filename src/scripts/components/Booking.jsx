import React, { useState } from 'react';
import { gamesList } from '../games';
import '../../styles/Booking.scss';
import { sendEmail } from './mailer';

const Booking = () => {
    const [room, setRoom] = useState('');
    const [master, setMaster] = useState('');
    const [game, setGame] = useState('');
    const [playerCount, setPlayerCount] = useState('');
    const [availableGames, setAvailableGames] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState('');
    const [notification, setNotification] = useState('');

    const rooms = ['Общий зал', 'Комната "Лес"', 'Комната "Подземелье"', 'Комната "Космос"', 'Бронь общего зала'];
    const masters = ['Без мастера', 'Мастер Петр', 'Мастер Миша'];

    const handleGameInput = (e) => {
        const inputValue = e.target.value;
        setGame(inputValue);
        if (inputValue) {
            const filteredGames = gamesList.filter((g) => g.toLowerCase().includes(inputValue.toLowerCase()));
            setAvailableGames(filteredGames);
        } else {
            setAvailableGames([]);
        }
    };

    const handleDateClick = (date) => {
        if (date.getDay() !== 1) { 
            setSelectedDate(date);
        } else {
            setSelectedDate(null);
            setSelectedTime('');
        }
    };

    const renderCalendar = () => {
        const today = new Date();
        const dates = [];
        for (let i = 0; i < 30; i++) {
            const nextDate = new Date(today);
            nextDate.setDate(today.getDate() + i);
            dates.push(nextDate);
        }
        const firstDayOfWeek = new Date(today);
        firstDayOfWeek.setDate(today.getDate() - today.getDay()); 
    
        return (
            <div>
                <div className="day-labels">
                    <span>ПН</span>
                    <span>ВТ</span>
                    <span>СР</span>
                    <span>ЧТ</span>
                    <span>ПТ</span>
                    <span>СБ</span>
                    <span>ВС</span>
                </div>
                <div className="date-buttons">
                    {Array.from({ length: 30 }).map((_, index) => {
                        const date = new Date(firstDayOfWeek);
                        date.setDate(firstDayOfWeek.getDate() + index);
                        const isDisabled = date.getDay() === 1; 
                        const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
                        return (
                            <button
                                key={index}
                                className={`date-button ${isSelected ? 'selected' : ''} ${isDisabled ? 'disabled' : ''}`}
                                onClick={() => !isDisabled && handleDateClick(date)}
                                disabled={isDisabled}
                            >
                                {date.getDate()}
                            </button>
                        );
                    })}
                </div>
            </div>
        );
    };

    const handleTimeChange = (e) => {
        setSelectedTime(e.target.value);
    };

    const getAvailableTimes = () => {
        const times = [];
        const startHour = selectedDate.getDay() === 6 || selectedDate.getDay() === 0 ? 14 : 18; 
        for (let hour = startHour; hour < 23; hour++) {
            for (let minute = 0; minute < 60; minute += 30) {
                times.push(`${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`);
            }
        }
        return times;
    };

    const [showNotification, setShowNotification] = useState(false);

    const handleBooking = () => {
        sendEmail('recipient@gmail.com', 'Бронирование игры', 'Вы забронировали игру!');
    
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 3000);
    };

    return (
        <section className="booking-section">
            <h2 className="booking-title">Бронирование</h2>
            <div className="booking-container">
                <div className="options">
                    <div className="dropdown">
                        <label>Выбрать комнату:</label>
                        <select value={room} onChange={(e) => setRoom(e.target.value)}>
                            <option value="">-- Выберите комнату --</option>
                            {rooms.map((r, index) => (
                                <option key={index} value={r}>{r}</option>
                            ))}
                        </select>
                    </div>
                    <div className="dropdown">
                        <label>Выбрать мастера:</label>
                        <select value={master} onChange={(e) => setMaster(e.target.value)}>
                            <option value="">-- Выберите мастера --</option>
                            {masters.map((m, index) => (
                                <option key={index} value={m}>{m}</option>
                            ))}
                        </select>
                    </div>
                    <div className="game-input">
                        <label>Выбрать игру:</label>
                        <input
                            type="text"
                            value={game}
                            onChange={handleGameInput}
                            placeholder="Начните вводить название игры..."
                        />
                        {availableGames.length > 0 && (
                            <ul className="game-suggestions">
                                {availableGames.map((g, index) => (
                                    <li key={index} onClick={() => setGame(g)}>{g}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className="player-count">
                        <label>Количество игроков с вами:</label>
                        <input
                            type="number"
                            value={playerCount}
                            onChange={(e) => setPlayerCount(e.target.value)}
                            placeholder="До ... человек"
                            min="1"
                        />
                    </div>
                    {selectedDate && (
                        <div className="time-selection">
                            <label>Выбрать время:</label>
                            <select value={selectedTime} onChange={handleTimeChange}>
                                <option value="">-- Выберите время --</option>
                                {getAvailableTimes().map((time, index) => (
                                    <option key={index} value={time}>{time}</option>
                                ))}
                            </select>
                        </div>
                    )}
                    {selectedTime && (
                        <button className="book-button" onClick={handleBooking}>Записаться</button>
                    )}
                </div>
                <div className="calendar">
                    <h3>Выберите дату:</h3>
                    {renderCalendar()}
                </div>
            </div>
            {notification && <div className="notification">{notification}</div>}
            {showNotification && (
                <div className="notification-modal">
                    Теперь вы записаны на игру, ждем вас в гости!
                </div>
            )}
        </section>
    );
};

export default Booking;
