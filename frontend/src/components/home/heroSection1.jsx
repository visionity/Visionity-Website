import React from 'react';

function HeroSection1({ darkMode }) {
  const stats = [
    {
      icon: "📱",
      number: "4500+",
      label: "Apps Developed",
      bgColor: "bg-pink-100 dark:bg-pink-500",
      textColor: "text-pink-500 dark:text-white"
    },
    {
      icon: "👨‍💻",
      number: "1200+",
      label: "Developers",
      bgColor: "bg-green-100 dark:bg-green-500",
      textColor: "text-green-500 dark:text-white"
    },
    {
      icon: "🌐",
      number: "2200+",
      label: "Websites Designed",
      bgColor: "bg-blue-100 dark:bg-blue-500",
      textColor: "text-blue-500 dark:text-white"
    },
    {
      icon: "🎮",
      number: "140+",
      label: "Games Developed",
      bgColor: "bg-red-100 dark:bg-red-500",
      textColor: "text-red-500 dark:text-white"
    },
    {
      icon: "🤖",
      number: "120+",
      label: "AI & IoT Solutions",
      bgColor: "bg-purple-100 dark:bg-purple-500",
      textColor: "text-purple-500 dark:text-white"
    },
    {
      icon: "⭐",
      number: "2700+",
      label: "Happy Clients",
      bgColor: "bg-yellow-100 dark:bg-yellow-500",
      textColor: "text-yellow-600 dark:text-white"
    },
    {
      icon: "☁️",
      number: "120+",
      label: "Salesforce Solutions",
      bgColor: "bg-green-100 dark:bg-green-500",
      textColor: "text-green-500 dark:text-white"
    },
    {
      icon: "📊",
      number: "40+",
      label: "Data Science",
      bgColor: "bg-purple-100 dark:bg-purple-500",
      textColor: "text-purple-500 dark:text-white"
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-black text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        
        {/* Hero Title and Description */}
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
            Hyperlink InfoSystem Bring Transformation For Global Businesses
          </h1>
          <div className="h-1 w-24 sm:w-32 bg-gray-300 dark:bg-gray-700 mb-6 sm:mb-8"></div>
          <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 mb-10 sm:mb-12 md:mb-16 max-w-4xl">
            Starting from listening to your business problems to delivering accurate solutions; we make sure to follow
            industry-specific standards and combine them with our technical knowledge, development expertise, and
            extensive research.
          </p>
        </div>

        {/* Stats Grid 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {stats.slice(0, 4).map((stat, index) => (
            <div key={index} className="flex items-center p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center ${stat.bgColor} rounded-lg text-xl sm:text-2xl ${stat.textColor}`}>
                {stat.icon}
              </div>
              <div className="ml-3 sm:ml-4">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold">{stat.number}</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Spacer */}
        <div className="h-6 sm:h-8 md:h-12"></div>

        {/* Stats Grid 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {stats.slice(4, 8).map((stat, index) => (
            <div key={index} className="flex items-center p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center ${stat.bgColor} rounded-lg text-xl sm:text-2xl ${stat.textColor}`}>
                {stat.icon}
              </div>
              <div className="ml-3 sm:ml-4">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold">{stat.number}</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll to Top Button */}
        <div className="hidden md:block fixed bottom-6 right-6">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'mooth' })}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-indigo-700 text-white flex items-center justify-center shadow-lg hover:bg-indigo-800 transition-colors"
            aria-label="Scroll to top"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection1;
