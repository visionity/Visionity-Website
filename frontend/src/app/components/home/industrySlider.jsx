// components/IndustrySlider.jsx
import { useState, useEffect } from 'react';

const industries = [
  {
    title: "Logistics & Distribution",
    subtitle: "Bring your logistic industry-specific development requirements to get unique customer-centric solutions.",
    image: "/images/logistics.jpg", // Replace with your actual image path
  },
  {
    title: "Social Networking",
    subtitle: "Build engaging and seasoned social media applications that can offer a unique user experience.",
    image: "/images/social.jpg", // Replace with your actual image path
  },
  {
    title: "Real Estate",
    subtitle: "Get cutting-edge real-estate solutions designed specifically to meet your unique business requirements.",
    image: "/images/real-estate.jpg", // Replace with your actual image path
  },
  {
    title: "Travel & Hospitality",
    subtitle: "Deliver seamless travel experience along with seamless user experience with top-notch features.",
    image: "/images/travel.jpg", // Replace with your actual image path
  },
];

export default function IndustrySlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? industries.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === industries.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="relative w-full pb-16 mb-16 pt-8">
      {/* Container with overflow hidden */}
      <div className="relative overflow-hidden">
        {/* Slider track */}
        <div 
          className="flex transition-transform duration-500 ease-in-out" 
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {industries.map((industry, index) => (
            <div 
              key={index} 
              className="min-w-full px-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {industries.map((industry, i) => (
                  <div 
                    key={i} 
                    className={`relative h-[400px] sm:h-[350px] overflow-hidden cursor-pointer transition-all duration-300 ${i === (currentIndex % industries.length) ? 'ring-2 ring-white' : ''}`}
                    onClick={() => goToSlide(i)}
                  >
                    {/* Background image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
                      style={{ backgroundImage: `url(${industry.image})` }}
                    ></div>
                    
                    {/* Purple overlay */}
                    <div className="absolute inset-0 bg-purple-600 bg-opacity-70"></div>
                    
                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-center z-20 p-6 text-white">
                      <h2 className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4">{industry.title}</h2>
                      <div className="w-12 h-0.5 bg-white mb-4"></div>
                      <p className="text-sm sm:text-xs md:text-sm lg:text-base">{industry.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button 
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-3 shadow-lg transition-all"
          aria-label="Previous slide"
          disabled={isAnimating}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button 
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white bg-opacity-30 hover:bg-opacity-50 rounded-full p-3 shadow-lg transition-all"
          aria-label="Next slide"
          disabled={isAnimating}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots navigation */}
      <div className="flex justify-center mt-6 space-x-2">
        {industries.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 transition-all duration-300 rounded-full ${
              currentIndex === index ? "w-8 bg-purple-700" : "w-2 bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}