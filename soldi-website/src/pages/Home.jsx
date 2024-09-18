import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/robot.png'; // Update with the path to your image
import About from './About';
import Services from './Services';
import Contact from './Contact';

const Home = () => {
  return (
    <>
      <header className="bg-gradient-to-r from-black via-gray-800 to-yellow-500 text-white text-center py-20 min-h-screen flex items-center">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center">
          <div className="flex-1 md:w-1/2 text-center md:text-left md:pr-12">
            <div className="bg-gradient-to-r from-black via-gray-800 to-yellow-500 text-white p-8 rounded-lg shadow-lg mx-4 md:mx-0">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                Welcome to SOLDI Digital Solutions and Marketing
              </h1>
              <p className="text-lg md:text-2xl mb-8">
                Innovative Solutions, Impactful Marketing
              </p>
              <Link
                to="/contact"
                className="bg-yellow-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-orange-700 transition duration-300"
              >
                Get in Touch
              </Link>
            </div>
          </div>
          <div className="flex-1 md:w-1/2">
            <img src={heroImage} alt="Hero" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </header>

      <About/>
      <Services/>
      <Contact/>
    </>
  );
};

export default Home;
