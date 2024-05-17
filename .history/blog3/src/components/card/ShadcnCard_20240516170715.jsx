
import React from 'react';
import { Card } from '../../components/ui/card';

const ShadcnCard = ({ title, imageUrl, imageAlt, description, children, className }) => {
    return (
      <Card className={`max-w-md rounded overflow-hidden shadow-lg ${className}`}>
        {imageUrl && (
          <img className="w-full" src={imageUrl} alt={imageAlt} />
        )}
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          {description && (
            <p className="text-gray-700 text-base mb-4">{description}</p>
          )}
          {children}
        </div>
      </Card>
    );
  };
  
  export default ShadcnCard;
  
