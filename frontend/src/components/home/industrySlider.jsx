// components/IndustrySlider.jsx
import { useState, useEffect } from 'react';

const industries = [
  {
    title: "Logistics & Distribution",
    subtitle: "Bring your logistic industry-specific development requirements to get unique customer-centric solutions.",
    image: "/images/logistics.jpg",
  },
  {
    title: "Social Networking",
    subtitle: "Build engaging and seasoned social media applications that can offer a unique user experience.",
    image: "/images/social.jpg",
  },
  {
    title: "Real Estate",
    subtitle: "Get cutting-edge real-estate solutions designed specifically to meet your unique business requirements.",
    image: "/images/real-estate.jpg",
  },
  {
    title: "Travel & Hospitality",
    subtitle: "Deliver seamless travel experience along with seamless user experience with top-notch features.",
    image: "/images/travel.jpg",
  },
];

export default function IndustrySlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
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
    <div className="relative w-full pb-16 pt-8">
      {/* Slider container */}
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {industries.map((industry, index) => (
            <div key={index} className="min-w-full px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {industries.map((item, i) => (
                  <div
                    key={i}
                    className={`relative h-[300px] sm:h-[350px] lg:h-[400px] overflow-hidden cursor-pointer transition-all duration-300 ${
                      i === (currentIndex % industries.length) ? 'ring-2 ring-white dark:ring-gray-800' : ''
                    }`}
                    onClick={() => goToSlide(i)}
                  >
                    {/* Background image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105"
                      style={{ backgroundImage: `url(${item.image})` }}
                    ></div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-purple-600/70 dark:bg-purple-800/70"></div>

                    {/* Text Content */}
                    <div className="absolute inset-0 flex flex-col justify-center z-20 px-4 sm:px-6 text-white dark:text-gray-100">
                      <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold mb-3">
                        {item.title}
                      </h2>
                      <div className="w-12 h-0.5 bg-white dark:bg-gray-300 mb-4"></div>
                      <p className="text-sm sm:text-base md:text-base lg:text-lg leading-snug">
                        {item.subtitle}
                      </p>
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
          className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/30 hover:bg-white/50 dark:bg-black/30 dark:hover:bg-black/50 rounded-full p-2 shadow-lg transition-all"
          aria-label="Previous slide"
          disabled={isAnimating}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-900 dark:text-purple-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/30 hover:bg-white/50 dark:bg-black/30 dark:hover:bg-black/50 rounded-full p-2 shadow-lg transition-all"
          aria-label="Next slide"
          disabled={isAnimating}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-900 dark:text-purple-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {industries.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentIndex === index ? "w-8 bg-purple-700 dark:bg-purple-400" : "w-2 bg-gray-300 dark:bg-gray-500"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}
