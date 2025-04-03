import React from 'react';
import Image from 'next/image';  // ✅ Import Next.js Image component
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const phoneNumber = '9783057734'; 
  const message = 'Hello, I have a question about your services';
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="whatsapp-button">
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
        <Image 
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
          alt="WhatsApp" 
          width={50}  // ✅ Add width
          height={50} // ✅ Add height
        />
      </a>
    </div>
  );
};

export default WhatsAppButton;
