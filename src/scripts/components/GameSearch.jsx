import React, { useState } from 'react';
import { gamesList } from '../games';
import '../../styles/Booking.scss';

const GameSearch = ({ onGameSelect }) => {
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [selectedGame, setSelectedGame] = useState(null);
    const [notification, setNotification] = useState('');

    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);

        if (value) {
            const filteredGames = gamesList.filter((game) =>
                game.toLowerCase().includes(value.toLowerCase())
            );
            setSuggestions(filteredGames);
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (game) => {
        setSelectedGame(game);
        setInputValue(game);
        setSuggestions([]);
        onGameSelect(game);
    };

    const handleClear = () => {
        setSelectedGame(null);
        setInputValue('');
        setSuggestions([]);
        onGameSelect('');
    };

    const handleGameSelect = () => {
        if (gamesList.includes(inputValue)) {
            setSelectedGame(inputValue);
            onGameSelect(inputValue);
        } else {
            setNotification('Упс, такой игры у нас пока еще нет!');
            setTimeout(() => {
                setNotification('');
            }, 3000);
        }
    };

    return (
        <div className="game-search-container">
            <div className="game-search-row">
                <input
                    type="text"
                    value={selectedGame || inputValue}
                    onChange={handleInputChange}
                    placeholder="Начните вводить название игры..."
                    className="game-search-input"
                />
                <button onClick={handleGameSelect} className="game-search-button">
                    Выбрать
                </button>
            </div>
            {suggestions.length > 0 && !selectedGame && (
                <div className="game-suggestions-container">
                    {suggestions.map((game, index) => (
                        <div
                            key={index}
                            onClick={() => handleSuggestionClick(game)}
                            className="game-suggestion"
                        >
                            {game}
                        </div>
                    ))}
                </div>
            )}
            {selectedGame && (
                <div className="selected-game-container">
                    <strong>Выбранная игра:</strong> {selectedGame}
                    <button onClick={handleClear} className="change-game-button">
                        Изменить
                    </button>
                </div>
            )}
            {notification && (
                <div className="notification-modal">
                    {notification}
                </div>
            )}
        </div>
    );
};

export default GameSearch;
