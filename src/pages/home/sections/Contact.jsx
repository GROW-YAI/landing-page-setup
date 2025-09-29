import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="relative flex mt-18 flex-col items-center bg-gradient-to-r from-[#7aa709] to-[#1B75BC] text-white py-8 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl w-full">
        {[
          {
            icon: <FaMapMarkerAlt className="text-2xl text-[#7aa709]" />,
            title: "OUR MAIN OFFICE",
            info: "PT 16A West Anaji, Takoradi, Ghana",
          },
          {
            icon: <FaPhone className="text-2xl text-[#7aa709]" />,
            title: "PHONE NUMBER",
            info: "+233 59 366 5495",
          },
          {
            icon: <FaEnvelope className="text-2xl text-[#7aa709]" />,
            title: "EMAIL",
            info: "ihospitalitybusiconsult@gmail.com",
          },
        ].map((card, index) => (
          <div
            key={index}
            className="bg-white text-[#1B75BC] p-4 text-center rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 cursor-pointer flex flex-col items-center"
            onClick={() => alert(`You clicked on ${card.title}`)}
          >
            <div className="flex justify-center items-center mb-1">
              {card.icon}
            </div>
            <h5 className="font-bold mt-1">{card.title}</h5>
            <p className="text-sm text-gray-600">{card.info}</p>
          </div>
        ))}
      </div>

      <div className="bg-[#1B75BC] text-white mt-6 p-6 rounded-lg shadow-lg max-w-2xl w-full">
        <h4 className="text-2xl font-bold mb-4 text-center">Contact Us</h4>
        <form className="space-y-3">
          <input
            className="w-full px-3 py-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#1B75BC] placeholder-white"
            type="text"
            placeholder="Enter your Name"
          />
          <input
            className="w-full px-3 py-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#1B75BC] placeholder-white"
            type="email"
            placeholder="Enter a valid email address"
          />
          <textarea
            className="w-full px-3 py-2 border border-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#1B75BC] placeholder-white"
            rows="3"
            placeholder="Your Message"
          ></textarea>
          <div className="flex justify-center">
            <button
              className="w-1/4 bg-[#7aa709] text-white py-2 rounded-md hover:bg-[#145a92] transition duration-300"
              type="submit"
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;