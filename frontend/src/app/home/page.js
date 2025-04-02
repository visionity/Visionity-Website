"use client";

import { useState, useEffect } from "react";
import Faq from "../../constants/FaqConstants";
import WhatsAppButton from "../../constants/whatsapp";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Initialize theme based on user preference
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkMode(true);
    }
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div
      className={`min-h-screen ${darkMode ? "dark bg-[#000000]" : "bg-gray-50"}`}
    >
    <header
  className={`fixed w-full z-10 ${
    darkMode ? "bg-[#000000] text-white" : "bg-white text-[#161616]"
  } shadow-md transition-colors duration-300`}
>
  <div className="container mx-auto px-6 py-4 flex items-center justify-between">
    <div className="flex items-center">
      <div className="h-10 w-10 relative mr-2">
      <div className="h-13 w-13 bg-gradient-to-r rounded-full flex items-center justify-center overflow-hidden">
  <img 
    src="/images/lightlogo.png" 
    alt="Profile" 
    className="h-full w-full object-cover dark:hidden"
  />
  <img 
    src="/images/darklogo.png" 
    alt="Profile" 
    className="h-full w-full object-cover hidden dark:block"
  />
</div>

      </div>
      <span className="text-2xl font-bold tracking-tight">
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">VISION</span>
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">ITY</span>
    {/* <span className="text-blue-600 dark:text-blue-400">AI</span> */}
    {/* <span className="absolute -mt-1 ml-0.5 text-xs text-gray-500 dark:text-gray-400">®</span> */}
  </span>
    </div>

    {/* Desktop Navigation */}
    <nav className="hidden md:flex space-x-6 font-medium justify-center items-center">
      <a
        href="#"
        className={`${
          darkMode
            ? "text-white hover:text-blue-400"
            : "text-[#161616] hover:text-blue-600"
        } transition duration-300 relative group py-2 px-3`}
      >
        SERVICES
        <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${
          darkMode ? "bg-blue-400" : "bg-blue-600"
        } transition-all duration-300 group-hover:w-full`}></span>
      </a>
      <a
        href="#solutions"
        className={`${
          darkMode
            ? "text-white hover:text-blue-400"
            : "text-[#161616] hover:text-blue-600"
        } transition duration-300 relative group py-2 px-3`}
      >
        PROJECTS
        <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${
          darkMode ? "bg-blue-400" : "bg-blue-600"
        } transition-all duration-300 group-hover:w-full`}></span>
      </a>
      <a
        href="#about"
        className={`${
          darkMode
            ? "text-white hover:text-blue-400"
            : "text-[#161616] hover:text-blue-600"
        } transition duration-300 relative group py-2 px-3`}
      >
        ABOUT US
        <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${
          darkMode ? "bg-blue-400" : "bg-blue-600"
        } transition-all duration-300 group-hover:w-full`}></span>
      </a>
      <a
        href="#contact"
        className={`${
          darkMode
            ? "text-white hover:text-blue-400"
            : "text-[#161616] hover:text-blue-600"
        } transition duration-300 relative group py-2 px-3`}
      >
        CONTACT US
        <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${
          darkMode ? "bg-blue-400" : "bg-blue-600"
        } transition-all duration-300 group-hover:w-full`}></span>
      </a>
      <a
        href="#contact"
        className={`${
          darkMode
            ? "text-white hover:text-blue-400"
            : "text-[#161616] hover:text-blue-600"
        } transition duration-300 relative group py-2 px-3`}
      >
        CASE STUDIES
        <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${
          darkMode ? "bg-blue-400" : "bg-blue-600"
        } transition-all duration-300 group-hover:w-full`}></span>
      </a>
    </nav>

    <div className="flex items-center space-x-4">
      {/* Get Started Button */}
      <a
        href="/getstarted"
        className={`hidden md:inline-flex items-center justify-center px-4 py-2 rounded-full font-medium ${
          darkMode
            ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700"
            : "bg-gradient-to-r from-blue-600 to-purple-500 text-white hover:from-blue-700 hover:to-purple-600"
        } transition-all duration-300 transform hover:scale-105 shadow-md`}
      >
        Get Started
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 ml-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </a>

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className={`p-2 rounded-full ${
          darkMode
            ? "bg-[#000000] text-yellow-300 hover:bg-gray-700"
            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
        } transition-colors duration-300`}
        aria-label="Toggle theme"
      >
        {darkMode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        )}
      </button>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden" 
        onClick={toggleMobileMenu}
        aria-label="Open menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  </div>

  {/* Mobile Navigation Menu */}
  {mobileMenuOpen && (
    <div 
      className={`md:hidden px-4 py-3 ${
        darkMode ? "bg-[#000000]" : "bg-gray-50"
      } shadow-lg`}
    >
      <div className="flex flex-col space-y-3">
        <a
          href="#"
          className={`px-3 py-2 rounded-md ${
            darkMode
              ? "text-white hover:bg-gray-700"
              : "text-[#161616] hover:bg-gray-200"
          } transition duration-300`}
          onClick={toggleMobileMenu}
        >
          Home
        </a>
        <a
          href="#solutions"
          className={`px-3 py-2 rounded-md ${
            darkMode
              ? "text-white hover:bg-gray-700"
              : "text-[#161616] hover:bg-gray-200"
          } transition duration-300`}
          onClick={toggleMobileMenu}
        >
          Solutions
        </a>
        <a
          href="#about"
          className={`px-3 py-2 rounded-md ${
            darkMode
              ? "text-white hover:bg-gray-700"
              : "text-[#161616] hover:bg-gray-200"
          } transition duration-300`}
          onClick={toggleMobileMenu}
        >
          About Us
        </a>
        <a
          href="#contact"
          className={`px-3 py-2 rounded-md ${
            darkMode
              ? "text-white hover:bg-gray-700"
              : "text-[#161616] hover:bg-gray-200"
          } transition duration-300`}
          onClick={toggleMobileMenu}
        >
          Contact
        </a>
        {/* Get Started Button for Mobile */}
        <a
          href="/get-started"
          className={`flex items-center justify-center px-4 py-2 rounded-md font-medium ${
            darkMode
              ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
              : "bg-gradient-to-r from-blue-600 to-purple-500 text-white"
          } transition duration-300`}
          onClick={toggleMobileMenu}
        >
          Get Started
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>
    </div>
  )}
</header>

      <main>
        {/* Hero Section */}
        <section className="pt-28 pb-20 px-4">
          <div className="container mx-auto flex flex-col md:flex-row items-center">
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
      {/* <p className="relative text-white text-2xl font-semibold">Your Text Here</p> */}
    </div>

            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="solutions"
          className={`py-16 ${darkMode ? "bg-[#000000]" : "bg-gray-100"}`}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2
                className={`text-3xl md:text-4xl font-bold mb-4 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Our AI Solutions
              </h2>
              <p
                className={`max-w-2xl mx-auto ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Discover how our advanced AI technologies can transform your
                business operations and drive growth.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                      />
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
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  ),
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className={`rounded-xl p-8 ${
                    darkMode
                      ? "bg-[#000000] text-white"
                      : "bg-white text-[#161616]"
                  } shadow-lg transition-transform duration-300 hover:-translate-y-2`}
                >
                  <div
                    className={`${
                      darkMode ? "text-blue-400" : "text-blue-600"
                    }`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p
                    className={`${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className={`py-16 ${darkMode ? "bg-[#000000]" : "bg-white"}`}
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
              <div className="relative h-60 md:h-96 w-full rounded-lg bg-gradient-to-br  flex items-center justify-center overflow-hidden">
  <img 
    src={darkMode ? "/images/darklogo.png" : "/images/lightlogo.png"} 
    alt="Background" 
    className="absolute inset-0 w-full h-full object-contain opacity-100"
  />
  {/* <p className="relative text-white text-2xl font-semibold">Your Text Here</p> */}
</div>
              </div>
              <div className="md:w-1/2">
                <h2
                  className={`text-3xl md:text-4xl font-bold mb-6 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  About Visionity
                </h2>
                <p
                  className={`mb-6 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Founded in 2023, Visionity is at the forefront of AI
                  innovation, dedicated to creating solutions that empower
                  businesses to achieve their goals through intelligent
                  automation and data-driven insights.
                </p>
                <p
                  className={`mb-8 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Our team of AI specialists, data scientists, and industry
                  experts are committed to delivering cutting-edge technologies
                  that solve real-world problems and create tangible value for
                  our clients.
                </p>
                <button className="bg-gradient-to-r from-pink-500 to-blue-500 text-white font-medium py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                  Learn More About Us
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          className={`py-16 ${darkMode ? "bg-[#000000]" : "bg-gray-100"}`}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2
                className={`text-3xl md:text-4xl font-bold mb-4 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                What Our Clients Say
              </h2>
              <p
                className={`max-w-2xl mx-auto ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Hear from businesses that have transformed their operations with
                our AI solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "Visionity's computer vision solution has revolutionized our quality control process, reducing defects by 78% and increasing productivity.",
                  name: "Rahul Sharma",
                  position: "CTO, TechInnovate",
                },
                {
                  quote:
                    "Implementing their NLP solution for our customer service has decreased response time by 65% while maintaining high customer satisfaction scores.",
                  name: "Priya Patel",
                  position: "Head of Customer Success, RetailMax",
                },
                {
                  quote:
                    "The predictive analytics platform provided by Visionity has transformed how we forecast demand, resulting in 42% less inventory waste.",
                  name: "Amit Singh",
                  position: "Supply Chain Director, GlobalFoods",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className={`rounded-xl p-8 ${
                    darkMode ? "bg-[#000000]" : "bg-white"
                  } shadow-lg`}
                >
                  <div
                    className={`mb-6 ${
                      darkMode ? "text-blue-400" : "text-blue-600"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>
                  <p
                    className={`mb-6 text-lg ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {testimonial.quote}
                  </p>
                  <div>
                    <p
                      className={`font-semibold ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {testimonial.name}
                    </p>
                    <p
                      className={`${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}
                    >
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className={`py-20 ${darkMode ? "bg-[#000000]" : "bg-white"}`}>
          <div className="container mx-auto px-4 text-center">
            <h2
              className={`text-3xl md:text-4xl font-bold mb-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Ready to Transform Your Business with AI?
            </h2>
            <p
              className={`max-w-2xl mx-auto mb-8 text-lg ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Get in touch with our team today to discover how Visionity can
              help you achieve your business goals.
            </p>
            <button className="bg-gradient-to-r from-pink-500 to-blue-500 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-lg">
              Contact Us Today
            </button>
          </div>
          
        </section>
        {/* made by abhishek */}
        <Faq />
        <WhatsAppButton />
        {/* end by abhishek */}
      </main>
      <footer className={`py-12 ${darkMode ? "bg-[#000000] text-white" : "bg-gray-100 text-[#161616]"}`}>
  <div className="container mx-auto px-4">
    {/* Main footer content - responsive grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      
      {/* Company info */}
      <div className="col-span-1 sm:col-span-2 lg:col-span-1">
        <div className="flex items-center mb-4">
          <div className="h-10 w-10 relative mr-2">
          <div className="h-10 w-10 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full flex items-center justify-center overflow-hidden">
  <img  src={darkMode ? "/images/darklogo.png" : "/images/lightlogo.png"}  alt="Profile" className="h-full w-full object-cover" />
</div>
         
          </div>
          <span className="text-xl font-bold">Visionity</span>
        </div>
        <p className={`mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
          Leveraging cutting-edge artificial intelligence to transform your business operations and drive innovation.
        </p>
        <div className="flex space-x-4 mb-6 lg:mb-0">
          {/* Social Media Icons */}
          <a href="#" className={`${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-blue-600"} transition duration-300`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>
          <a href="#" className={`${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-blue-600"} transition duration-300`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
            </svg>
          </a>
          <a href="#" className={`${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-blue-600"} transition duration-300`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
          <a href="#" className={`${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-blue-600"} transition duration-300`}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
          </a>
        </div>
      </div>
      
      {/* Quick Links */}
      <div className="col-span-1">
        <h3 className={`text-lg font-semibold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>Quick Links</h3>
        <ul className="space-y-2">
          <li>
            <a href="#" className={`${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-blue-600"} transition duration-300 block`}>Home</a>
          </li>
          <li>
            <a href="#solutions" className={`${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-blue-600"} transition duration-300 block`}>Solutions</a>
          </li>
          <li>
            <a href="#about" className={`${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-blue-600"} transition duration-300 block`}>About Us</a>
          </li>
          <li>
            <a href="#contact" className={`${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-blue-600"} transition duration-300 block`}>Contact</a>
          </li>
          <li>
            <a href="#" className={`${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-blue-600"} transition duration-300 block`}>Blog</a>
          </li>
          <li>
            <a href="#" className={`${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-blue-600"} transition duration-300 block`}>Careers</a>
          </li>
        </ul>
      </div>
      
      {/* Solutions */}
      <div className="col-span-1">
        <h3 className={`text-lg font-semibold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>Our Solutions</h3>
        <ul className="space-y-2">
          <li>
            <a href="#" className={`${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-blue-600"} transition duration-300 block`}>Computer Vision</a>
          </li>
          <li>
            <a href="#" className={`${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-blue-600"} transition duration-300 block`}>Natural Language Processing</a>
          </li>
          <li>
            <a href="#" className={`${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-blue-600"} transition duration-300 block`}>Predictive Analytics</a>
          </li>
          <li>
            <a href="#" className={`${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-blue-600"} transition duration-300 block`}>Machine Learning</a>
          </li>
          <li>
            <a href="#" className={`${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-blue-600"} transition duration-300 block`}>Data Visualization</a>
          </li>
          <li>
            <a href="#" className={`${darkMode ? "text-gray-300 hover:text-white" : "text-gray-600 hover:text-blue-600"} transition duration-300 block`}>Custom AI Solutions</a>
          </li>
        </ul>
      </div>
      
      {/* Contact Info */}
      <div className="col-span-1 sm:col-span-2 lg:col-span-1">
        <h3 className={`text-lg font-semibold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>Contact Us</h3>
        <ul className="space-y-3">
          <li className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 mr-2 mt-0.5 flex-shrink-0 ${darkMode ? "text-blue-400" : "text-blue-600"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className={darkMode ? "text-gray-300" : "text-gray-600"}>
              123 AI Innovation Street, Bangalore, India 560001
            </span>
          </li>
          <li className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 mr-2 mt-0.5 flex-shrink-0 ${darkMode ? "text-blue-400" : "text-blue-600"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className={darkMode ? "text-gray-300" : "text-gray-600"}>
              info@Visionity.com
            </span>
          </li>
          <li className="flex items-start">
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-6 w-6 mr-2 mt-0.5 flex-shrink-0 ${darkMode ? "text-blue-400" : "text-blue-600"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className={darkMode ? "text-gray-300" : "text-gray-600"}>
              +91 80 1234 5678
            </span>
          </li>
        </ul>
        
        {/* Newsletter */}
        <div className="mt-6">
          <h4 className={`text-base font-medium mb-2 ${darkMode ? "text-white" : "text-gray-900"}`}>Subscribe to our newsletter</h4>
          <div className="flex flex-col sm:flex-row">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className={`px-4 py-2 rounded-lg ${darkMode ? "bg-gray-700 text-white border-gray-600 focus:border-blue-500" : "bg-white text-[#161616] border-gray-300 focus:border-blue-500"} border focus:outline-none focus:ring-1 focus:ring-blue-500 mb-2 sm:mb-0 sm:mr-2`}
            />
            <button className="bg-gradient-to-r from-pink-500 to-blue-500 text-white font-medium py-2 px-4 rounded-lg shadow hover:shadow-lg transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
    
    {/* Bottom footer with copyright */}
    <div className="mt-12 pt-8 border-t border-gray-700">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"} mb-4 md:mb-0`}>
          © {new Date().getFullYear()} Visionity. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center space-x-4 text-sm">
          <a href="#" className={`${darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-blue-600"} transition duration-300 mb-2 md:mb-0`}>Privacy Policy</a>
          <a href="#" className={`${darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-blue-600"} transition duration-300 mb-2 md:mb-0`}>Terms of Service</a>
          <a href="#" className={`${darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-blue-600"} transition duration-300 mb-2 md:mb-0`}>Cookie Policy</a>
          <a href="#" className={`${darkMode ? "text-gray-400 hover:text-white" : "text-gray-600 hover:text-blue-600"} transition duration-300 mb-2 md:mb-0`}>Sitemap</a>
        </div>
      </div>
    </div>
  </div>
</footer>
    </div>
  );
}