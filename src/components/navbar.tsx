const links = ["About", "Portfolio", "Contact"];
import logo from "/assets/logo.png";

const Navbar = ({ parallax }: any) => {
  return (
    <div className="h-[50px] flex bg-black items-center justify-around text-xl text-white">
      <div
        onClick={() => parallax.current.scrollTo(0)}
        className="h-full cursor-pointer"
      >
        <img className="w-full h-full" src={logo} alt="" />
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
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
