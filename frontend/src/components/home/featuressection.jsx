'use client';
import React from 'react';

function Featuressection({ darkMode }) {
  const features = [
    {
      title: "Computer Vision",
      description:
        "Analyze and interpret visual data from the world around you with our advanced computer vision solutions.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      title: "Natural Language Processing",
      description:
        "Understand and generate human language with our state-of-the-art NLP models and technologies.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
    },
    {
      title: "Predictive Analytics",
      description:
        "Make data-driven decisions with our predictive analytics solutions that identify patterns and forecast trends.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="solutions" className={`py-16 ${darkMode ? "bg-[#000000]" : "bg-gray-100"}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? "text-white" : "text-blue-800"}`}>
            Our AI Solutions
          </h2>
          <p className={`max-w-2xl mx-auto ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
            Discover how our advanced AI technologies can transform your business operations and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`rounded-xl p-8 transition-transform duration-300 hover:-translate-y-2 shadow-lg ${
                darkMode ? "bg-[#111111] text-white" : "bg-white text-[#161616]"
              }`}
            >
              <div className={`${darkMode ? "text-blue-400" : "text-blue-600"}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              <p className={`${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Featuressection;
