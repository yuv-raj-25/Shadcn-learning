
import React from 'react';
import { Card } from '../../components/ui/card';

const ShadcnCard = ({ title, children }) => {
    return (
      <Card className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          {children}
        </div>
      </Card>
    );
  };
  
  export default ShadcnCard;
