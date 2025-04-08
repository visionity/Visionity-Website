'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Navbar = ({ darkMode = false, onToggleDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const router = useRouter();
  
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
        { title: 'Web Development', onClick: ()=>{router.push('/services/web-development')} },
        { title: 'Mobile App Development', onClick: ()=>{router.push('/services/mobile-app-development')} },
        { title: 'Full Stack Development', onClick: ()=>{router.push('/services/full-stack-development')} },
        { title: 'Digital Marketing', onClick: ()=>{router.push('/services/digital-marketing')} },
        { title: 'UX/UI Design', onClick: ()=>{router.push('/services/ui&ux-development')} }
      ]
    },
    { 
      name: 'TECHNOLOGY', 
      href: '#technology', 
      id: 'technology',
      hoverContent: [
        { title: 'React.js', onClick: ()=>{router.push('/technology/reactjs')} },
        { title: 'Next.js', onClick: ()=>{router.push('/technology/nextjs')} },
        { title: 'Node.js', onClick: ()=>{router.push('/technology/nodejs')} },
        { title: 'AWS', onClick: ()=>{router.push('/technology/aws')} },
        { title: 'Blockchain', onClick: ()=>{router.push('/technology/blockchain')} }
      ]
    },
    { 
      name: 'INDUSTRY', 
      href: '#industry', 
      id: 'industry',
      hoverContent: [
        { title: 'Healthcare', onClick: ()=>{router.push('/industry/health-care')} },
        { title: 'Finance', onClick: ()=>{router.push('/industry/finance')} },
        { title: 'Education', onClick: ()=>{router.push('/industry/education')}},
        { title: 'E-commerce',onClick: ()=>{router.push('/industry/ecommerce')} },
        { title: 'Manufacturing',onClick: ()=>{router.push('/industry/manufacturing')} }
      ] 
    },
    { 
      name: 'CASE STUDY', 
      href: '#caseStudy', 
      id: 'caseStudy',
      hoverContent: [
        { title: 'Enterprise Solutions', onClick: () => router.push('/caseStudy/enterprise') },
        { title: 'Startup Projects', onClick: () => router.push('/caseStudy/startup-projects') },
        { title: 'Mobile Applications',  onClick: () => router.push('/caseStudy/mobile-application') },
        { title: 'Web Platforms', onClick: () => router.push('/caseStudy/web-platforms') }
      ] 
    },
    { 
      name: 'CONTACT US', 
      href: '#contact', 
      id: 'contact',
      hoverContent: [
        { title: 'Get Quote',  onClick: () => router.push('/contact/quote') },
        { title: 'Support', onClick: () => router.push('/contact/support') },
        { title: 'Partnership',onClick: () => router.push('/contact/partnership') }
      ] 
    }
  ];
  
  return (
    <nav className={`
      fixed w-full z-50 transition-all duration-300
      ${scrolled ? 'shadow-lg' : ''}
      ${darkMode ? 'bg-[#000000] text-white' : 'bg-white text-black'}
    `}>
      <div className="max-w-7xl mx-auto">
        {/* Main navbar */}
        <div className="flex items-center justify-between py-4 px-4 md:px-6">
          {/* Logo */}
          <div className="flex items-center">
            <div className="font-bold text-xl tracking-tight relative cursor-pointer">
              <span className="text-2xl md:text-3xl font-bold tracking-tight">
                <span className={darkMode ? 'text-blue-400' : 'text-blue-800'} onClick = {()=>router.push('/')}>VISIONITY</span>
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
                        (darkMode ? 'text-blue-400 font-semibold' : 'text-blue-600 font-semibold') : 
                        (darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-800 hover:text-blue-600')}
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
                      ${darkMode ? 'bg-[#000000] text-white border-t-2 border-blue-500' : 'bg-white text-gray-800 border-t-2 border-blue-600'}
                    `}>
                      <div className="space-y-1">
                        {link.hoverContent.map((item, index) => (
                          <div 
                            key={index} 
                            onClick={item.onClick}
                            className={`
                              block px-3 py-2 text-sm rounded-md transition-all duration-200 cursor-pointer
                              ${darkMode ? 'hover:bg-blue-900 hover:text-blue-300' : 'hover:bg-blue-50 hover:text-blue-600'}
                            `}
                          >
                            {item.title}
                          </div>
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
              Join Us
            </a>
            
            <button 
              onClick={onToggleDarkMode}
              className={`ml-4 p-2 rounded-full transition-all duration-300 
              ${darkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              onClick={onToggleDarkMode}
              className="p-2 mr-2 rounded-full"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              className={`p-2 rounded-lg ${darkMode ? 'text-white hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-100'}`}
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
        <div className={`lg:hidden shadow-lg ${darkMode ? 'bg-[#000000]' : 'bg-white'}`}>
          <div className={`py-3 px-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
            {navLinks.map((link) => (
              <div key={link.id} className="py-2">
                <div
                  className="flex justify-between items-center py-2"
                  onClick={() => setActiveLink(activeLink === link.id ? '' : link.id)}
                >
                  <a
                    href={link.href}
                    className={`
                      font-medium text-base
                      ${activeLink === link.id ? 
                        (darkMode ? 'text-blue-400' : 'text-blue-600') : 
                        (darkMode ? 'text-gray-300' : 'text-gray-800')}
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
                  <div className={`ml-4 mt-2 space-y-1 border-l-2 ${darkMode ? 'border-blue-500 pl-4' : 'border-blue-500 pl-4'}`}>
                    {link.hoverContent.map((item, index) => (
                      <div 
                        key={index} 
                        onClick={item.onClick}
                        className={`
                          block py-2 text-sm cursor-pointer
                          ${darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'}
                        `}
                      >
                        {item.title}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className={`mt-6 pt-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <a 
                href="/get-started" 
                className="block w-full py-3 bg-blue-600 text-white text-center font-medium rounded-full hover:bg-blue-700 transition-colors"
              >
                Join Us
              </a>
              
              <div className="flex justify-center mt-4 space-x-6">
                <a href="tel:+1234567890" className={`flex items-center text-sm ${darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition-colors`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Contact</span>
                </a>
                <a href="mailto:info@visiority.com" className={`flex items-center text-sm ${darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition-colors`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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