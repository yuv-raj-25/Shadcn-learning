
import React from 'react';
import { Input } from '../../components/ui/input';

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
