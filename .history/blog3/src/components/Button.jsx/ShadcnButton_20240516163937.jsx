// src/ShadcnButton.jsx
import React from 'react';
import { Button } from '@shadcn/ui';

const ShadcnButton = ({ onClick, children }) => {
  return (
    <Button onClick={onClick} className="shadcn-button">
      {children}
    </Button>
  );
};

export default ShadcnButton;
