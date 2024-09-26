import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-gray-600">
      <div className="container mx-auto p-4 pt-6 pb-12">
        <div className="flex flex-wrap justify-center mb-4">
          <div className="w-full lg:w-1/3 xl:w-1/4 p-6 text-lg">
            <h5 className="uppercase text-gray-700 font-bold mb-2">About Us</h5>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.
            </p>
          </div>
          <div className="w-full lg:w-1/3 xl:w-1/4 p-6 text-lg">
            <h5 className="uppercase text-gray-700 font-bold mb-2">Quick Links</h5>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/3 xl:w-1/4 p-6 text-lg">
            <h5 className="uppercase text-gray-700 font-bold mb-2">Get in Touch</h5>
            <p className="text-gray-600">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                info@example.com
              </a>
            </p>
            <p className="text-gray-600">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                +1 123 456 7890
              </a>
            </p>
          </div>
        </div>
        <div className="text-center">
          <p className="text-gray-600">
            &copy; 2024 Ashi. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;