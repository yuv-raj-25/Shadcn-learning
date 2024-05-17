// src/ShadcnCard.jsx
import React from 'react';
import { Card } from '../../components/ui/';

const ShadcnCard = ({ title, children }) => {
  return (
    <Card className="shadcn-card">
      <h2>{title}</h2>
      <div>{children}</div>
    </Card>
  );
};

export default ShadcnCard;
