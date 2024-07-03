import Navbar from "../components/navbar/navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-space-img">
      <Navbar />
      <div
        style={{
          minHeight: "calc(100vh - 89px - 128px)",
        }}
        className="p-5 md:p-24 "
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
