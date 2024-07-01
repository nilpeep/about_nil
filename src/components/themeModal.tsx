import React, { useEffect, useState } from "react";
import close from "/assets/close.svg";
import CloseIcon from "./CloseIcon";

interface ThemeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectTheme: (theme: string) => void;
}

const themes = [
  {
    name: "Classic",
    colors: ["bg-red-400", "bg-gray-100", "bg-gray-400", "bg-gray-600"],
  },
  {
    name: "Dark",
    colors: ["bg-gray-900", "bg-teal-500", "bg-gray-700", "bg-white"],
  },
  {
    name: "Koopa Beach",
    colors: ["bg-yellow-400", "bg-blue-100", "bg-blue-400", "bg-indigo-900"],
  },
  {
    name: "Choco Mountain",
    colors: ["bg-orange-300", "bg-pink-300", "bg-black", "bg-orange-200"],
  },
];

const ThemeModal: React.FC<ThemeModalProps> = ({
  isOpen,
  onClose,
  onSelectTheme,
}) => {
  const [showModal, setShowModal] = useState(false);

  const currentTheme = "dark";

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
      <div className={`bg-accent`}>
        <div>Select a theme</div>
        <div className=" ">
          <CloseIcon fill="secondary" />
        </div>
      </div>
    </>
  );
};

export default ThemeModal;
