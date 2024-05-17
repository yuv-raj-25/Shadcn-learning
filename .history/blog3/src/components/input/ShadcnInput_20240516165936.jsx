
import React from 'react';
import { Input } from '../../components/ui/input';

const ShadcnInput = ({ placeholder, onChange }) => {
    return (
      <Input
        placeholder={placeholder}
        onChange={onChange}
        className="border border-gray-300 bg-white focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-md px-3 py-2 mt-1 mb-4 block w-full"
      />
    );
  };
  
  export default ShadcnInput;