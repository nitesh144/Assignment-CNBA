// src/components/ui/card.jsx
import React from 'react';

const Card = ({ children, className }) => {
  return (
    <div className={`shadow-md rounded-lg p-4 ${className}`}>
      {children}
    </div>
  );
};

export default Card; // Default export for both
