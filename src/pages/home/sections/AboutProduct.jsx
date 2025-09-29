import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom'; // Add this import
import AOS from "aos";
import "aos/dist/aos.css";
import { 
  FaBuilding,
  FaBullseye,
  FaStar,
  FaCheckCircle,
  FaCogs,
  FaUsers,
  FaLaptop,
  FaArrowRight
} from 'react-icons/fa';

const AboutProduct = () => {
  const navigate = useNavigate(); // Add this hook
  
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="p-12 mt-12 flex flex-col justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-16" data-aos="fade-down">
          <FaBuilding className="w-10 h-10 text-blue-600" />
          <h2 className="text-5xl font-extrabold text-center text-blue-600 tracking-wide">
            Elevating Hospitality Excellence
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div 
            className="bg-white p-8 rounded-lg shadow-xl border-l-4 border-blue-500"
            data-aos="fade-right"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaBullseye className="w-8 h-8 text-blue-700" />
              <h3 className="text-2xl font-bold text-blue-700">Our Mission</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              To revolutionize the hospitality industry through innovative solutions and strategic consulting, enabling businesses to deliver exceptional customer experiences while maximizing operational efficiency and profitability.
            </p>
          </div>

          <div 
            className="bg-white p-8 rounded-lg shadow-xl border-l-4 border-green-400"
            data-aos="fade-left"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaStar className="w-8 h-8 text-green-600" />
              <h3 className="text-2xl font-bold text-green-600">Our Vision</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              To be the global leader in hospitality consulting, recognized for transforming businesses through cutting-edge solutions and setting new standards of excellence in service delivery.
            </p>
          </div>
        </div>

        <div className="space-y-8">
          <div 
            className="bg-white p-8 rounded-lg shadow-xl"
            data-aos="fade-up"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <FaCheckCircle className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-center text-blue-600">Our Solutions & Services</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-blue-50 rounded-lg" data-aos="zoom-in">
                <div className="flex items-center gap-3 mb-3">
                  <FaCogs className="w-6 h-6 text-blue-700" />
                  <h4 className="text-xl font-semibold text-blue-700">Strategic Consulting</h4>
                </div>
                <p className="text-gray-700">Comprehensive analysis and tailored strategies to optimize your hospitality operations</p>
              </div>

              <div className="p-6 bg-green-50 rounded-lg" data-aos="zoom-in">
                <div className="flex items-center gap-3 mb-3">
                  <FaCheckCircle className="w-6 h-6 text-green-600" />
                  <h4 className="text-xl font-semibold text-green-600">Operational Excellence</h4>
                </div>
                <p className="text-gray-700">Streamlined processes and innovative solutions to enhance efficiency and service delivery</p>
              </div>

              <div className="p-6 bg-blue-50 rounded-lg" data-aos="zoom-in">
                <div className="flex items-center gap-3 mb-3">
                  <FaLaptop className="w-6 h-6 text-blue-700" />
                  <h4 className="text-xl font-semibold text-blue-700">Digital Transformation</h4>
                </div>
                <p className="text-gray-700">Cutting-edge technology integration to modernize your hospitality business</p>
              </div>

              <div className="p-6 bg-green-50 rounded-lg" data-aos="zoom-in">
                <div className="flex items-center gap-3 mb-3">
                  <FaUsers className="w-6 h-6 text-green-600" />
                  <h4 className="text-xl font-semibold text-green-600">Customer Experience</h4>
                </div>
                <p className="text-gray-700">Creating memorable experiences through service excellence and innovation</p>
              </div>
            </div>
          </div>

          <div 
            className="text-center p-8 bg-gradient-to-r from-blue-500 to-green-400 rounded-lg shadow-xl text-white"
            data-aos="fade-up"
          >
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-lg mb-6">Join us in revolutionizing the hospitality industry with innovative solutions and expert guidance.</p>
            <button 
              onClick={() => navigate('/showcase')}
              className="flex items-center gap-2 mx-auto bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
            >
              Get Started
              <FaArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutProduct;