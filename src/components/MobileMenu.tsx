import React, { useState } from "react";
import { motion } from "framer-motion";

const menuVariants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 20,
      damping: 10,
    },
  },
  closed: {
    x: "-100%",
    opacity: 0,
    transition: {
      type: "spring",
      stiffness: 20,
      damping: 10,
    },
  },
};

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="z-50" onClick={() => setIsOpen(!isOpen)}>
        <svg
          width="800px"
          height="800px"
          viewBox="0 0 12 12"
          enable-background="new 0 0 12 12"
          className=" w-8 h-8  cursor-pointer"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <rect fill="currentColor" height="1" width="11" x="0.5" y="5.5" />

            <rect fill="currentColor" height="1" width="11" x="0.5" y="2.5" />

            <rect fill="currentColor" height="1" width="11" x="0.5" y="8.5" />
          </g>
        </svg>
      </div>
      <motion.div
        className="z-40 fixed top-0 left-0 w-full h-full bg-gray-800 text-white p-8"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={menuVariants}
      >
        <button
          className="mb-4 p-4 bg-red-500"
          onClick={() => setIsOpen(false)}
        >
          Close
        </button>
        <ul>
          <li className="mb-4">
            <a href="#home">Home</a>
          </li>
          <li className="mb-4">
            <a href="#about">About</a>
          </li>
          <li className="mb-4">
            <a href="#services">Services</a>
          </li>
          <li className="mb-4">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default MobileMenu;
