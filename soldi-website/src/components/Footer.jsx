// src/components/Footer.jsx
import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} SOLDI Digital Solutions and Marketing. All rights reserved.</p>
        <p>
          <a href="/about" className="hover:underline">About Us</a> |{' '}
          <a href="/services" className="hover:underline">Services</a> |{' '}
          <a href="/contact" className="hover:underline">Contact</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
