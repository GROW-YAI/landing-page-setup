import React from "react";
import { FaEnvelope, FaHome, FaInfoCircle, FaProductHunt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Hospitality Innovation</div>
      <ul className="nav-links">
        <li>
          <Link to="/"><FaHome /> Home</Link>
        </li>
        <li>
          <Link to="/about-product"><FaProductHunt /> About Product</Link>
        </li>
        <li>
          <Link to="/about-innovator"><FaUser /> About Innovator</Link>
        </li>
        <li>
          <Link to="/showcase"><FaInfoCircle /> Showcase</Link>
        </li>
        <li>
          <Link to="/contact"><FaEnvelope /> Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;