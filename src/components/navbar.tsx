import React from "react";

const links = ["about", "projects", "contact me"];

const Navbar = () => {
  return (
    <div className="flex bg-[#6B66DF] w-100 h-20 fixed">
      {links.map((item, key) => {
        return(<div key={key}>{item}</div>)
      })}
    </div>
  );
};

export default Navbar;
