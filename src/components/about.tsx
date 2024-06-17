import nilufer from "../assets/nil.jpeg";

const About = ({ parallax }: any) => {
  return (
    <div>
      <div className="rounded-lg bg-[#FFF] m-2 p-3 text-black max-w-[500px]">
        <div className="float-right rounded-lg h-32 w-32">
          <img className="object-cover w-full h-full" src={nilufer} alt="" />
        </div>
        <h1 className="font-roboto text-2xl text-black font-bold animate-slidein overflow-hidden">
          It's Nilufer Kaplan, a passionate and skilled software developer with
          over a year of experience.
        </h1>
        <p className="text-xl font-medium">
          Each day is an adventure filled with problem-solving and creativity,
          where writing code feels like crafting solutions that matter. Beyond
          coding, there’s a love for tech blogs, coding challenges, and sharing
          knowledge with peers.{" "}
          <span className="text-3xl font-bold">
            For me, software development is not just a job—it’s a calling and a
            continuous journey of discovery and innovation.
          </span>
        </p>
      </div>
      <div className="rounded-lg bg-[#FFF] m-2 p-3 text-black max-w-[500px]">
        <h1 className="font-roboto text-2xl text-black font-medium animate-slidein">
          Creating beautiful and functional client experiences with React and
          TypeScript.
        </h1>
        <p className="mt-2">
          <a href="https://skillicons.dev">
            <img src="https://skillicons.dev/icons?i=react,ts,tailwind,vite,next,redux" />
          </a>
        </p>
      </div>
      <div className="rounded-lg bg-[#FFF] m-2 p-3 text-black max-w-[500px]">
        <h1 className="font-roboto text-2xl text-black font-medium animate-slidein">
          And server applications with Node.js and Express.
        </h1>
        <p className="mt-2">
          <a href="https://skillicons.dev">
            <img src="https://skillicons.dev/icons?i=nodejs,express,mongo,sqlite" />
          </a>
        </p>
      </div>
      <div className="flex justify-around">
        <div
          onClick={() => parallax.current.scrollTo(1)}
          className="cursor-pointer text-xl bg-[#A533FF] mt-5 p-2 text-white font-medium rounded-lg w-max"
        >
          View my Resume
        </div>
        <div
          onClick={() => parallax.current.scrollTo(1)}
          className="cursor-pointer text-xl text-[#A533FF] mt-5 p-2 bg-white font-medium rounded-lg w-max"
        >
          Explore my Portfolio
        </div>
      </div>
    </div>
  );
};

export default About;
