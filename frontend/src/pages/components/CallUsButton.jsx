import React from 'react';
import { Button } from '@heroui/react';

const CallUsButton = () => {
  return (
    <a href="tel:+0222678253">
      <Button className="inline-flex items-center font-semibold px-4 py-4 rounded-xl text-white bg-black/20 border border-white/30 hover:bg-black/30 transition">
        Call Us Now
      </Button>
    </a>
  );
};

export default CallUsButton;