import React from 'react';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-black shadow-md">
      <div className="flex items-center">
        <img src="" alt="logo" className="h-10 w-10 mr-3" />
        <h1 className="text-white text-2xl font-bold">AMIT RAJPUT</h1>
      </div>
      <nav>
        <ul className="flex space-x-6">
          <li className="text-white hover:text-blue-300 cursor-pointer">Home</li>
          <li className="text-white hover:text-blue-300 cursor-pointer">About</li>
          <li className="text-white hover:text-blue-300 cursor-pointer">Contact</li>
          <li className="text-white hover:text-blue-300 cursor-pointer">Projects</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
