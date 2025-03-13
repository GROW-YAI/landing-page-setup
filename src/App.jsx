import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/home";
import AboutInnovator from "./pages/home/sections/AboutInnovator";
import AboutProduct from "./pages/home/sections/AboutProduct";
import Showcase from "./pages/home/sections/Showcase";
import Contact from "./pages/home/sections/Contact"; 

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about-innovator", element: <AboutInnovator /> },
        { path: "about-product", element: <AboutProduct /> },
        { path: "showcase", element: <Showcase /> },
        { path: "contact", element: <Contact /> } // Add this route
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
