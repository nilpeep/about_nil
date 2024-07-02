import React from "react";
import Navbar from "../components/Navbar/navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="p-5 md:p-24 min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
