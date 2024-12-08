import React from 'react';
import '../../styles/About.scss';

const About = () => {
  const facts = [
    { name: 'Юрий Новиков', profession: 'Основатель клуба', description: '“Мы сделали проект для тех, кто хочет развеяться после работы,  прокачать soft-skills, получить дозу позитива и познакомиться с новыми людьми. Играйте, общайтесь, созидайте и отдыхайте в нашей приятной обстановке!”', image: '../src/assets/images/Card1.jpg', hoverImage: '../src/assets/images/BackCard.jpg' },
    { name: 'Александр Лукьянов', profession: 'Мастер настольных игр', description: 'Саша — мастер креативности. Его необычные решения и неожиданные повороты сюжета делают каждую игру захватывающей и непредсказуемой. Он всегда готов удивить игроков новыми идеями и оригинальными заданиями, что делает каждую сессию уникальной.', image: '../src/assets/images/Card2.jpg', hoverImage: '../src/assets/images/BackCard.jpg' },
    { name: 'Дмитрий Кириев', profession: 'Мастер настольных игр', description: 'С 2019 года Дмитрий ведет игры, накапливая бесценный опыт и мудрость. Он знает, как управлять динамикой группы и адаптироваться к различным стилям игры. Его уверенность и профессионализм внушают доверие, и вы можете быть уверены, что ваше приключение будет незабываемым.', image: '../src/assets/images/Card3.jpg', hoverImage: '../src/assets/images/BackCard.jpg' },
    { name: 'Наталья Ащеулова', profession: 'Фотограф', description: 'Фотография для Натальи — это не просто работа, а настоящая страсть. Она искренне любит то, что делает, и это отражается в её снимках. Каждый кадр — это результат её увлечения и стремления создать что-то прекрасное, что останется в памяти на долгие годы.', image: '../src/assets/images/Card4.jpg', hoverImage: '../src/assets/images/BackCard.jpg' },
  ];

  return (
    <section className="about-section">
      <div className="about-content">
        <h2 className="about-title">Мы - настоящие проводники <br /> в паралелльные вселенные!</h2>
        <p className="about-description">Наша команда состоит из лучших мастеров, любящих свое дело. <br />
        Мы работаем с 2019 года, создаем интересные и продуманные миры, <br />находим подход к каждому игроку, и.. Кидаем кубы!</p>
      </div>
      <div className="cards-container">
        {facts.map((fact, index) => (
          <div className="card" key={index}>
            <div className="card-inner">
              <div className="card-front" style={{ backgroundImage: `url(${fact.image})` }}>
                <h3>
                  <span className="name">{fact.name}</span>
                  <span className="profession">{fact.profession}</span>
                </h3>
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