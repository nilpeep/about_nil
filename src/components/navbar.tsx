import React, { useState } from "react";
import logo from "/assets/NILUFER.png";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
const links = ["About", "Portfolio", "Contact"];
import burger from "/assets/burgermenu.svg";

const Navbar = ({ parallax }: any) => {
  let currentTheme = "light";

  const theme = useSelector((state: RootState) => state.theme.value);
  const dispatch = useDispatch();
  const handleThemeChange = (theme: string) => {};

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav
        className={`w-full h-[80px] bg-${currentTheme}-background text-${currentTheme}-text`}
      >
        <div>
          <div className="w-12 h-12">
            <a href="">
              <img src={logo} alt="" />
            </a>
            <span className="text-light-text">Nilufer Kaplan</span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
