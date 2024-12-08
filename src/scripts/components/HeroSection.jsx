import React from 'react';
import '../../styles/HeroSection.scss';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="overlay">
        <div className="text-container">
          <h3>Вы когда-нибудь</h3>
          <h1>Мечтали</h1>
          <p>попасть в фэнтези мир? <br />
            Здесь вы сможете осуществить эту мечту!</p>
          <div className="button-container">
            <div className="button-wrapper">
              <a href="#contact" className="signup-button">Записаться на игру</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
