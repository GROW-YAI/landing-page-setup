import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../src/images/ihoslogo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md py-4 px-6 flex justify-between items-center z-50">
      <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-10 w-12 rounded-full mr-2" />
        <div className="text-xl font-bold text-gray-800">iHospitality Business Consult</div>
      </div>
      <div className="md:hidden" onClick={toggleMenu}>
        {isOpen ? <span className="text-2xl text-gray-800">×</span> : <span className="text-2xl text-gray-800">☰</span>}
      </div>
      <ul className={`md:flex gap-6 text-gray-700 ${isOpen ? "block" : "hidden"} md:block`}>
        <li className="flex items-center gap-2">
          <NavLink to="/" exact className="hover:text-blue-600 flex items-center" activeClassName="text-blue-600" onClick={closeMenu}>
            Home
          </NavLink>
        </li>
        <li className="flex items-center gap-2">
          <NavLink to="/about-product" className="hover:text-blue-600 flex items-center" activeClassName="text-blue-600" onClick={closeMenu}>
            About Product
          </NavLink>
        </li>
        <li className="flex items-center gap-2">
          <NavLink to="/about-innovator" className="hover:text-blue-600 flex items-center" activeClassName="text-blue-600" onClick={closeMenu}>
            About Innovator
          </NavLink>
        </li>
        <li className="flex items-center gap-2">
          <NavLink to="/showcase" className="hover:text-blue-600 flex items-center" activeClassName="text-blue-600" onClick={closeMenu}>
            Showcase
          </NavLink>
        </li>
        <li className="flex items-center gap-2">
          <NavLink to="/contact" className="hover:text-blue-600 flex items-center" activeClassName="text-blue-600" onClick={closeMenu}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
