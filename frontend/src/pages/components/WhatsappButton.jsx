import React from 'react';
import { Button } from '@heroui/react';

const WhatsappButton = () => {
  return (
    <a href="https://wa.me/923420372875" target="_blank" rel="noopener noreferrer">
      <Button className="inline-flex items-center font-semibold px-4 py-4 rounded-xl text-white bg-green-600 hover:bg-green-700 transition">
        Chat on WhatsApp
      </Button>
    </a>
  );
};

export default WhatsappButton;