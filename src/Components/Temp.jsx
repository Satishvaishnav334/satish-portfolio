import React, { useState } from 'react';

const Temp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <button
          onClick={toggleMenu}
          className="sm:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          <div className="space-y-2">
            <span className={`block h-0.5 w-8 bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-8 bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-8 bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>
      <div className={`mt-4 space-y-4 sm:flex sm:space-y-0 sm:space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
        <a href="#about" className="block hover:text-gray-400">About</a>
        <a href="#projects" className="block hover:text-gray-400">Projects</a>
        <a href="#contact" className="block hover:text-gray-400">Contact</a>
      </div>
    </nav>
  );
};

export default Temp;
