import React, { useState, useRef } from "react";
import logo from "/assets/NILUFER.png";
import { RootState } from "../redux/store";
const links = ["About", "Portfolio", "Contact"];
import burger from "/assets/burgermenu.svg";
import brush from "/assets/brush.svg";
import { useDimensions } from "./use-dimensions";
import ThemeModal from "./themeModal";
import MobileMenu from "./MobileMenu";
import { MenuToggle } from "./MenuToggle";
import { useCycle, motion } from "framer-motion";
import { Navigation } from "./Navigation";

const Navbar = ({ parallax }: any) => {
  const currentTheme = "light";

  // const currentTheme = useSelector((state: RootState) => state.theme.value);

  const [isOpen, toggleOpen] = useCycle(false, true);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);

  const openModal = () => setIsModalOpen(!isModalOpen);
  const closeModal = () => setIsModalOpen(false);

  const handleSelectTheme = (theme: string) => {
    setSelectedTheme(theme);
    closeModal();
  };

  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(30px at 40px 40px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <>
      <div
        className={`transition-all duration-500 ease-out transform overflow-hidden ${
          isModalOpen ? "max-h-40" : "max-h-0"
        }`}
      >
        <ThemeModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onSelectTheme={handleSelectTheme}
        />
      </div>

      <nav className={`w-full h-[80px] flex align-center`}>
        <div className="w-full flex justify-between items-center px-5">
          <div className="flex items-center gap-2">
            <img className="w-12 h-12" src={logo} alt="logo" />

            <span>Nilufer Kaplan</span>
          </div>
          <div className="flex gap-3">
            <div
              onClick={() => setIsModalOpen(!isModalOpen)}
              className={`rounded-full bg-accent p-2`}
            >
              <svg
                fill="currentColor"
                width="242px"
                height="242px"
                viewBox="0 0 24.00 24.00"
                className="w-8 h-8 fill-current cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                transform="rotate(0)"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke="#CCCCCC"
                  stroke-width="0.288"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path d="M10,20V16H5a1,1,0,0,1-1-1V12H20v3a1,1,0,0,1-1,1H14v3.893a2.075,2.075,0,0,1-1.664,2.08A2,2,0,0,1,10,20ZM20,3a1,1,0,0,0-1-1H12L10,6,8,2H5A1,1,0,0,0,4,3v7H20Z"></path>
                </g>
              </svg>
            </div>
            <div className={`rounded-full bg-accent p-2`}>
              {/* <MobileMenu /> */}
              <motion.nav
                initial={false}
                animate={isOpen ? "open" : "closed"}
                custom={height}
                ref={containerRef}
              >
                <motion.div className="background" variants={sidebar} />
                <Navigation />
                <MenuToggle toggle={() => toggleOpen()} />
              </motion.nav>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
