import React from 'react';

const Frame = () => {
  return (
    <header className="w-full p-4 sm:p-6 lg:p-8 flex justify-between items-center border-b-2 border-gray-200">
      {/* Logo and Title */}
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-xl">🍊</span>
        </div>
        {/* Title */}
        <b className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-poppins text-gray-800">
          The Little Eatery
        </b>
      </div>

      {/* Navigation Links */}
      <nav className="hidden lg:flex items-center space-x-8">
        <ul className="flex space-x-8 text-sm md:text-base lg:text-lg text-gray-800 font-inter">
          <li className="hover:text-gray-500 cursor-pointer">About</li>
          <li className="hover:text-gray-500 cursor-pointer">Gallery</li>
          <li className="hover:text-gray-500 cursor-pointer">Delivery</li>
          <li className="hover:text-gray-500 cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* Menu Button */}
      <button className="hidden lg:block bg-orange-500 text-white px-4 py-2 rounded-md font-david-libre text-sm">
        MENU
      </button>


      {/* Mobile Navigation */}
      <nav className="block lg:hidden mt-4">
        <ul className="grid gap-2 text-center text-sm md:text-base text-gray-800 font-inter">
          <li className="hover:text-gray-500 cursor-pointer">About</li>
          <li className="hover:text-gray-500 cursor-pointer">Gallery</li>
          <li className="hover:text-gray-500 cursor-pointer">Delivery</li>
          <li className="hover:text-gray-500 cursor-pointer">Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Frame;