//  import React, { useState } from 'react';

// function Footer() {
//    const [darkMode, setDarkMode] = useState(false); // Set initial value to false (light mode)

//   return (
//     <footer className={`py-12 ${darkMode ? "bg-[#000000] text-white" : "bg-gray-100 text-[#161616]"}`}>
//   <div className="container mx-auto px-4">
//     {/* Main footer content - responsive grid */}
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      
//       {/* Company info */}
//       <div className="col-span-1 sm:col-span-2 lg:col-span-1">
//         <div className="flex items-center mb-4">
//           <div className="h-10 w-10 relative mr-2">
//           <div className="h-10 w-10 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full flex items-center justify-center overflow-hidden">
//   <img  src={darkMode ? "/images/darklogo.png" : "/images/lightlogo.png"}  alt="Profile" className="h-full w-full object-cover" />
// </div>
         
//           </div>
//           <span className="text-xl font-bold">Visionity</span>
//         </div>
//         <p className={`mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
//           Leveraging cutting-edge artificial intelligence to transform your business operations and drive innovation.
//         </p>
//         <div className="flex space-x-4 mb-6 lg:mb-0">
//           {/* Social Media Icons */}
//           <a href="#" className={`${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-blue-600"} transition duration-300`}>
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
//             </svg>
//           </a>
//           <a href="#" className={`${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-blue-600"} transition duration-300`}>
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
//             </svg>
//           </a>
//           <a href="#" className={`${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-blue-600"} transition duration-300`}>
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
//             </svg>
//           </a>
//           <a href="#" className={`${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-blue-600"} transition duration-300`}>
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
//             </svg>
//           </a>
//         </div>
//       </div>
      
//       {/* Quick Links */}
//       <div className="col-span-1">
//         <h3 className={`text-lg font-semibold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>Quick Links</h3>
//         <ul className="space-y-2">
//           <li>
//             <a href="#" className={`${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-blue-600"} transition duration-300 block`}>Home</a>
//           </li>
//           <li>
//             <a href="#solutions" className={`${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-blue-600"} transition duration-300 block`}>Solutions</a>
//           </li>
//           <li>
//             <a href="#about" className={`${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-blue-600"} transition duration-300 block`}>About Us</a>
//           </li>
//           <li>
//             <a href="#contact" className={`${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-blue-600"} transition duration-300 block`}>Contact</a>
//           </li>
//           <li>
//             <a href="#" className={`${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-blue-600"} transition duration-300 block`}>Blog</a>
//           </li>
//           <li>
//             <a href="#" className={`${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-blue-600"} transition duration-300 block`}>Careers</a>
//           </li>
//         </ul>
//       </div>
      
//       {/* Solutions */}
//       <div className="col-span-1">
//         <h3 className={`text-lg font-semibold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>Our Solutions</h3>
//         <ul className="space-y-2">
//           <li>
//             <a href="#" className={`${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-blue-600"} transition duration-300 block`}>Computer Vision</a>
//           </li>
//           <li>
//             <a href="#" className={`${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-blue-600"} transition duration-300 block`}>Natural Language Processing</a>
//           </li>
//           <li>
//             <a href="#" className={`${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-blue-600"} transition duration-300 block`}>Predictive Analytics</a>
//           </li>
//           <li>
//             <a href="#" className={`${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-blue-600"} transition duration-300 block`}>Machine Learning</a>
//           </li>
//           <li>
//             <a href="#" className={`${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-blue-600"} transition duration-300 block`}>Data Visualization</a>
//           </li>
//           <li>
//             <a href="#" className={`${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-blue-600"} transition duration-300 block`}>Custom AI Solutions</a>
//           </li>
//         </ul>
//       </div>
      
//       {/* Contact Info */}
//       <div className="col-span-1 sm:col-span-2 lg:col-span-1">
//         <h3 className={`text-lg font-semibold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>Contact Us</h3>
//         <ul className="space-y-3">
//           <li className="flex items-start">
//             <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 mr-2 mt-0.5 flex-shrink-0 ${darkMode ? "text-blue-400" : "text-blue-600"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//             </svg>
//             <span className={darkMode ? "text-gray-300" : "text-gray-600"}>
//               123 AI Innovation Street, Bangalore, India 560001
//             </span>
//           </li>
//           <li className="flex items-start">
//             <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 mr-2 mt-0.5 flex-shrink-0 ${darkMode ? "text-blue-400" : "text-blue-600"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//             </svg>
//             <span className={darkMode ? "text-gray-300" : "text-gray-600"}>
//               info@Visionity.com
//             </span>
//           </li>
//           <li className="flex items-start">
//             <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 mr-2 mt-0.5 flex-shrink-0 ${darkMode ? "text-blue-400" : "text-blue-600"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//             </svg>
//             <span className={darkMode ? "text-gray-300" : "text-gray-600"}>
//               +91 80 1234 5678
//             </span>
//           </li>
//         </ul>
        
//         {/* Newsletter */}
//         <div className="mt-6">
//           <h4 className={`text-base font-medium mb-2 ${darkMode ? "text-white" : "text-gray-900"}`}>Subscribe to our newsletter</h4>
//           <div className="flex flex-col sm:flex-row">
//             <input 
//               type="email" 
//               placeholder="Enter your email" 
//               className={`px-4 py-2 rounded-lg ${darkMode ? "bg-gray-700 text-white border-gray-600 focus:border-blue-500" : "bg-white text-[#161616] border-gray-300 focus:border-blue-500"} border focus:outline-none focus:ring-1 focus:ring-blue-500 mb-2 sm:mb-0 sm:mr-2`}
//             />
//             <button className="bg-gradient-to-r from-pink-500 to-blue-500 text-white font-medium py-2 px-4 rounded-lg shadow hover:shadow-lg transition duration-300">
//               Subscribe
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
    
//     {/* Bottom footer with copyright */}
//     <div className="mt-12 pt-8 border-t border-gray-700">
//       <div className="flex flex-col md:flex-row justify-between items-center">
//         <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"} mb-4 md:mb-0`}>
//           © {new Date().getFullYear()} Visionity. All rights reserved.
//         </p>
//         <div className="flex flex-wrap justify-center space-x-4 text-sm">
//           <a href="#" className={`${darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-blue-600"} transition duration-300 mb-2 md:mb-0`}>Privacy Policy</a>
//           <a href="#" className={`${darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-blue-600"} transition duration-300 mb-2 md:mb-0`}>Terms of Service</a>
//           <a href="#" className={`${darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-blue-600"} transition duration-300 mb-2 md:mb-0`}>Cookie Policy</a>
//           <a href="#" className={`${darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-blue-600"} transition duration-300 mb-2 md:mb-0`}>Sitemap</a>
//         </div>
//       </div>
//     </div>
//   </div>
// </footer>
//   );
// }

// export default Footer;
