import React from "react";
import innovatorImage from "../../../images/inoimage.jpeg";

const AboutInnovator = () => {
  return (
    <div className="py-20 px-8 min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-100">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-center text-gray-800 mb-16 tracking-tight">
          Meet the Innovator
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12 bg-white rounded-3xl shadow-2xl p-12 border border-gray-100">
          <div className="md:w-1/3">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full blur-lg opacity-30"></div>
              <img
                src={innovatorImage}
                alt="Marcia Kafui Bortsie"
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-xl transform hover:scale-105 transition duration-500"
              />
            </div>
          </div>

          <div className="md:w-2/3 space-y-6">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Marcia Kafui Bortsie
            </h3>
            
            <p className="text-xl text-gray-700 leading-relaxed">
              An ambitious innovator from Anaji, Western Region, who is transforming 
              the hospitality industry by addressing the challenges of poor service 
              delivery. Her hospitality services solution is designed to elevate 
              customer experiences, ensuring high-quality and seamless service.
            </p>

            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-xl text-gray-600">
              "Redefining hospitality, one experience at a time."
            </blockquote>

            <div className="pt-6 flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold">
                Innovator
              </span>
              <span className="px-4 py-2 bg-teal-100 text-teal-800 rounded-full text-sm font-semibold">
                Hospitality Expert
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-semibold">
                Service Design
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInnovator;
