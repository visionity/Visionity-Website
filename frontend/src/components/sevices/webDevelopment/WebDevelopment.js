// pages/index.js
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import {
  Phone, Server, Code, Globe, CheckCircle,
  Award, Users, Activity, Zap, MessageSquare
} from 'lucide-react';

export default function WebDevelopment() {
  return (
    <div className="font-sans">
      <Head>
        <title>Mobile App Development Company | YourBrand</title>
        <meta name="description" content="Custom iOS, Android, and cross-platform mobile apps tailored to your business needs." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Mobile App Development Company</h1>
              <p className="text-xl mb-8">Transform your business with custom mobile applications designed for today&apos;s digital landscape.</p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-white text-blue-800 font-semibold py-3 px-6 rounded-md hover:bg-gray-100 transition">
                  Get a Free Quote
                </button>
                <button className="border-2 border-white text-white font-semibold py-3 px-6 rounded-md hover:bg-white hover:text-blue-800 transition">
                  Our Portfolio
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Image
                src="/images/mobile-app-development.png"
                alt="Mobile app development"
                width={400}
                height={450}
                className="h-96 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mobile App Development Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">We offer comprehensive mobile app development solutions tailored to your business needs.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: <Phone size={36} />, title: "iOS App Development", desc: "Native iOS applications with stunning UX/UI design and performance." },
              { icon: <Server size={36} />, title: "Android App Development", desc: "Custom Android applications optimized for various devices and OS versions." },
              { icon: <Code size={36} />, title: "Cross-Platform Development", desc: "Build once, deploy everywhere with React Native and Flutter." },
              { icon: <Globe size={36} />, title: "Web App Development", desc: "Progressive web apps with responsive design for all screen sizes." },
              { icon: <CheckCircle size={36} />, title: "QA & Testing", desc: "Comprehensive testing ensuring high-quality, bug-free applications." },
              { icon: <MessageSquare size={36} />, title: "Ongoing Support", desc: "Continuous maintenance and updates to keep your app running smoothly." }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300">
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Development Process</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">We follow a structured approach to deliver high-quality mobile applications.</p>
          </div>
          
          <div className="flex flex-col md:flex-row flex-wrap justify-center">
            {[
              { step: "01", title: "Discovery & Planning", desc: "Understanding your business goals and planning the app architecture." },
              { step: "02", title: "UI/UX Design", desc: "Creating intuitive user interfaces with engaging user experience." },
              { step: "03", title: "Development", desc: "Coding the application with clean, efficient, and maintainable code." },
              { step: "04", title: "Testing", desc: "Rigorous testing to ensure quality and performance across devices." },
              { step: "05", title: "Deployment", desc: "Publishing your app to app stores with proper optimization." },
              { step: "06", title: "Maintenance", desc: "Ongoing support and updates to keep your app running smoothly." }
            ].map((process, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4">
                <div className="bg-white rounded-lg shadow p-6 h-full">
                  <div className="flex items-start mb-4">
                    <span className="text-3xl font-bold text-blue-600 mr-4">{process.step}</span>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                      <p className="text-gray-600">{process.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">We deliver exceptional mobile app development services that drive results.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Award size={32} />, title: "Expert Team", desc: "Skilled developers with years of experience." },
              { icon: <Users size={32} />, title: "Client Focus", desc: "Your goals and satisfaction are our priority." },
              { icon: <Activity size={32} />, title: "Quality Assurance", desc: "Rigorous testing for flawless performance." },
              { icon: <Zap size={32} />, title: "Fast Delivery", desc: "On-time project completion without compromising quality." }
            ].map((feature, index) => (
              <div key={index} className="bg-blue-50 rounded-lg p-6 text-center hover:bg-blue-100 transition duration-300">
                <div className="text-blue-600 flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-800 text-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "850+", text: "Completed Projects" },
              { number: "200+", text: "Happy Clients" },
              { number: "15+", text: "Years Experience" },
              { number: "120+", text: "Team Members" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</h3>
                <p className="text-lg">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-2/3 mb-6 md:mb-0">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Build Your Mobile App?</h2>
                <p className="text-gray-600">Get in touch with us today to discuss your project and receive a free quote.</p>
              </div>
              <div className="md:w-1/3 text-center md:text-right">
                <button className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-md hover:bg-blue-700 transition">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technologies We Use</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">We leverage the latest technologies to build powerful mobile applications.</p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
            {[
              "React Native", "Flutter", "Swift", "Kotlin", "JavaScript",
              "TypeScript", "Node.js", "Firebase", "AWS", "Google Cloud"
            ].map((tech, index) => (
              <div key={index} className="bg-gray-100 rounded-lg p-6 text-center flex items-center justify-center h-24">
                <span className="font-semibold">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
