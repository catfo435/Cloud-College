// src/ImageDropdown.js
import { useState } from 'react';

const ImageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button 
          type="button" 
          className="inline-flex justify-center w-full rounded-md px-4 py-2" 
          id="options-menu" 
          aria-expanded="true" 
          aria-haspopup="true" 
          onClick={toggleDropdown}
        >
          <img 
            src="/logo.png" 
            alt="Profile Picture"
            className="rounded-full w-12 h-12"
          />
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">My Account</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Wallet</a>
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign Out</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageDropdown;
