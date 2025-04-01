// WhatsAppButton.js
import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const phoneNumber = '9783057734'; 
  const message = 'Hello, I have a question about your services';
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="whatsapp-button">
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
          alt="WhatsApp" 
        />
      </a>
    </div>
  );
};

export default WhatsAppButton;