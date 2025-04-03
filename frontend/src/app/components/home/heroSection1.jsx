import React from 'react'

function HeroSection1() {


  const stats = [
    {
      icon: "📱",
      number: "4500+",
      label: "Apps Developed",
      bgColor: "bg-pink-100",
      textColor: "text-pink-500"
    },
    {
      icon: "👨‍💻",
      number: "1200+",
      label: "Developers",
      bgColor: "bg-green-100",
      textColor: "text-green-500"
    },
    {
      icon: "🌐",
      number: "2200+",
      label: "Websites Designed",
      bgColor: "bg-blue-100",
      textColor: "text-blue-500"
    },
    {
      icon: "🎮",
      number: "140+",
      label: "Games Developed",
      bgColor: "bg-red-100",
      textColor: "text-red-500"
    },
    {
      icon: "🤖",
      number: "120+",
      label: "AI & IoT Solutions",
      bgColor: "bg-purple-100",
      textColor: "text-purple-500"
    },
    {
      icon: "⭐",
      number: "2700+",
      label: "Happy Clients",
      bgColor: "bg-yellow-100",
      textColor: "text-yellow-600"
    },
    {
      icon: "☁️",
      number: "120+",
      label: "Salesforce Solutions",
      bgColor: "bg-green-100",
      textColor: "text-green-500"
    },
    {
      icon: "📊",
      number: "40+",
      label: "Data Science",
      bgColor: "bg-purple-100",
      textColor: "text-purple-500"
    }
  ];

  return (
    <div className="container bg-white mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
      {/* Hero Title and Description - more responsive text sizing */}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
          Hyperlink InfoSystem Bring Transformation For Global Businesses
        </h1>
        <div className="h-1 w-24 sm:w-32 bg-gray-300 mb-6 sm:mb-8"></div>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-10 sm:mb-12 md:mb-16 max-w-4xl">
          Starting from listening to your business problems to delivering accurate solutions; we make sure to follow
          industry-specific standards and combine them with our technical knowledge, development expertise, and
          extensive research.
        </p>
      </div>

      {/* Stats Grid - Improved responsive grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
        {stats.slice(0, 4).map((stat, index) => (
          <div key={index} className="flex items-center p-4 sm:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center ${stat.bgColor} rounded-lg text-xl sm:text-2xl ${stat.textColor}`}>
              {stat.icon}
            </div>
            <div className="ml-3 sm:ml-4">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">{stat.number}</div>
              <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Responsive spacer */}
      <div className="h-6 sm:h-8 md:h-12"></div>
      
      {/* Second Stats Grid with same responsive improvements */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
        {stats.slice(4, 8).map((stat, index) => (
          <div key={index} className="flex items-center p-4 sm:p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center ${stat.bgColor} rounded-lg text-xl sm:text-2xl ${stat.textColor}`}>
              {stat.icon}
            </div>
            <div className="ml-3 sm:ml-4">
              <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">{stat.number}</div>
              <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Scroll to top button - Hide on small screens, show on larger */}
      <div className="hidden md:block fixed bottom-6 right-6">
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-indigo-700 text-white flex items-center justify-center shadow-lg hover:bg-indigo-800 transition-colors"
          aria-label="Scroll to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default HeroSection1
  