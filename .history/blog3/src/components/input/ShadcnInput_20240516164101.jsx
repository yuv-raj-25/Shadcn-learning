// src/ShadcnInput.jsx
import React from 'react';
import { Input } from '@shadcn/ui';

const ShadcnInput = ({ placeholder, onChange }) => {
  return (
    <Input
      placeholder={placeholder}
      onChange={onChange}
      className="shadcn-input"
    />
  );
};

export default ShadcnInput;
