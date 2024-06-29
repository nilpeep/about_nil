import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../redux/store/store";
import logo from "/assets/logo.png";
import moon from "/assets/moon.png";
import flower from "/assets/flower.png";

const links = ["About", "Portfolio", "Contact"];

const Navbar = ({ parallax }: any) => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const dispatch = useDispatch();
  // const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div
        className={`backdrop-blur-2xl h-[50px] flex items-center font-medium justify-between text-xl text-white px-4`}
      >
        <div className="flex items-center justify-between w-full">
          <div
            onClick={() => parallax.current.scrollTo(0)}
            className="h-[50px] w-[50px] cursor-pointer"
          >
            <img
              className="w-full h-full object-fit-contain"
              src={logo}
              alt=""
            />
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    !isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"
                  }
                />
              </svg>
            </button>
          </div>
          <div className={`hidden md:flex md:flex-row md:items-center`}>
            <ul className="flex gap-10 items-center">
              {links.map((link, i) => (
                <li
                  className="cursor-pointer"
                  key={link}
                  onClick={() => parallax.current.scrollTo(i + 1)}
                >
                  {link}
                </li>
              ))}
              <div className="flex gap-2 items-center">
                {/* <label className="relative inline-block w-10 h-6"> */}
                <input
                  type="checkbox"
                  className="opacity-0 w-0 h-0"
                  // checked={theme}
                  // onChange={() => dispatch(toggleDarkMode())}
                />
                {/* <span
                    className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 rounded-full transition duration-400 ${
                      darkMode ? "bg-gray-500" : "bg-blue-400"
                    }`}
                  >
                    <span
                      className={`absolute left-1 bottom-1 h-4 w-4 bg-white rounded-full transition transform duration-400 ${
                        darkMode ? "translate-x-4 bg-[#fff]" : ""
                      }`}
                    ></span>
                  </span>
                </label>
                <img src={darkMode ? moon : flower} className="w-6 h-6" /> */}
              </div>
            </ul>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 focus:outline-none"
          >
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <ul className="flex flex-col gap-10 text-white text-2xl">
            {links.map((link, i) => (
              <li
                className="cursor-pointer"
                key={link}
                onClick={() => {
                  parallax.current.scrollTo(i + 1);
                  setIsOpen(false);
                }}
              >
                {link}
              </li>
            ))}
            <div className="flex gap-2 items-center">
              <label className="relative inline-block w-10 h-6">
                {/* <input
                  type="checkbox"
                  className="opacity-0 w-0 h-0"
                  checked={darkMode}
                  onChange={() => dispatch(toggleDarkMode())}
                />
                <span
                  className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 rounded-full transition duration-400 ${
                    darkMode ? "bg-gray-500" : "bg-blue-400"
                  }`}
                >
                  <span
                    className={`absolute left-1 bottom-1 h-4 w-4 bg-white rounded-full transition transform duration-400 ${
                      darkMode ? "translate-x-4 bg-[#fff]" : ""
                    }`}
                  ></span>
                </span> */}
              </label>
              {/* <img src={darkMode ? moon : flower} className="w-6 h-6" /> */}
            </div>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
