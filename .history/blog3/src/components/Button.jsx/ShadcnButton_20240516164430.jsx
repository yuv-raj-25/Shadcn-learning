// src/ShadcnButton.jsx
import React from 'react';
import { Button } from '../../components/ui/button';

const ShadcnButton = ({ onClick, children }) => {
  return (
    <Button variant='de' onClick={onClick} className="shadcn-button">
      {children}
      Button
    </Button>
  );
};

export default ShadcnButton;
