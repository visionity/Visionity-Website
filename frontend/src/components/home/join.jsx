import React from 'react';

const FreelamceBanner = () => {
  return (
    <div className="w-full mb-10 rounded-xl px-20  bg-[#3D1520] py-16  flex flex-col items-center justify-center">
      <h1 className="text-white text-4xl md:text-5xl font-medium text-center mb-8">
        Visionity services at your <span className="text-[#FF6B35]">fingertips</span>
      </h1>
      
      <button className="bg-white text-gray-800 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors">
        Join Visionity
      </button>
    </div>
  );
};

export default FreelamceBanner;