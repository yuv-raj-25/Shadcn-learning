
import React from 'react';
import { Button } from '../../components/ui/button';

const ShadcnButton = ({ onClick, children }) => {
  return (
    <Button onClick={onClick} className="shadcn-button">
      {children}
      Button
    </Button>
  );
};

export default ShadcnButton;
