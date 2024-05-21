import logo from '../assets/bugBuster.png'

const links = ["about", "projects", "contact me"];

interface NavbarProps {
  scrolled:boolean,
  scrollTo:any
}

const Navbar = ({scrollTo, scrolled}:NavbarProps) => {

  return (
    <div className={`flex w-full h-15 fixed z-10 text-xl text-red justify-around align-center ${scrolled && 'bg-black'}`}>
      <img src={logo} className="w-32 h-16 object-cover" />
      <button >{scrolled ? 'true' : 'false'}</button>
      <div className="flex gap-5">
      {links.map((item, key) => {
        return(<button onClick={() => scrollTo(key)} key={key}>{item}</button>)
      })}

      </div>
    </div>
  );
};

export default Navbar;
