 "use client"
 import WebDevelopment from '@/components/sevices/webDevelopment/WebDevelopment'
import Footer from '@/layouts/footer/Footer'
import Navbar from '@/layouts/navbar/Navbar'
import React, { useEffect, useState } from 'react'
 
 const Page = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
    // Initialize theme based on user preference
    useEffect(() => {
      // Check for saved preference in localStorage first
      const savedTheme = localStorage.getItem('darkMode');
      if (savedTheme) {
        setDarkMode(savedTheme === 'true');
      } else if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        setDarkMode(true);
      }
    }, [nextSlide]);
  
    // Toggle theme function
    const toggleDarkMode = () => {
      const newDarkMode = !darkMode;
      setDarkMode(newDarkMode);
      // Save preference to localStorage
      localStorage.setItem('darkMode', newDarkMode.toString());
    };
  
    // Toggle mobile menu
    const toggleMobileMenu = () => {
      setMobileMenuOpen(!mobileMenuOpen);
    };
  
    // Theme context value
    const themeContextValue = {
      darkMode,
      toggleDarkMode
    };
  
   return (
     <div>
       <Navbar darkMode={darkMode} onToggleDarkMode={toggleDarkMode}/>
      <WebDevelopment darkMode={darkMode}/>
       <Footer darkMode={darkMode}/>
     </div>
   )
 }
 
 export default Page
 