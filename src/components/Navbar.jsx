import React from "react";
import { FaEnvelope, FaHome, FaInfoCircle, FaProductHunt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../src/images/ihoslogo.jpg";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 w-18 rounded-full mr-2" />
        <div className="text-xl font-bold text-gray-800">iHospitality Business Consult</div>
      </div>
      <ul className="flex gap-6 text-gray-700">
        <li className="flex items-center gap-2">
          <Link to="/" className="hover:text-blue-600 flex items-center">
            <FaHome /> Home
          </Link>
        </li>
        <li className="flex items-center gap-2">
          <Link to="/about-product" className="hover:text-blue-600 flex items-center">
            <FaProductHunt /> About Product
          </Link>
        </li>
        <li className="flex items-center gap-2">
          <Link to="/about-innovator" className="hover:text-blue-600 flex items-center">
            <FaUser /> About Innovator
          </Link>
        </li>
        <li className="flex items-center gap-2">
          <Link to="/showcase" className="hover:text-blue-600 flex items-center">
            <FaInfoCircle /> Showcase
          </Link>
        </li>
        <li className="flex items-center gap-2">
          <Link to="/contact" className="hover:text-blue-600 flex items-center">
            <FaEnvelope /> Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
