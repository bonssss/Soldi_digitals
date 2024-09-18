// src/pages/About.jsx
import React from 'react';
import aboutImage from '../assets/about.png'; // Update with the path to your image

const About = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="flex-1 md:w-1/2 p-6 md:p-12">
          <img
            src={aboutImage}
            alt="About Us"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="flex-1 md:w-1/2 p-6 md:p-12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            About Us
          </h1>
          <p className="text-lg md:text-xl mb-6">
            At SOLDI Digital Solutions and Marketing, we are dedicated to providing cutting-edge digital solutions and impactful marketing strategies to elevate your business. Our team of experts combines creativity and technology to deliver results that drive growth and success.
          </p>
          <p className="text-lg md:text-xl mb-6">
            With a passion for innovation and a commitment to excellence, we work closely with our clients to understand their needs and deliver tailored solutions that exceed expectations. Whether you are looking for digital transformation, marketing campaigns, or strategic consulting, we have the expertise to help you achieve your goals.
          </p>
          <a
            href="#contact"
            className="bg-orange-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-orange-700 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
