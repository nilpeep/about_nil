const links = ["About", "Portfolio", "Contact"];

const Navbar = ({ parallax }: any) => {
  return (
    <div className="h-[50px] flex bg-black items-center justify-around text-xl text-white">
      <section>Logo</section>
      <div className="flex">
        <ul className="flex gap-10">
          {links.map((link, i) => (
            <li
              key={link}
              className="cursor-pointer"
              onClick={() =>
                parallax.current.scrollTo(i === 0 ? 0 : i === 1 ? 1 : 2)
              }
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
