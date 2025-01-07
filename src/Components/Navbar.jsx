import React from 'react'
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header className="bg-orange-300 rounded-xl shadow-xl">
        <nav className="flex  p-2 justify-between  items-center">
            <h2 className="text-left font-bold  text-4xl py-2 px-2 "> Satish Kumar</h2>
          <div className={`mt-4 space-y-4 sm:flex sm:space-y-0 sm:space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
            <ul className="hidden md:flex gap-12 text-xl font-serif font-semibold">
              <li className="hover:text-slate-500  cursor-pointer px-1"> Project</li>
              <li className="hover:text-slate-500  cursor-pointer"> Services</li>
              <li className="hover:text-slate-500  cursor-pointer"> Contact Us</li>
              <li className="hover:text-slate-500  cursor-pointer"> Profile</li>
            </ul>
          </div>
          <div className="justify-end md:hidden">
            <button
              onClick={toggleMenu}
              className="sm:hidden focus:outline-none"
              aria-label="Toggle Menu"
            >
              <div className="space-y-2">
                <span className={`block h-0.5 w-8 bg-black transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block h-0.5 w-8 bg-black transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`block h-0.5 w-8 bg-black transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar

