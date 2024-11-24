import React from 'react';
import '../styles/App.scss';
import Header from '../scripts/components/HeaderIndex';
import About from '../scripts/components/About'; 
import Events from '../scripts/components/Events'; 
import Booking from '../scripts/components/Booking';

const App = () => {
    return (
      <div className="app">
        <Header />
        <main>
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
          <About /> {}
          <Events /> {}
          <Booking /> {}
          <section id="contact">
            {}
          </section>
        </main>
      </div>
    );
};

export default App;
