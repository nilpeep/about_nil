import CloseIcon from "./CloseIcon";
import { NavLink } from "react-router-dom";

const MobileMenu = (props: { links: object[]; onClose: any }) => {
  return (
    <div
      className={`bg-black text-white flex justify-center absolute top-0 left-0 right-0 bottom-0 w-full h-full `}
    >
      <div>
        <ul className="flex  flex-col  justify-center h-full gap-10">
          {props.links.map((link: any, index: number) => (
            <li key={index} className="text-5xl w-screen p-5 ">
              <NavLink
                to={link.path}
                onClick={props.onClose}
                className={({ isActive }) =>
                  isActive
                    ? " border-b-2 text-white border-highlight hover:text-white"
                    : " text-white hover:text-white relative before:absolute before:-bottom-1 before:left-0 before:w-full before:h-[2px] before:bg-accent before:scale-x-0 before:origin-left before:transition-transform before:duration-300 hover:before:scale-x-50"
                }
              >
                <span className="text-2xl text-secondary mx-auto mr-4 ">
                  0{index + 1}
                </span>
                {link.link}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div onClick={props.onClose} className="absolute right-6 top-6">
        <CloseIcon />
      </div>
    </div>
  );
};

export default MobileMenu;
