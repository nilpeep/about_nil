import React from "react";

const Navbar = () => {
  return (
    <div className="h-[50px] flex bg-black items-center justify-around text-xl">
      <section>Logo</section>
      <div className="flex">
        <ul className="flex gap-3">
          <li>About</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
