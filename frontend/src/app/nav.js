import React, { useState, useEffect } from 'react';

const Navbar = ({ darkMode = false, toggleDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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
    { name: 'Home', href: '#', id: 'home' },
    { name: 'Solutions', href: '#solutions', id: 'solutions' },
    { name: 'About Us', href: '#about', id: 'about' },
    { name: 'Contact', href: '#contact', id: 'contact' }
  ];
  
  return (
    <nav className={`
      fixed w-full z-50 px-6 py-5 transition-all duration-300
      ${scrolled ? 'shadow-lg backdrop-blur-md bg-opacity-90' : ''}
      ${darkMode ? 
        `${scrolled ? 'bg-gray-900 bg-opacity-90' : 'bg-transparent'} text-white` : 
        `${scrolled ? 'bg-white bg-opacity-90' : 'bg-transparent'} text-gray-800`}
    `}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="font-bold text-xl tracking-tight relative cursor-pointer">
            <span className={darkMode ? "text-gray-100" : "text-gray-800"}>Vision</span>
            <span className={darkMode ? "text-blue-400" : "text-blue-600"}>ity</span>
            <span className={darkMode ? "text-teal-400" : "text-teal-500"}>
              AI
              <span className="absolute -top-1.5 right-0 h-1 w-1 rounded-full bg-purple-500 animate-pulse"></span>
            </span>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setActiveLink(link.id)}
              className={`
                relative px-4 py-3 font-medium rounded-lg transition-all duration-300
                ${activeLink === link.id ? 
                  `${darkMode ? 'text-blue-400' : 'text-blue-600'} font-semibold` : 
                  `${darkMode ? 'text-gray-300' : 'text-gray-700'} hover:${darkMode ? 'text-blue-400' : 'text-blue-600'}`
                }
                group
              `}
            >
              {link.name}
              <span className={`
                absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 
                ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} 
                transition-all duration-300 group-hover:w-4/5
                ${activeLink === link.id ? 'w-4/5' : ''}
              `}></span>
            </a>
          ))}
          
          <a 
            href="/get-started" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`
              ml-4 px-6 py-3 rounded-full font-medium 
              transition-all duration-300 transform hover:scale-105 hover:shadow-lg
              ${darkMode ? 
                'bg-blue-500 hover:bg-blue-400 text-white' : 
                'bg-blue-600 hover:bg-blue-500 text-white'}
            `}
          >
            Get Started
          </a>
          
          {/* Dark Mode Toggle */}
          <button 
            onClick={toggleDarkMode}
            className="ml-3 p-3 rounded-full transition-all duration-300 hover:bg-opacity-20"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleDarkMode}
            className="p-2 mr-2 rounded-full"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            className={`p-2 rounded-lg ${darkMode ? 'text-gray-200 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}`}
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
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={`md:hidden py-4 px-4 mt-2 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => {
                setActiveLink(link.id);
                setMobileMenuOpen(false);
              }}
              className={`
                block py-3 px-4 rounded-md my-1 font-medium transition duration-300
                ${activeLink === link.id ? 
                  `${darkMode ? 'bg-gray-700 text-blue-400' : 'bg-gray-100 text-blue-600'}` : 
                  `${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-800 hover:bg-gray-100'}`
                }
              `}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="/get-started" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`
              block w-full mt-4 px-6 py-3 rounded-full font-medium text-center
              transition-all duration-300
              ${darkMode ? 
                'bg-blue-500 hover:bg-blue-400 text-white' : 
                'bg-blue-600 hover:bg-blue-500 text-white'}
            `}
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;