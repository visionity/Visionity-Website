import React, { useState } from 'react';

function Footer() {
  const [darkMode, setDarkMode] = useState(false); // Set initial value to false (light mode)

  return (
    <footer className={`py-12 ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"}`}>
      <div className="container mx-auto px-4">
        {/* Main footer content - responsive grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company info */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 relative mr-2">
                <div className="h-10 w-10 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full flex items-center justify-center overflow-hidden">
                  <img src="/images/logo.jpeg" alt="Profile" className="h-full w-full object-cover" />
                </div>
              </div>
              <span className="text-xl font-bold">VisionityAI</span>
            </div>
            <p className={`mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
              Leveraging cutting-edge artificial intelligence to transform your business operations and drive innovation.
            </p>
            <div className="flex space-x-4 mb-6 lg:mb-0">
              {/* Social Media Icons */}
              <a href="#" className={`${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-blue-600"} transition duration-300`}>
                {/* Icon */}
              </a>
              {/* Add other social media links similarly */}
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className={`text-lg font-semibold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className={`${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-blue-600"} transition duration-300 block`}>Home</a>
              </li>
              {/* Other quick links */}
            </ul>
          </div>
          
          {/* Solutions */}
          <div className="col-span-1">
            <h3 className={`text-lg font-semibold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>Our Solutions</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className={`${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-blue-600"} transition duration-300 block`}>Computer Vision</a>
              </li>
              {/* Other solutions */}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <h3 className={`text-lg font-semibold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 mr-2 mt-0.5 flex-shrink-0 ${darkMode ? "text-blue-400" : "text-blue-600"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className={darkMode ? "text-gray-300" : "text-gray-600"}>
                  123 AI Innovation Street, Bangalore, India 560001
                </span>
              </li>
              {/* Other contact info */}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
