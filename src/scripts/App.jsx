import React from 'react';
import '../styles/App.scss';
import Header from '../scripts/components/HeaderIndex';
import About from '../scripts/components/About'; 

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
          <About /> {/* Добавляем новый блок "О нас" */}
          <section id="contact">
            {/* Контактная информация */}
          </section>
        </main>
      </div>
    );
};

export default App;
