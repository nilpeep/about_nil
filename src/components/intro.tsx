const About = ({ parallax }: any) => {
  return (
    <div className=" font-sans flex flex-col  bg-bg ">
      <div className="">
        <h1 className="animate-slidein font-md text-2xl text-text ">
          Hello, I'ts Nilufer Kaplan
        </h1>
        <h2 className="animate-slidein font-bold text-5xl text-highlight md:text-8xl ">
          I make websites and write blogs.
        </h2>
      </div>
      <div className="text-white text-sm rounded-lg mt-5">
        <p className="text-2xl text-text  mt-5 md:text-3xl">
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
