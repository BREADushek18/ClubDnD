import React from 'react';
import '../../styles/About.scss';

const About = () => {
  const facts = [
    { title: 'Факт 1', description: 'Подробное описание факта 1', image: '../src/assets/images/CardTest1.jpg', hoverImage: '../src/assets/images/BackCardTest1.jpg' },
    { title: 'Факт 2', description: 'Подробное описание факта 2', image: '../src/assets/images/CardTest2.jpg', hoverImage: '../src/assets/images/BackCardTest2.jpg' },
    { title: 'Факт 3', description: 'Подробное описание факта 3', image: '../src/assets/images/CardTest3.jpg', hoverImage: '../src/assets/images/BackCardTest3.jpg' },
    { title: 'Факт 4', description: 'Подробное описание факта 4', image: '../src/assets/images/CardTest4.jpg', hoverImage: '../src/assets/images/BackCardTest4.jpg' },
  ];

  return (
    <section className="about-section">
      <h2 className="about-title">О нас</h2>
      <p className="about-description">Небольшое описание о нашей команде и проектах.</p>
      <div className="cards-container">
        
        {facts.map((fact, index) => (
          <div className="card" key={index}>
            <div className="card-inner">
              <div className="card-front" style={{ backgroundImage: `url(${fact.image})` }}>
                <h3>{fact.title}</h3>
              </div>
              <div className="card-back" style={{ backgroundImage: `url(${fact.hoverImage})` }}>
                <p>{fact.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
