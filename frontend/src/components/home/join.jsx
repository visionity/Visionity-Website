import React from 'react';

const FreelamceBanner = ({ darkMode }) => {
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="w-full mb-10 rounded-xl px-6 sm:px-10 md:px-20 py-16 flex flex-col items-center justify-center bg-[#3D1520] dark:bg-neutral-900 transition-colors duration-300">
        <h1 className="text-white dark:text-white text-3xl sm:text-4xl md:text-5xl font-medium text-center mb-8">
          Visionity services at your <span className="text-[#FF6B35]">fingertips</span>
        </h1>

        <button className="bg-white text-gray-800 px-6 py-3 rounded-md font-medium hover:bg-gray-100 dark:bg-[#FF6B35] dark:text-white dark:hover:bg-[#ff844f] transition-colors">
          Join Visionity
        </button>
      </div>
    </div>
  );
};

export default FreelamceBanner;
