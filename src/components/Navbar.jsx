import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../src/images/ihoslogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="px-6 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10 w-12 mr-4" />
          <div className="text-xl font-bold text-gray-800 lg:block">
            iHospitality Business Consult
          </div>
        </div>
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {isOpen ? (
            <span className="text-2xl text-gray-800">×</span>
          ) : (
            <span className="text-2xl text-gray-800">☰</span>
          )}
        </div>
        <ul className="hidden md:flex gap-6 text-gray-700">
          <NavLinks closeMenu={closeMenu} />
        </ul>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        } md:hidden bg-white overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <ul className="flex flex-col gap-2 px-6 pb-4">
          <NavLinks closeMenu={closeMenu} />
        </ul>
      </div>
    </nav>
  );
};

// Separate component for navigation links
const NavLinks = ({ closeMenu }) => (
  <>
    <li className="py-2">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-blue-600" : "hover:text-blue-600"
        }
        onClick={closeMenu}
        end
      >
        Home
      </NavLink>
    </li>
    <li className="py-2">
      <NavLink
        to="/about-product"
        className={({ isActive }) =>
          isActive ? "text-blue-600" : "hover:text-blue-600"
        }
        onClick={closeMenu}
      >
        About
      </NavLink>
    </li>
    <li className="py-2">
      <NavLink
        to="/about-innovator"
        className={({ isActive }) =>
          isActive ? "text-blue-600" : "hover:text-blue-600"
        }
        onClick={closeMenu}
      >
        Innovator
      </NavLink>
    </li>
    <li className="py-2">
      <NavLink
        to="/showcase"
        className={({ isActive }) =>
          isActive ? "text-blue-600" : "hover:text-blue-600"
        }
        onClick={closeMenu}
      >
        Showcase
      </NavLink>
    </li>
    <li className="py-2">
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive ? "text-blue-600" : "hover:text-blue-600"
        }
        onClick={closeMenu}
      >
        Contact
      </NavLink>
    </li>
  </>
);

export default Navbar;
