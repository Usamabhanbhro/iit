import React from 'react';
import { Button } from '@heroui/react';
import { Link } from 'react-router-dom';

const BookConsultationButton = () => {
  return (
    <Link to="/consultation">
      <Button className="inline-flex items-center font-semibold px-6 py-4 rounded-xl text-black bg-[#00D4AA] to-purple-600 shadow-md hover:brightness-110 transition">
        Book Free Consultation
      </Button>
    </Link>
  );
};

export default BookConsultationButton;