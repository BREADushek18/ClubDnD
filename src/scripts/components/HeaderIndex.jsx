import React, { useState } from 'react';
import '../../styles/HeaderIndex.scss';
import Modal from './ModalLogin';

const HeaderIndex = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <header className="header">
      <img src="../src/assets/images/DnDLogo.jpg" alt="Логотип" className="logo" />
      <nav className="nav">
        <a href="#about">О нас</a>
        <a href="#games">Игры</a>
        <a href="#events">События</a>
        <a href="#contact">Контакты</a>
      </nav>
      <button className="login-button" onClick={toggleModal}>Войти</button>
      {isModalOpen && <Modal onClose={toggleModal} />}
    </header>
  );
};

export default HeaderIndex;
