import React, { useState } from 'react';
import Modal from 'react-modal';
import "./notification.css"
Modal.setAppElement('#root'); // Set the root element as the app element for accessibility

export default function NotificationModal({ isOpen, onClose, message }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="notification-modal"
      overlayClassName="notification-modal-overlay"
    >
      <div className="notification-content">
        <h2>Notification</h2>
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </Modal>
  );
}



