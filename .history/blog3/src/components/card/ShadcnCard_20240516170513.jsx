
import React from 'react';
import {  Card, Button, Icon, Badge } from '../../components/ui/card';

const ShadcnCard = ({ title, imageUrl, imageAlt, description, buttonText, buttonOnClick, badgeText, children, className }) => {
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
        <div className="px-6 py-4 flex justify-between items-center">
          {buttonText && (
            <Button onClick={buttonOnClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              {buttonText}
            </Button>
          )}
          {badgeText && (
            <Badge className="bg-red-500 px-3 py-1 text-sm font-semibold text-white rounded-full">
              {badgeText}
            </Badge>
          )}
        </div>
      </Card>
    );
  };
  
  export default ShadcnCard;

