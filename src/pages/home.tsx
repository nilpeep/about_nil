import React from "react";
import Navbar from "../components/Navbar/navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="px-5 md:px-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
