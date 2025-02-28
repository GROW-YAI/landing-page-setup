import React from "react";
import { FaCheckCircle, FaStar, FaRocket, FaHandsHelping } from "react-icons/fa";

const AboutProduct = () => {
  return (
    <div className="p-6 flex flex-col justify-center items-center align-middle min-h-[60vh] border-b-2 bg-gray-100">
      <h4 className="text-4xl font-bold mb-6 text-center text-gray-800 flex items-center">
        <FaStar className="text-yellow-500 mr-2" /> About the Products and Services
      </h4>
      <div className="max-w-4xl text-center">
        <p className="text-lg mb-4 text-gray-700 flex items-center">
          <FaCheckCircle className="text-green-500 mr-2" />
          We are addressing the issue of poor hospitality service delivery by offering a hospitality services solution. This innovation aims to improve the quality of service in the hospitality sector, enhancing the customer experience.
        </p>
        <p className="text-lg mb-4 text-gray-700 flex items-center">
          <FaRocket className="text-blue-500 mr-2" />
          Our products and services are designed to streamline operations, increase efficiency, and provide a seamless experience for both staff and customers. We leverage the latest technology to offer solutions that are not only effective but also easy to use.
        </p>
        <p className="text-lg mb-4 text-gray-700 flex items-center">
          <FaHandsHelping className="text-purple-500 mr-2" />
          By focusing on the specific needs of the hospitality industry, we ensure that our solutions are tailored to address the unique challenges faced by businesses in this sector. Our goal is to help hospitality businesses thrive by providing tools that enable them to deliver exceptional service.
        </p>
        <p className="text-lg text-gray-700 flex items-center">
          <FaStar className="text-yellow-500 mr-2" />
          Join us in revolutionizing the hospitality industry and setting new standards for service excellence. Together, we can create memorable experiences for customers and drive success for businesses.
        </p>
      </div>
    </div>
  );
};

export default AboutProduct;
