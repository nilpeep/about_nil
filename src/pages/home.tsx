import React from "react";
import Navbar from "../components/Navbar/navbar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="px-5 md:px-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
