// src/pages/Contact.jsx
import React from 'react';
import contactImage from '../assets/contact2.png'; // Update with the path to your image

const Contact = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-800 to-black text-white">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center">
        {/* Image Section */}
        <div className="flex-1 md:w-1/2 p-6 md:p-12">
          <img
            src={contactImage}
            alt="Contact Us"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        {/* Form Section */}
        <div className="flex-1 md:w-1/2 p-6 md:p-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-center md:text-left">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl mb-6 text-center md:text-left">
            We'd love to hear from you! Whether you have a question or need assistance, feel free to reach out using the form below.
          </p>
          <form
            action="https://formspree.io/f/{form-id}" // Replace with your form handling URL
            method="POST"
            className="space-y-4"
          >
            <div className="flex flex-col mb-4">
              <label htmlFor="name" className="text-lg mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="p-3 rounded-lg bg-gray-200 text-gray-900"
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="email" className="text-lg mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="p-3 rounded-lg bg-gray-200 text-gray-900"
                required
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="message" className="text-lg mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="p-3 rounded-lg bg-gray-200 text-gray-900"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-orange-600 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-orange-700 transition duration-300 w-full md:w-auto"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
