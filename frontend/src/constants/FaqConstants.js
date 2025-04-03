import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const text = "At VISIONITY, we don&apos;t just develop software; we build partnerships.";

  const faqItems = [
    {
      question: "What services does VISIONITY offer?",
      answer: "VISIONITY offers comprehensive software development services including web and mobile application development, custom software solutions, and dedicated developer teams."
    },
    {
      question: "How does VISIONITY ensure client satisfaction?",
      answer: "We work hand-in-hand with clients throughout the entire development process, from ideation to deployment, ensuring the final product not only meets but exceeds expectations."
    },
    {
      question: "What sets VISIONITY apart from other software development companies?",
      answer: "Our commitment to building partnerships rather than just delivering projects sets us apart. We focus on understanding your business needs to deliver tailored solutions that drive real results."
    },
    {
      question: "Does VISIONITY offer support after the project is completed?",
      answer: "Yes, we provide ongoing support and maintenance services to ensure your software continues to perform optimally after deployment."
    },
    {
      question: "How does VISIONITY handle project timelines?",
      answer: "We follow agile methodologies to ensure timely delivery while maintaining flexibility to accommodate changes. Each project has a clearly defined timeline with regular milestones."
    },
    {
      question: "Can I hire dedicated developers from VISIONITY?",
      answer: "Yes, we offer dedicated developer services where you can hire our skilled professionals to work exclusively on your project."
    },
    {
      question: "What industries does VISIONITY specialize in?",
      answer: "We have experience across various industries including healthcare, finance, e-commerce, education, and more, delivering tailored solutions for each sector."
    }
  ];

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqItems.map((item, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <h3>{item.question}</h3>
              <span className="faq-toggle">{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="testimonials-section">
        <h2>TESTIMONIALS</h2>
        <h3>What Our Clients Say</h3>
        <div className="company-description">
          <p>
            At VISIONITY, we don&apos;t just develop software; we build partnerships. Our dynamic team works hand-in-hand with clients to deliver top web and mobile applications and tailored solutions that drive real business results. From ideation to deployment, we go above and beyond to ensure each project not only meets but exceeds expectations. VISIONITY is committed to transforming your vision into success through the power of technology.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
