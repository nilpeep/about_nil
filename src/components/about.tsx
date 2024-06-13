const About = ({ parallax }: any) => {
  return (
    <div className="flex flex-col mt-[70px] ml-5">
      <div className="font-bigshoulders">
        <h1
          style={{
            textShadow:
              " 0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff, 0 0 40px #ff00ff",
          }}
          className=" animate-slidein font-bold text-5xl text-[#FFCBCB] "
        >
          NILUFER KAPLAN
        </h1>
        <h2
          style={{
            textShadow:
              " 0 0 20px #39FF14, 0 0 40px #39FF14, 0 0 60px #39FF14, 0 0 80px #39FF14",
          }}
          className="animate-slidein font-bold text-5xl text-[#C3FF93] "
        >
          A SOFTWARE DEVELOPER
        </h2>
      </div>
      <div className="text-white p-5 text-sm rounded-lg w-[400px] h-[400px]">
        <p className="text-xl">
          Passionate and skilled Full-stack Developer. With over a year of
          dynamic experience in full-stack web development, I specialize in
          building high-quality web applications that are both visually
          appealing and highly functional.
        </p>
        <div
          onClick={() => parallax.current.scrollTo(2)}
          className="cursor-pointer text-xl bg-[#A533FF] p-2 text-white font-medium rounded-lg w-max"
        >
          Learn More
        </div>
      </div>
    </div>
  );
};

export default About;
