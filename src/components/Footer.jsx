import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0057A4] text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        <div>
          <h3 className="text-lg font-semibold">Phone Support</h3>
          <p className="text-[#7aa709] text-sm">24 HOURS A DAY</p>
          <p className="text-2xl mt-2">+233 59 366 5495</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <p className="text-[#7aa709] text-sm">SOCIAL MEDIA CHANNELS</p>
          <div className="flex justify-center md:justify-start gap-4 mt-3 text-xl">
            <a href="" className="text-[#7aa709] hover:text-white">
              <FaFacebook />
            </a>
            <a href="" className="text-[#7aa709] hover:text-white">
              <FaTwitter />
            </a>
            <a href="" className="text-[#7aa709] hover:text-white">
              <FaYoutube />
            </a>
            <a href="" className="text-[#7aa709] hover:text-white">
              <FaInstagram />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold">Our Newsletter</h3>
          <p className="text-[#7aa709] text-sm">SIGN UP FOR SPECIAL OFFERS</p>
          <div className="mt-3 flex">
            <input
              type="email"
              placeholder="E-mail"
              className="p-2 flex-1 bg-[#0057A4] border border-[#7aa709] text-white placeholder-gray-300"
            />
            <button className="bg-[#7aa709] text-[#0057A4] px-4 py-2 font-semibold">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
