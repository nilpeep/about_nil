const About = ({ parallax }: any) => {
  return (
    <>
      <div className="mt-40 ml-5 sm:ml-20">
        <h1
          style={{
            textShadow:
              " 0 0 10px #ff00ff, 0 0 20px #ff00ff, 0 0 30px #ff00ff, 0 0 40px #ff00ff",
          }}
          className="animate-slidein font-big-shoulders font-bold text-5xl text-[#FFCBCB] "
        >
          NILUFER KAPLAN
        </h1>
        <h2
          style={{
            textShadow:
              " 0 0 20px #39FF14, 0 0 40px #39FF14, 0 0 60px #39FF14, 0 0 80px #39FF14",
          }}
          className="animate-slidein font-big-shoulders font-bold text-5xl text-[#C3FF93] "
        >
          A SOFTWARE DEVELOPER
        </h2>
        {/* <h2
              style={{
                textShadow:
                  " 0 0 5px #FF7F3E, 0 0 10px #FF7F3E, 0 0 15px #FF7F3E, 0 0 20px #FF7F3E",
              }}
              className="animate-slidein font-big-shoulders font-bold text-5xl text-[#F8F9D7] "
            >
              ARTIST
            </h2> */}
      </div>
      <div className="text-black bg-white p-5 text-sm rounded-lg w-[400px] h-[400px] mt-[200px]">
        <h1>Hi Its nilufer!</h1>
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
    </>
  );
};

export default About;
