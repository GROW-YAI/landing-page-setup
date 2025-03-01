import React from "react";
import { motion } from "framer-motion";
import bgimage from "../../../images/bgimage.jpg";

const Hero = () => {
  const sentence = "Revolutionizing hospitality with a seamless service solution, because       exceptional experiences start with quality service!";
  const letters = sentence.split("");

  return (
    <div
      className="relative p-16 flex justify-center items-center align-middle h-[90vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgimage})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center">
        <div className="text-4xl font-bold text-white mb-4">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              className="inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.05, delay: index * 0.05 }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </div>
        <button className="mt-6 px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Hero;