// src/ShadcnButton.jsx
import React from 'react';
import { Button } from '../../components/ui/button';

const ShadcnButton = ({ onClick, children }) => {
  return (
    <Button variant='default' onClick={onClick} className="shadcn-button">
      {children}
    </Button>
  );
};

export default ShadcnButton;
