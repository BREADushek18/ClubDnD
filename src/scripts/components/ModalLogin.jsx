import React from 'react';
import '../../styles/ModalLogin.scss';

const Modal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Вход</h2>
        <button className="close-button" onClick={onClose}>Закрыть</button>
        {/* Здесь можно добавить форму для входа */}
      </div>
    </div>
  );
};

export default Modal;
