import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "aos/dist/aos.css";
import { 
  FaHotel, 
  FaCalendarCheck, 
  FaChalkboardTeacher, 
  FaUserTie, 
  FaClipboardCheck, 
  FaBullhorn, 
  FaRedo 
} from "react-icons/fa";
import Aos from "aos";

const services = [
  { 
    title: "Hotel Reservations", 
    icon: <FaHotel />,
    description: "Streamline your booking process with our advanced reservation system. We help hotels maximize occupancy while providing a seamless booking experience for guests.",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  { 
    title: "Conferences & Events", 
    icon: <FaCalendarCheck />,
    description: "End-to-end event management solutions for successful conferences, meetings, and corporate events. From planning to execution, we ensure memorable experiences.",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
  },
  { 
    title: "Staff Training", 
    icon: <FaChalkboardTeacher />,
    description: "Comprehensive training programs designed to elevate service standards and develop professional hospitality skills for your team.",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  { 
    title: "Staff Recruitment", 
    icon: <FaUserTie />,
    description: "Expert talent acquisition services to help you build a strong hospitality team. We identify and recruit professionals who align with your brand values.",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
  },
  { 
    title: "Quality Assurance", 
    icon: <FaClipboardCheck />,
    description: "Comprehensive quality audits and assessments to maintain high service standards and ensure consistent guest satisfaction.",
    bgColor: "bg-red-50",
    iconColor: "text-red-600",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  { 
    title: "Marketing Consultancy", 
    icon: <FaBullhorn />,
    description: "Strategic marketing solutions to enhance your brand visibility and attract more guests through effective digital and traditional channels.",
    bgColor: "bg-teal-50",
    iconColor: "text-teal-600",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
  { 
    title: "Hotel Rebranding", 
    icon: <FaRedo />,
    description: "Complete rebranding and restructuring services to revitalize your hotel's image and operations for improved market positioning.",
    bgColor: "bg-indigo-50",
    iconColor: "text-indigo-600",
    image: "https://images.unsplash.com/photo-1606046604972-77cc76aee944?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
  },
];

const Showcase = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-16 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 
          className="text-4xl md:text-5xl font-bold text-center text-[#0057A4] mb-4"
          data-aos="fade-down"
        >
          Our Services
        </h2>
        <p 
          className="text-center text-gray-600 text-lg mb-12 max-w-3xl mx-auto"
          data-aos="fade-up"
        >
          Comprehensive hospitality solutions tailored to elevate your business
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-110"
                />
                <div className={`absolute top-0 left-0 w-full h-full bg-black opacity-20`}></div>
                <div className={`absolute top-4 right-4 ${service.iconColor} text-4xl bg-white p-2 rounded-full shadow-lg`}>
                  {service.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div 
          className="mt-16 text-center"
          data-aos="fade-up"
        >
          <button 
            onClick={() => navigate('/contact')}
            className="bg-[#0057A4] text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg transform hover:scale-105 duration-300"
          >
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Showcase;