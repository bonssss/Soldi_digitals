// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to="/" className="hover:text-gray-400">SOLDI</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/about" className="hover:text-gray-400">About</Link>
          <Link to="/services" className="hover:text-gray-400">Services</Link>
          <Link to="/contact" className="hover:text-gray-400">Contact</Link>
        </div>
        <button className="md:hidden text-xl" onClick={() => setIsOpen(!isOpen)}>
          <span className="material-icons">menu</span>
        </button>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <Link to="/" className="block px-4 py-2 hover:bg-gray-700">Home</Link>
        <Link to="/about" className="block px-4 py-2 hover:bg-gray-700">About</Link>
        <Link to="/services" className="block px-4 py-2 hover:bg-gray-700">Services</Link>
        <Link to="/contact" className="block px-4 py-2 hover:bg-gray-700">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
