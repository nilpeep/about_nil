import React from "react";
import CloseIcon from "./CloseIcon";

const links = ["Home", "Projects", "About", "Contact"];

const MobileMenu = ({ isOpen, onClose }: any) => {
  return (
    <div
      className={`bg-black text-white flex justify-center absolute top-0 left-0 right-0 bottom-0 w-full h-full `}
    >
      <div>
        <ul className="flex  flex-col  justify-center h-full gap-10">
          {links.map((link, index) => (
            <li key={index} className="text-5xl">
              <span className="text-2xl text-secondary mx-auto ml-5 ">
                0{index + 1}
              </span>{" "}
              {link}
            </li>
          ))}
        </ul>
      </div>
      <div onClick={onClose} className="absolute right-6 top-6">
        <CloseIcon />
      </div>
    </div>
  );
};

export default MobileMenu;
