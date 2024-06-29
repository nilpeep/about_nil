import logo from "/assets/logo.png";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleDarkMode } from "../store/darkModeSlice";
import { RootState } from "../store/store";
import moon from "/assets/moon.png";
import flower from "/assets/flower.png";

const links = ["About", "Portfolio", "Contact"];

const Navbar = ({ parallax }: any) => {
  const darkMode = useSelector((state: RootState) => state.darkMode.value);
  const dispatch = useDispatch();
  return (
    <div className="h-[50px] flex bg-black items-center justify-around text-xl text-white">
      <div
        onClick={() => parallax.current.scrollTo(0)}
        className="h-[50px] w-[50px] cursor-pointer"
      >
        <img className="w-full h-full object-fit-cover" src={logo} alt="" />
      </div>
      <div className="flex">
        <ul className="flex gap-10">
          {links.map((link, i) => (
            <li
              className="cursor-pointer"
              key={link}
              onClick={() => parallax.current.scrollTo(i + 1)}
            >
              {link}
            </li>
          ))}

          <div className="flex gap-2">
            <label className="relative inline-block w-10 h-6">
              <input
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
              </span>
            </label>
            <img src={darkMode ? moon : flower} className="w-6 h-6" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
