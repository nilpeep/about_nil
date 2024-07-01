import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CloseIcon from "./CloseIcon";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { changeTheme } from "../redux/theme/themeSlice";
import { delay } from "@reduxjs/toolkit/dist/utils";
import tailwindConfig from "../../tailwind.config";
import themes from "./colors";

interface ThemeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTheme: (theme: string) => void;
}

const ThemeModal: React.FC<ThemeModalProps> = ({
  isOpen,
  onClose,
  onSelectTheme,
}) => {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
  const currentTheme = useSelector((state: RootState) => state.theme.value);
  const handleThemeChange = (theme: string) => {};

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
      document.body.style.overflow = "hidden";
    } else {
      setShowModal(false);
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  const menuVariants = {
    open: {
      y: 0,
      hidden: false,
    },
    closed: {
      opacity: 0,
      y: "-100%",
      delay: 0.5,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <div className="bg-accent">
        <div className="text-center font-bold py-2">SELECT A THEME</div>

        <div>
          <div className="flex p-4 items-center overflow-scroll gap-3 ">
            {themes.map((item, index) => (
              <div
                key={index}
                onClick={() => dispatch(changeTheme(item.theme))}
                style={{
                  backgroundColor: item.colors.bg,
                  color: item.colors.text,
                  border:
                    currentTheme === item.theme
                      ? `2px solid ${item.colors.highlight}`
                      : "",
                }}
                className="p-3 rounded-lg cursor-pointer flex justify-between items-center gap-3 transform transition-transform duration-200 hover:scale-110"
              >
                <div>
                  <div className="text-center">{item.theme}</div>

                  <div className="flex relative ">
                    {Object.values(item.colors).map((color, index) => (
                      <div
                        key={index}
                        className="w-6 h-6 border-2 border-white  rounded-full top-0 "
                        style={{
                          backgroundColor: color,
                          marginLeft: index === 0 ? "0px" : "-6px",
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
                {currentTheme === item.theme && (
                  <div className="absolute -bottom-3 left-[44%] text-highlight triangle-up"></div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div onClick={onClose} className="absolute right-1 top-1">
          <CloseIcon />
        </div>
      </div>
    </>
  );
};

export default ThemeModal;
