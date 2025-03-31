"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

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

  return (
    <div
      className={`min-h-screen ${darkMode ? "dark bg-gray-900" : "bg-gray-50"}`}
    >
      <header
        className={`fixed w-full z-10 ${
          darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-800"
        } shadow-md transition-colors duration-300`}
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center">
            <div className="h-10 w-10 relative mr-2">
              {/* Logo will be placed here */}
              <Image
                src="/images/logo.jpeg"
                alt="VisionityAI Logo"
                width={180}
                height={180}
                priority
              />
            </div>
            <span className="text-xl font-bold">VisionityAI</span>
          </div>

          <nav className="hidden md:flex space-x-8 font-medium">
            <a
              href="#"
              className={`${
                darkMode
                  ? "text-white hover:text-blue-400"
                  : "text-gray-800 hover:text-blue-600"
              } transition duration-300`}
            >
              Home
            </a>
            <a
              href="#solutions"
              className={`${
                darkMode
                  ? "text-white hover:text-blue-400"
                  : "text-gray-800 hover:text-blue-600"
              } transition duration-300`}
            >
              Solutions
            </a>
            <a
              href="#about"
              className={`${
                darkMode
                  ? "text-white hover:text-blue-400"
                  : "text-gray-800 hover:text-blue-600"
              } transition duration-300`}
            >
              About Us
            </a>
            <a
              href="#contact"
              className={`${
                darkMode
                  ? "text-white hover:text-blue-400"
                  : "text-gray-800 hover:text-blue-600"
              } transition duration-300`}
            >
              Contact
            </a>
          </nav>

          <div className="flex items-center">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${
                darkMode
                  ? "bg-gray-800 text-yellow-300"
                  : "bg-gray-200 text-gray-700"
              }`}
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

            <button className="ml-4 md:hidden">
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
      </header>

      <main>
        {/* Hero Section */}
        <section className="pt-28 pb-20 px-4">
          <div className="container mx-auto flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12">
              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 ${
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
                className={`text-lg mb-8 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                VisionityAI leverages cutting-edge artificial intelligence to
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
                      : "border-gray-300 text-gray-800"
                  } font-medium py-3 px-6 rounded-lg hover:shadow-md transition duration-300`}
                >
                  Learn More
                </button>
              </div>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0">
              <div className="relative h-64 md:h-96 w-full">
                <Image
                  src="/images/logo.jpeg"
                  alt="AI Illustration"
                  width={800}
                  height={600}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="solutions"
          className={`py-16 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                      ? "bg-gray-900 text-white"
                      : "bg-white text-gray-800"
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
          className={`py-16 ${darkMode ? "bg-gray-900" : "bg-white"}`}
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
                <div className="relative h-64 md:h-96 w-full">
                  <Image
                     src="/images/logo.jpeg"
                    alt="VisionityAI Team"
                    width={800}
                    height={600}
                    className="rounded-lg"
                  />
                </div>
              </div>
              <div className="md:w-1/2">
                <h2
                  className={`text-3xl md:text-4xl font-bold mb-6 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  About VisionityAI
                </h2>
                <p
                  className={`mb-6 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Founded in 2023, VisionityAI is at the forefront of AI
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
          className={`py-16 ${darkMode ? "bg-gray-800" : "bg-gray-100"}`}
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  quote:
                    "VisionityAI's computer vision solution has revolutionized our quality control process, reducing defects by 78% and increasing productivity.",
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
                    "The predictive analytics platform provided by VisionityAI has transformed how we forecast demand, resulting in 42% less inventory waste.",
                  name: "Amit Singh",
                  position: "Supply Chain Director, GlobalFoods",
                },
              ].map((testimonial, index) => (
                <div
                  key={index}
                  className={`rounded-xl p-8 ${
                    darkMode ? "bg-gray-900" : "bg-white"
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
        <section className={`py-20 ${darkMode ? "bg-gray-900" : "bg-white"}`}>
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
              Get in touch with our team today to discover how VisionityAI can
              help you achieve your business goals.
            </p>
            <button className="bg-gradient-to-r from-pink-500 to-blue-500 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 text-lg">
              Contact Us Today
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        id="contact"
        className={`py-12 ${
          darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-800"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 relative mr-2">
                  <Image
                     src="/images/logo.jpeg"
                    alt="VisionityAI Logo"
                    width={40}
                    height={40}
                  />
                </div>
                <span className="text-xl font-bold">VisionityAI</span>
              </div>
              <p
                className={`${
                  darkMode ? "text-gray-300" : "text-gray-600"
                } mb-4`}
              >
                Transforming businesses through advanced AI solutions.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className={`${
                    darkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className={`${
                    darkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className={`${
                    darkMode
                      ? "text-gray-300 hover:text-white"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Solutions</h3>
              <ul
                className={`space-y-2 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <li>
                  <a href="#" className="hover:underline">
                    Computer Vision
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Natural Language Processing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Predictive Analytics
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Machine Learning
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul
                className={`space-y-2 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <li>
                  <a href="#" className="hover:underline">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Press
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul
                className={`space-y-2 ${
                  darkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>123 Tech Park, Bangalore, India</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span>info@visionityai.com</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-5 w-5 mr-2 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span>+91 9876543210</span>
                </li>
              </ul>
            </div>
          </div>

          <div
            className={`mt-12 pt-8 border-t ${
              darkMode ? "border-gray-700" : "border-gray-200"
            } text-center`}
          >
            <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              © {new Date().getFullYear()} VisionityAI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
