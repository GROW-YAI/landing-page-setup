import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import BoafoWidgetInitializer from "../components/BoafoWidgetInitializer";

const RootLayout = () => {
  return (
    <div>
      <BoafoWidgetInitializer />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
