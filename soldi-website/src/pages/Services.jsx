// src/pages/Services.jsx
import React from 'react';
import { FaChartLine, FaLightbulb, FaCogs, FaLaptopCode, FaMobileAlt } from 'react-icons/fa'; // Additional icons for web and app development

const services = [
  {
    icon: <FaChartLine className="text-4xl text-orange-500" />,
    title: "Digital Marketing",
    description: "Boost your online presence with our comprehensive digital marketing strategies tailored to your business goals."
  },
  {
    icon: <FaLightbulb className="text-4xl text-orange-500" />,
    title: "Innovative Solutions",
    description: "Leverage our cutting-edge technology solutions to streamline your operations and enhance efficiency."
  },
  {
    icon: <FaCogs className="text-4xl text-orange-500" />,
    title: "Consulting Services",
    description: "Get expert advice on optimizing your business processes and achieving strategic objectives."
  },
  {
    icon: <FaLaptopCode className="text-4xl text-orange-500" />,
    title: "Web Development",
    description: "Create a stunning online presence with our custom web development services tailored to your brand's needs."
  },
  {
    icon: <FaMobileAlt className="text-4xl text-orange-500" />,
    title: "App Development",
    description: "Build engaging mobile applications with our expert app development services to reach and engage your audience."
  }
];

const Services = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-800 to-black text-white">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8">
          Our Services
        </h1>
        <p className="text-lg md:text-xl mb-12">
          Explore our range of services designed to help your business grow and succeed in the digital world.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white text-gray-900 p-8 rounded-lg shadow-lg w-full md:w-1/3">
              <div className="mb-4">{service.icon}</div>
              <h2 className="text-2xl font-semibold mb-4">{service.title}</h2>
              <p className="text-lg">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
