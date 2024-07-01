import React, { useEffect, useState } from "react";
import close from "/assets/close.svg";
import CloseIcon from "./CloseIcon";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "../redux/theme/themeSlice";

interface ThemeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTheme: (theme: string) => void;
}

const themes = [
  {
    theme: "dark",
    colors: {
      bg: "#000000",
      text: "#ffffff",
      primary: "#333333",
      secondary: "#444444",
      accent: "#555555",
      highlight: "#666666",
    },
  },
  {
    theme: "light",
    colors: {
      bg: "#FFFFFF",
      text: "#383A3C",
      primary: "#FFFFFF",
      secondary: "#383A3C",
      accent: "#EEEEEE",
      highlight: "#FFFFFF",
    },
  },
  {
    theme: "space",
    colors: {
      bg: "#13032A",
      text: "#FEFF00",
      primary: "#13032A",
      secondary: "#311B46",
      accent: "#4E4E8F",
      highlight: "#48F5F7",
    },
  },
];

const ThemeModal: React.FC<ThemeModalProps> = ({
  isOpen,
  onClose,
  onSelectTheme,
}) => {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
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

  return (
    <>
      <div
        className={`text-center bg-accent  p-4 ${isOpen ? "block" : "hidden"}`}
      >
        <div>Select a theme</div>
        <div>
          <div className="flex p-4 items-center justify-center gap-3 ">
            {themes.map((item) => (
              <div
                onClick={() => dispatch(changeTheme(item.theme))}
                style={{
                  backgroundColor: item.colors.bg,
                  color: item.colors.text,
                }}
                className="p-3 rounded-lg cursor-pointer flex justify-between items-center gap-3 transform transition-transform duration-200 hover:scale-110"
              >
                <div>
                  <div className="text-center">{item.theme}</div>

                  <div className="flex relative ">
                    {Object.values(item.colors).map((color, index) => (
                      <div
                        className="w-6 h-6 border-2 border-white  rounded-full top-0 "
                        style={{
                          backgroundColor: color,
                          marginLeft: index === 0 ? "0px" : "-6px",
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
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
