import React from 'react';
import Label from '.';

const MyForm = () => {
  return (
    <form>
      <Label>Email address:</Label>
      <input type="email" name="email" className="block w-full mt-1" />
    </form>
  );
};

export default MyForm;