import React from 'react';
import '../styles/App.scss';
import Header from '../scripts/components/HeaderIndex';
import HeroSection from '../scripts/components/HeroSection';
import About from '../scripts/components/About'; 
import Events from '../scripts/components/Events'; 
import Booking from '../scripts/components/Booking';

const App = () => {
    return (
      <div className="app">
        <Header />
        <main>
          <HeroSection /> {}
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
