"use client";

import { useState, useEffect } from "react";
import Faq from "../../constants/FaqConstants";
import WhatsAppButton from "../../constants/whatsapp";
import Navbar from "@/layouts/navbar/Navbar";
// import ProjectSlider from "../../components/projectSlider";
import Footer from "@/layouts/footer/Footer";
import Featuressection from "../../components/home/featuressection";
import Testonomial from "../../components/home/testonomial";
import Slider from "../../constants/slider/Slider";
import FreelamceBanner from "../../components/home/join";
// import VideoPlayer from "../../components/home/video";
import HeroSection1 from "../../components/home/heroSection1";
import IndustrySlider from "../../components/home/industrySlider";
import Header from "@/components/header/Header";

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
   
    <main>
      <Navbar/>
      <div
        // className={`min-h-screen ${darkMode ? "dark bg-[#000000]" : "bg-gray-50"}`}
      >
        <main>
          <Header/>
          {/* <VideoPlayer/> */}
          {/* Features Section */}
          <Featuressection/>
          <Slider/>
          {/* Testimonials Section */}
          <Testonomial/>
          <HeroSection1/>
          <Faq />
          <IndustrySlider/>
          <WhatsAppButton />
          <div className="px-10">
          <FreelamceBanner/>
          </div>
        </main>
        <Footer/>
      </div>
    </main>
   
  );
}
