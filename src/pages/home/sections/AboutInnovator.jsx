import React from "react";
import innovatorImage from "../../../images/inoimage.jpg";

const AboutInnovator = () => {
  return (
    <div className="p-12 flex flex-col justify-center items-center align-middle min-h-[60vh] border-b-2 bg-gray-100">
      <h4 className="text-4xl font-bold mb-8 text-center text-gray-800">
        About the Innovator
      </h4>
      <div className="flex flex-col items-center text-center max-w-4xl">
        <img src={innovatorImage} alt="Marcia Kafui Bortsie" className="h-40 w-40 rounded-full mb-6 shadow-lg" />
        <p className="text-lg mb-6 text-gray-700 leading-relaxed">
          Marcia Kafui Bortsie, an 18-35 year old female innovator from Anaji, Western Region, is addressing the issue of poor hospitality service delivery by offering a hospitality services solution. This innovation aims to improve the quality of service in the hospitality sector, enhancing the customer experience.
        </p>
      </div>
    </div>
  );
};

export default AboutInnovator;
