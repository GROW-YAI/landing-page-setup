import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import localImage from "../../../images/bgimage.jpg";

const Hero = () => {
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    localImage,
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1025&q=80"
  ];

  const sentence = "Revolutionizing hospitality with a seamless service solution, because exceptional experiences start with quality service!";

  useEffect(() => {
    AOS.init({ duration: 1000 });
    
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative p-16 flex justify-center items-center align-middle h-[90vh] bg-cover bg-center transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div 
        className="relative z-10 text-center"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="text-xl sm:text-3xl  md:text-4xl font-bold text-white mb-4 animate-fadeIn mt-20 md:mt-0">
          {sentence}
        </div>
        <button 
          onClick={() => navigate('/showcase')}
          className="mt-6 px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105 animate-fadeInUp"
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Hero;