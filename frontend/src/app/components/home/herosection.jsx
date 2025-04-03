'use client'
import React, { useState } from 'react'

function Herosection() {
     const [darkMode, setDarkMode] = useState(false);
   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <section className="pt-28 pb-20 px-4">
    <div className="container  mx-auto flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 md:pr-12">
        <h1
          className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Advanced{" "}
          <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
            AI Solutions
          </span>{" "}
          for Your Business
        </h1>
        <p
          className={`text-base md:text-lg mb-8 ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Visionity leverages cutting-edge artificial intelligence to
          transform your business operations and drive innovation.
        </p>
         <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-gradient-to-r from-pink-500 to-blue-500 text-white font-medium py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            Get Started
          </button>
          <button
            className={`border ${
              darkMode
                ? "border-gray-700 text-white"
                : "border-gray-300 text-[#161616]"
            } font-medium py-3 px-6 rounded-lg hover:shadow-md transition duration-300`}
          >
            Learn More
          </button>
        </div> 
      </div>
      <div className="md:w-1/2 mt-12 md:mt-0">
      <div
className={`relative h-60 md:h-96 w-full rounded-lg bg-gradient-to-br flex items-center justify-center overflow-hidden ${darkMode ? "bg-[#000000]" : "bg-gray-50"}`}
>
<img 
  src={darkMode ? "/images/darklogo.png" : "/images/lightlogo.png"} 
  alt="Background" 
  className="absolute inset-0 w-full h-full object-contain opacity-100"
/>
 <p className="relative text-white text-2xl font-semibold">Your Text Here</p> 
</div>

       </div> 
     </div>
  </section>
  )
}

export default Herosection;