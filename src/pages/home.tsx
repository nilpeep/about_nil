import React from "react";
import Navbar from "../components/Navbar/navbar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="px-4 md:px-12">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
