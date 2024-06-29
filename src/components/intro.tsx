const About = ({ parallax }: any) => {
  return (
    <div className="flex flex-col mt-[70px] ml-5 sm:ml-32">
      <div className="font-bigshoulders">
        <h1
          style={{
            textShadow:
              " 0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff, 0 0 40px #ff00ff",
          }}
          className=" animate-slidein font-bold text-2xl text-[#FFCBCB] "
        >
          HELLO, IT'S NILUFER
        </h1>
        <h2
          style={{
            textShadow:
              " 0 0 20px #39FF14, 0 0 40px #39FF14, 0 0 60px #39FF14, 0 0 80px #39FF14",
          }}
          className="animate-slidein font-bold text-5xl text-[#C3FF93] md:text-7xl "
        >
          I MAKE WEBSITES
        </h2>
      </div>
      <div className="text-white font-bold text-sm rounded-lg w-[400px] h-[400px] mt-5">
        <p className="text-2xl text-white font-bold mt-5 md:text-4xl">
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
