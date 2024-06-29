import React, { useEffect, useState } from "react";

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
    <div
      className={` bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex items-start justify-center text-center ">
        <div
          className={`inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full ${
            showModal
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
          }`}
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:text-left">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-title"
                >
                  Select Theme
                </h3>
                <div className="mt-2">
                  <div className="grid grid-cols-2 gap-4">
                    {themes.map((theme) => (
                      <div
                        key={theme.name}
                        className="p-4 border rounded-lg cursor-pointer"
                        onClick={() => onSelectTheme(theme.name)}
                      >
                        <h3 className="mb-2">{theme.name}</h3>
                        <div className="flex space-x-1">
                          {theme.colors.map((color, index) => (
                            <div
                              key={index}
                              className={`${color} w-6 h-6 rounded-full`}
                            ></div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeModal;
