// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter, FaYoutube, FaPinterest, FaWhatsapp } from 'react-icons/fa';

export default function Header() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Head>
        <title>Top Web & Mobile App Development Company</title>
        <meta name="description" content="Hire top web & mobile app developers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="relative bg-white py-48 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 lg:pr-12">
                <h1 className="text-4xl sm:text-5xl font-bold text-blue-800 mb-6">
                  Top Web & Mobile App Development Company
                </h1>
                <p className="text-lg text-gray-700 mb-8">
                  Hire Top web & Mobile app Developers for Your Web & Mobile Needs, our dedicated team of full-stack developers specializes in Web & Mobile App Development (Android & iOS). We deliver top-notch solutions using cutting-edge technologies like HTML5, Node.js, ReactJS, Next.js, MongoDB, and MySQL.
                </p>
                <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-full inline-flex items-center">
                  Consult Visionity
                </button>
              </div>
              <div className="lg:w-1/2 mt-12 lg:mt-0">
                <div className="relative">
                  <div className="w-64 h-64 sm:w-96 sm:h-96 bg-blue-900 rounded-full mx-auto relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-dot-pattern"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-50">
            <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
              <FaFacebookF size={24} />
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">
              <FaLinkedinIn size={24} />
            </a>
            <a href="#" className="text-pink-500 hover:text-pink-600 transition-colors">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-black hover:text-gray-700 transition-colors">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-red-600 hover:text-red-700 transition-colors">
              <FaYoutube size={24} />
            </a>
            <a href="#" className="text-red-500 hover:text-red-600 transition-colors">
              <FaPinterest size={24} />
            </a>
          </div>
        </section>

        {/* Tagline Section */}
        <section className="bg-gray-50 py-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-blue-800">
              Innovative Partnerships, Infinite Possibilities
            </h2>
          </div>
        </section>

       
      </main>
    </div>
  );
}