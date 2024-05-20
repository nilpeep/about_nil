import React, { useState,useEffect } from "react";
import logo from '../assets/bugBuster.png'

const links = ["about", "projects", "contact me"];

const Navbar = (props:{scroll:any}) => {
  const [scrolled, setScrolled] = useState(false)
  console.log(scrolled)

  useEffect(() => {
    const handleScroll = () => {
      // Update the state based on the scroll position
      if (window.scrollY > 30) {
        setScrolled(true);
        console.log(scrolled)
      } else {
        setScrolled(false);
        console.log(scrolled)
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup function
    return () => {
      // Remove scroll event listener
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); 

  return (
    <div className={`flex w-full h-15 fixed z-10 text-xl text-red justify-around align-center ${scrolled && 'bg-black'}`}>
      <img src={logo} className="w-32 h-16 object-cover" />
      <button >{scrolled ? 'true' : 'false'}</button>
      <div className="flex gap-5">
      {links.map((item, key) => {
        return(<button onClick={()=>props.scroll(key)} key={key}>{item}</button>)
      })}

      </div>
    </div>
  );
};

export default Navbar;
