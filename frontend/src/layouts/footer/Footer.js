import React from 'react';
import Image from 'next/image'

const Footer = ({ darkMode }) => {
  return (
    <footer className={`${darkMode ? 'dark' : ''}`}>
      <div className="bg-gray-100 dark:bg-[#111827] text-gray-800 dark:text-gray-200 pt-10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Newsletter Section */}
          <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-300 dark:border-gray-600 pb-10 mb-10">
            <div>
              <h2 className="text-xl font-semibold text-blue-900 dark:text-blue-400">Subscribe to our</h2>
              <h1 className="text-3xl font-bold text-blue-800 dark:text-blue-300">Newsletter</h1>
            </div>
            <div className="flex mt-4 md:mt-0 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 dark:text-white w-full md:w-72
                          focus:outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-300 dark:focus:ring-blue-700 transition duration-300"
              />
              <button className="bg-blue-900 text-white px-6 py-2 rounded-r-md hover:bg-blue-800 transition duration-300">
                Join
              </button>
            </div>
          </div>

          {/* Footer Main Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

            {/* Logo and Social */}
            <div>
              <div className="mb-4">
                <img src="images/lightlogo.png" alt="Visionity Logo" className="w-24" style={{ width: '70%', height: '100%', display: 'block', maxWidth: '100%' }} />
              </div>
              <p className="font-semibold mb-4">Top IT Consulting Company Delivering</p>
              <p className="font-semibold mb-4">Custom Innovative Solutions</p>
              <div className="flex gap-3 text-2xl">
                <a href="#"><i className="fab fa-facebook text-blue-600"></i></a>
                <a href="#"><i className="fab fa-linkedin text-blue-700"></i></a>
                <a href="#"><i className="fab fa-instagram text-pink-500"></i></a>
                <a href="#"><i className="fab fa-x-twitter text-black dark:text-white"></i></a>
                <a href="#"><i className="fab fa-youtube text-red-600"></i></a>
                <a href="#"><i className="fab fa-pinterest text-red-500"></i></a>
              </div>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>About us</li>
                <li>Careers</li>
                <li>Contact-us</li>
                <li>Blog</li>
                <li>CaseStudy</li>
                <li>Process</li>
                <li>Vision</li>
                <li>Client</li>
              </ul>
            </div>

            {/* Industry */}
            <div>
              <h3 className="font-bold mb-4">Industry</h3>
              <ul className="space-y-2">
                <li>Healthcare</li>
                <li>eLearning</li>
                <li>Travel and Hospitality</li>
                <li>Retail and Ecommerce</li>
                <li>Manufacturing</li>
                <li>LegalTech</li>
                <li>Fintech</li>
                <li>Industry 4.0</li>
              </ul>
            </div>

            {/* Services and Newsletter */}
            <div>
              <h3 className="font-bold mb-4">Services</h3>
              <ul className="space-y-2 mb-6">
                <li>Web Design & Development</li>
                <li>Dashboard or CRM</li>
                <li>Logo designing</li>
                <li>Graphic designing</li>
                <li>Server Management</li>
              </ul>
              <h3 className="font-bold mb-2">Join Newsletter</h3>
              <input
                type="email"
                placeholder="Type email here"
                className="px-3 py-2 w-full border border-gray-300 dark:border-gray-600 rounded-md mb-2 bg-white dark:bg-gray-800 dark:text-white"
              />
              <button className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition">
                Subscribe
              </button>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-10 border-t border-gray-300 dark:border-gray-600 pt-4 text-sm flex flex-col md:flex-row justify-between mb-4">
            <p>© All rights reserved - VISIONITY</p>
            <div className="flex gap-4 mt-2 md:mt-0">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Terms and Conditions</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
