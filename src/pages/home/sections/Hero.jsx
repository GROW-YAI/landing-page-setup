import React from "react";
import bgimage from "../../../images/bgimage.jpg";

const Hero = () => {
  return (
    <div
      className="p-6 flex justify-center items-center align-middle h-[60vh] border-b-2 bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgimage})`,
      }}
    >
      <h4 className="text-4xl font-bold text-white">Hero Section</h4>
    </div>
  );
};

export default Hero;