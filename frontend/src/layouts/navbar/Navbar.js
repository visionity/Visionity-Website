'use client'
import React, { useState, useEffect } from 'react';

const Navbar = ({ darkMode = false, toggleDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { 
      name: 'SERVICES', 
      href: '#services', 
      id: 'services',
      hoverContent: [
        { title: 'Web Application', href: '#web-app' },
        { title: 'Mobile App Development', href: '#mobile-app' },
        { title: 'Full Stack Development', href: '#fullstack' },
        { title: 'Digital Marketing', href: '#digital-marketing' },
        { title: 'UX/UI Design', href: '#uxui' }
      ]
    },
    { 
      name: 'TECHNOLOGY', 
      href: '#technology', 
      id: 'technology',
      hoverContent: [
        { title: 'React.js', href: '#react' },
        { title: 'Next.js', href: '#nextjs' },
        { title: 'Node.js', href: '#nodejs' },
        { title: 'AWS', href: '#aws' },
        { title: 'Blockchain', href: '#blockchain' }
      ]
    },
    { 
      name: 'INDUSTRY', 
      href: '#industry', 
      id: 'industry',
      hoverContent: [
        { title: 'Healthcare', href: '#healthcare' },
        { title: 'Finance', href: '#finance' },
        { title: 'Education', href: '#education' },
        { title: 'E-commerce', href: '#ecommerce' },
        { title: 'Manufacturing', href: '#manufacturing' }
      ] 
    },
    { 
      name: 'CASE STUDY', 
      href: '#caseStudy', 
      id: 'caseStudy',
      hoverContent: [
        { title: 'Enterprise Solutions', href: '#enterprise' },
        { title: 'Startup Projects', href: '#startup' },
        { title: 'Mobile Applications', href: '#mobile-cases' },
        { title: 'Web Platforms', href: '#web-platforms' }
      ] 
    },
    { 
      name: 'CONTACT US', 
      href: '#contact', 
      id: 'contact',
      hoverContent: [
        { title: 'Get Quote', href: '#quote' },
        { title: 'Support', href: '#support' },
        { title: 'Partnership', href: '#partnership' }
      ] 
    }
  ];
  
  return (
    <nav className={`
      fixed w-full z-50 transition-all duration-300
      ${scrolled ? 'shadow-lg' : ''}
      ${darkMode ? 
        `${scrolled ? 'bg-white' : 'bg-white'} text-black` : 
        `${scrolled ? 'bg-white' : 'bg-white'} text-black`}
    `}>
      <div className="max-w-7xl mx-auto">
        {/* Top bar with contact info and social icons */}
        {/* <div className={`
          hidden lg:flex justify-between items-center py-2 px-6 border-b
          ${darkMode ? 'border-gray-700' : 'border-gray-200'}
        `}>
          <div className="flex items-center space-x-6 text-sm">
            <a href="tel:+1234567890" className="flex items-center hover:text-blue-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+1 (234) 567-8900</span>
            </a>
            <a href="mailto:info@visiority.com" className="flex items-center hover:text-blue-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>info@visiority.com</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
          </div>
        </div> */}
        
        {/* Main navbar */}
        <div className="flex items-center justify-between py-4 px-6">
          {/* Logo */}
          <div className="flex items-center">
            <div className="font-bold text-xl tracking-tight relative cursor-pointer">
              <span className="text-2xl font-bold tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">VISIO</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">NITY</span>
              </span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center">
              {navLinks.map((link) => (
                <div 
                  key={link.id}
                  className="relative group"
                  onMouseEnter={() => setHoveredItem(link.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <a
                    href={link.href}
                    onClick={() => setActiveLink(link.id)}
                    className={`
                      relative px-4 py-6 text-sm font-medium transition-all duration-300 flex items-center
                      ${activeLink === link.id ? 
                        'text-blue-600 font-semibold' : 
                        'text-gray-800 hover:text-blue-600'
                      }
                    `}
                  >
                    {link.name}
                    {link.hoverContent && (
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </a>
                  
                  {/* Hover Content Panel */}
                  {link.hoverContent && hoveredItem === link.id && (
                    <div className={`
                      absolute left-0 mt-0 py-4 px-4 w-64 rounded-b-lg shadow-lg z-10
                      bg-white text-gray-800 border-t-2 border-blue-600
                    `}>
                      <div className="space-y-1">
                        {link.hoverContent.map((item, index) => (
                          <a 
                            key={index} 
                            href={item.href}
                            className="block px-3 py-2 text-sm rounded-md transition-all duration-200 hover:bg-blue-50 hover:text-blue-600"
                          >
                            {item.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <a 
              href="/get-started" 
              className="ml-8 px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-700 transition-colors"
            >
              Get Started
            </a>
            
            <button 
              onClick={toggleDarkMode}
              className="ml-4 p-2 rounded-full transition-all duration-300 hover:bg-gray-100"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={toggleDarkMode}
              className="p-2 mr-2 rounded-full"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            >
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <div className="py-2 px-4 border-t border-gray-200">
            {navLinks.map((link) => (
              <div key={link.id} className="py-2">
                <div
                  className="flex justify-between items-center py-2"
                  onClick={() => setActiveLink(activeLink === link.id ? '' : link.id)}
                >
                  <a
                    href={link.href}
                    className={`
                      font-medium
                      ${activeLink === link.id ? 'text-blue-600' : 'text-gray-800'}
                    `}
                  >
                    {link.name}
                  </a>
                  {link.hoverContent && (
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className={`h-4 w-4 transition-transform ${activeLink === link.id ? 'transform rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </div>
                
                {link.hoverContent && activeLink === link.id && (
                  <div className="ml-4 mt-2 space-y-1 border-l-2 border-blue-500 pl-4">
                    {link.hoverContent.map((item, index) => (
                      <a 
                        key={index} 
                        href={item.href}
                        className="block py-2 text-sm text-gray-700 hover:text-blue-600"
                      >
                        {item.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className="mt-4 pt-4 border-t border-gray-200">
              <a 
                href="/get-started" 
                className="block w-full py-3 bg-blue-600 text-white text-center font-medium rounded-full hover:bg-blue-700 transition-colors"
              >
                Get Started
              </a>
              
              <div className="flex justify-center mt-4 space-x-4">
                <a href="tel:+1234567890" className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Contact</span>
                </a>
                <a href="mailto:info@visiority.com" className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>Email</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;