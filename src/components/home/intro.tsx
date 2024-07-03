const About = () => {
  return (
    <div className=" font-sans flex flex-col gap-8    ">
      <div className="flex flex-col gap-3">
        <h1 className="animate-slidein font-semibold text-2xl text-highlight ">
          Hello, I'ts Nilufer Kaplan
        </h1>
        <h2 className="animate-slidein font-bold text-5xl text-text md:text-8xl ">
          I make websites and write blogs.
        </h2>
      </div>
      <div className="text-white text-sm rounded-lg md:my-10 ">
        <p className="text-2xl text-text md:text-3xl">
          Passionate and skilled Full-stack Developer. Also a Blog Writer and a
          Content Creator.
        </p>
      </div>
    </div>
  );
};

export default About;
