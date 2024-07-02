const About = ({ parallax }: any) => {
  return (
    <div className="flex flex-col mt-[70px] bg-bg ">
      <div className="font-bigshoulders">
        <h1 className="animate-slidein font-bold text-2xl text-text ">
          HELLO, IT'S NILUFER
        </h1>
        <h2 className="animate-slidein font-bold text-5xl text-highlight md:text-8xl ">
          I MAKE WEBSITES
        </h2>
      </div>
      <div className="text-white text-sm rounded-lg mt-5">
        <p className="text-2xl text-white  mt-5 md:text-4xl">
          Passionate and skilled Full-stack Developer. Also a Blog Writer and a
          Content Creator.
        </p>
        <div
          onClick={() => parallax.current.scrollTo(1)}
          className="cursor-pointer text-xl bg-[#A533FF] mt-5 p-2 text-white font-medium rounded-lg w-max"
        >
          Learn More
        </div>
      </div>
    </div>
  );
};

export default About;
