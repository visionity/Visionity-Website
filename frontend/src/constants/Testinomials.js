import React from "react";
import { motion } from "framer-motion";
import "./Testinomials.css";

const testimonials = [
  {
    text: "I discovered that design thinking puts humans at the centre of problem solving. It helps you to understand the real underlying issues, so you can come up with solutions that solve problems in a more sustainable way.",
    author: "Parent",
    org: "INTO THE BRAVE NEW WORLD!",
    icon: "🌸",
  },
  {
    text: "People need to understand that creativity is something they should want in their lives. It’s a way of looking at the world. It makes them observant and curious. It’s a way of solving problems in their lives and in the world around them.",
    author: "Partner",
    org: "CREATIVITY CAN SAVE THE WORLD",
    icon: "❤️",
  },
  {
    text: "I learned it’s important to let students think with their hands and explore. It gives them agency. I was surprised to discover that it engaged students of various aptitudes, and even those who normally show little interest.",
    author: "MOE Educator",
    org: "YISHUN TOWN SECONDARY SCHOOL",
    icon: "📘",
  },
];

export default function Testinomials() {
  return (
    <div className="bg-yellow-400 min-h-screen flex items-center justify-center p-8">
      <div className="overflow-hidden w-full max-w-7xl relative group">
        <h2 className="text-2xl font-bold text-center mb-6">Hear what our happy participants have to say.</h2>
        <motion.div
          className="flex space-x-6 animate-scroll group-hover:[animation-play-state:paused]"
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="min-w-[300px] max-w-sm p-6 bg-white rounded-2xl shadow-md"
            >
              <p className="text-black mb-4">“{item.text}”</p>
              <div className="text-sm font-medium text-gray-700 flex items-center gap-2">
                <span>{item.icon}</span>
                <div>
                  <div>{item.author}</div>
                  <div className="text-xs text-gray-500">{item.org}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
