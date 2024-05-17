import React from 'react';
import { Button } from '../../components/ui/button';

const ShadcnButton = ({ onClick, children }) => {
    return (
      <Button
        onClick={onClick}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {children}
      </Button>
    );
  };
  
  export default ShadcnButton;
