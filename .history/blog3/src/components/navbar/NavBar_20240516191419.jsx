import React from 'react';


const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex">
            <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
            <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
            <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium">Services</a>
            <a href="#" className="text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
