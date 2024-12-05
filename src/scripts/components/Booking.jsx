import React, { useState } from 'react';
import GameSearch from './GameSearch';
import '../../styles/Booking.scss';

const Booking = () => {
    const [room, setRoom] = useState('');
    const [master, setMaster] = useState('');
    const [game, setGame] = useState('');
    const [playerCount, setPlayerCount] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('Декабрь');
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState('');
    const [notification, setNotification] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    const rooms = ['Общий зал', 'Комната "Лес"', 'Комната "Подземелье"', 'Комната "Космос"', 'Бронь общего зала'];
    const masters = ['Без мастера', 'Мастер Петр', 'Мастер Миша'];
    const months = ['Декабрь', 'Январь'];

    const handleDateChange = (e) => {
        const selectedDate = new Date(e.target.value);
        if (selectedMonth === 'Декабрь' && (selectedDate.getDate() !== 2 && selectedDate.getDate() !== 9 && selectedDate.getDate() !== 16 && selectedDate.getDate() !== 23 && selectedDate.getDate() !== 30 && selectedDate.getDate() !== 31)) {
            setSelectedDate(selectedDate);
        } else if (selectedMonth === 'Январь' && (selectedDate.getDate() !== 1 && selectedDate.getDate() !== 2 && selectedDate.getDate() !== 3 && selectedDate.getDate() !== 4 && selectedDate.getDate() !== 5 && selectedDate.getDate() !== 6 && selectedDate.getDate() !== 13 && selectedDate.getDate() !== 20 && selectedDate.getDate() !== 27)) {
            setSelectedDate(selectedDate);
        } else {
            setSelectedDate(null);
            setSelectedTime('');
        }
        validateForm();
    };

    const getDates = () => {
        const today = new Date();
        const dates = [];
        const daysInMonth = selectedMonth === 'Декабрь' ? 31 : 31;
        const firstDayOfMonth = new Date(today.getFullYear() + 1, selectedMonth === 'Декабрь' ? 0 : 1, 1);
        const firstWeekday = firstDayOfMonth.getDay();
        for (let i = 0; i < daysInMonth; i++) {
            const nextDate = new Date(today.getFullYear() + 1, selectedMonth === 'Декабрь' ? 0 : 1, i + 1);
            dates.push(nextDate);
        }
        return { dates, firstWeekday };
    };

    const handleTimeChange = (e) => {
        setSelectedTime(e.target.value);
        validateForm();
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

    const validateForm = () => {
        setIsFormValid(room && master && game && playerCount && selectedDate && selectedTime);
    };

    const handleBooking = () => {
        if (!isFormValid) {
            setNotification('Заполните форму полностью. Возможно, вы не выбрали игру');
            setTimeout(() => {
                setNotification('');
            }, 3000);
            return;
        }
        setNotification('Теперь вы записаны на игру, ждем вас в гости!');
        setTimeout(() => {
            setNotification('');
        }, 3000);
    };

    return (
        <section className="booking-section">
            <h2 className="booking-title">Бронирование</h2>
            <p className="booking-description">Хотите записаться на игру? Заполните данную форму:</p>
            <div className="booking-container">
                <div className="options-container">
                    <div className="options">
                        <div className="dropdown">
                            <label>Выбрать комнату:</label>
                            <select value={room} onChange={(e) => {
                                setRoom(e.target.value);
                                validateForm();
                            }}>
                                <option disabled value="">-- Выберите комнату --</option>
                                {rooms.map((r, index) => (
                                    <option key={index} value={r}>{r}</option>
                                ))}
                            </select>
                        </div>
                        <div className="dropdown">
                            <label>Выбрать мастера:</label>
                            <select value={master} onChange={(e) => {
                                setMaster(e.target.value);
                                validateForm();
                            }}>
                                <option disabled value="">-- Выберите мастера --</option>
                                {masters.map((m, index) => (
                                    <option key={index} value={m}>{m}</option>
                                ))}
                            </select>
                        </div>
                        <div className="game-input">
                            <label>Выбрать игру:</label>
                            <GameSearch
                                onGameSelect={(selectedGame) => {
                                    setGame(selectedGame);
                                    validateForm();
                                }}
                            />
                        </div>
                        <div className="player-count">
                            <label>Количество игроков с вами:</label>
                            <input
                                type="number"
                                value={playerCount}
                                onChange={(e) => {
                                    setPlayerCount(e.target.value);
                                    validateForm();
                                }}
                                placeholder="До ... человек"
                                min="1"
                            />
                        </div>
                        <div className="month-selection">
                            <label>Выбрать месяц:</label>
                            <select value={selectedMonth} onChange={(e) => {
                                setSelectedMonth(e.target.value);
                                setSelectedDate(null);
                                setSelectedTime('');
                                validateForm();
                            }}>
                                {months.map((m, index) => (
                                    <option key={index} value={m}>{m}</option>
                                ))}
                            </select>
                        </div>
                        <div className="date-selection">
                            <label>Выбрать дату:</label>
                            <select value={selectedDate?.toISOString().slice(0, 10) || ''} onChange={handleDateChange}>
                                <option disabled value="">-- Выберите дату --</option>
                                {getDates().dates.map((date, index) => (
                                    <option
                                        key={index}
                                        value={date.toISOString().slice(0, 10)}
                                        disabled={
                                            (selectedMonth === 'Декабрь' && (date.getDate() === 2 || date.getDate() === 9 || date.getDate() === 16 || date.getDate() === 23 || date.getDate() === 30 || date.getDate() === 31)) ||
                                            (selectedMonth === 'Январь' && (date.getDate() === 1 || date.getDate() === 2 || date.getDate() === 3 || date.getDate() === 4 || date.getDate() === 5 || date.getDate() === 6 || date.getDate() === 13 || date.getDate() === 20 || date.getDate() === 27))
                                        }
                                    >
                                        {date.getDate()}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="time-selection">
                            <label>Выбрать время:</label>
                            <select value={selectedTime} onChange={handleTimeChange}>
                                <option disabled value="">-- Выберите время --</option>
                                {selectedDate && getAvailableTimes().map((time, index) => (
                                    <option key={index} value={time}>{time}</option>
                                ))}
                            </select>
                        </div>
                        <button className={`book-button ${isFormValid ? '' : 'disabled'}`} onClick={handleBooking}>
                            Записаться
                        </button>
                    </div>
                </div>
            </div>
            {notification && (
                <div className="notification-modal">
                    {notification}
                </div>
            )}
        </section>
    );
};

export default Booking;
