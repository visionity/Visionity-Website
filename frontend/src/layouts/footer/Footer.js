import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Newsletter Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-300 pb-10 mb-10">
          <div>
            <h2 className="text-xl font-semibold text-blue-900">Subscribe to our</h2>
            <h1 className="text-3xl font-bold text-blue-800">Newsletter</h1>
          </div>
          <div className="flex mt-4 md:mt-0">
  <input
    type="email"
    placeholder="Enter your email"
    className="px-4 py-2 rounded-l-md border border-gray-300 w-72
               focus:outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-300
               transition duration-300"
  />
  <button className="bg-blue-900 text-white px-6 py-2 rounded-r-md hover:bg-blue-800 transition duration-300">
    Join
  </button>
</div>

        </div>

        {/* Footer Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Logo and Social */}
          <div>
            <div className="mb-4">
              <img src="images/lightlogo.png" alt="Visionity Logo" className="w-24" style={{ width: '70%',  height: '100%',  display: 'block', maxWidth: '100%'  }}/>
            </div>
            <p className="font-semibold mb-4">Top IT Consulting Company Delivering</p>
            <p className="font-semibold mb-4">Custom Innovative Solutions</p>
            <div className="flex gap-3 text-2xl">
              <a href="#"><i className="fab fa-facebook text-blue-600"></i></a>
              <a href="#"><i className="fab fa-linkedin text-blue-700"></i></a>
              <a href="#"><i className="fab fa-instagram text-pink-500"></i></a>
              <a href="#"><i className="fab fa-x-twitter text-black"></i></a>
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
              <li>Retail ans Ecommerce</li>
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
              className="px-3 py-2 w-full border border-gray-300 rounded-md mb-2"
            />
            <button className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-gray-300 pt-4 text-sm flex flex-col md:flex-row justify-between"style={{ marginBottom:'10px'}}>
          <p>© All rights reserved - VISIONITY</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms and Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
