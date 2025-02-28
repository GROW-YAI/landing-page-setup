import React, { useEffect } from "react";
import "aos/dist/aos.css";
import serviceImage from "../../../images/productservices.jpg";
import { FaBullhorn, FaCalendarCheck, FaChalkboardTeacher, FaClipboardCheck, FaHotel, FaRedo, FaUserTie } from "react-icons/fa";
import Aos from "aos";

const services = [
  { title: "Hotel Reservations", icon: <FaHotel /> },
  { title: "Conferences & Events Organising", icon: <FaCalendarCheck /> },
  { title: "Hospitality Staff Training", icon: <FaChalkboardTeacher /> },
  { title: "Hospitality Staff Recruitment", icon: <FaUserTie /> },
  { title: "Hotel Quality Assurance Checks", icon: <FaClipboardCheck /> },
  { title: "Marketing Consultancy Services", icon: <FaBullhorn /> },
  { title: "Hotel Rebranding and Restructuring", icon: <FaRedo /> },
];

const Showcase = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gray-100 py-12 px-6 md:px-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">OUR SERVICES</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
            data-aos="fade-up"
          >
            <img src={serviceImage} alt="Service" className="w-full h-40 object-cover" />
            <div className="p-6 text-center">
              <div className="text-4xl text-blue-600 mb-3 flex justify-center">{service.icon}</div>
              <h3 className="text-lg font-semibold text-gray-700">{service.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Showcase;
