import nilufer from "../assets/nil.jpeg";

const About = ({ parallax }: any) => {
  return (
    <>
      <h1 className="ml-3 font-thin">About me</h1>
      <div>
        <div className="rounded-lg bg-[#FFF] m-2 p-3 text-black max-w-[500px]">
          <div>
            <div className="h-36 float-right rounded-lg overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src={nilufer}
                alt=""
              />
            </div>
            <p className=" text-3xl text-black font-medium animate-slidein overflow-hidden">
              It's Nilufer Kaplan, a passionate and skilled software developer
              with over a year of experience.
            </p>
          </div>

          <p className="text-xl ">
            Each day is an adventure filled with problem-solving and creativity,
            where writing code feels like crafting solutions that matter. Beyond
            coding, there’s a love for tech blogs, coding challenges, and
            sharing knowledge with peers.
            <span className="font-thin text-small ">
              <br />
              For me, software development is not just a job—it’s a calling and
              a continuous journey of discovery and innovation.
            </span>
          </p>
        </div>

        <div className="flex flex-col justify-around items-center">
          <div
            onClick={() => parallax.current.scrollTo(2)}
            className="cursor-pointer text-xl bg-[#A533FF] mt-5 p-2 text-white font-medium rounded-lg w-max"
          >
            Explore my Projects
          </div>
          <div className="cursor-pointer text-xl text-black mt-5 p-2 bg-white font-medium rounded-lg w-max">
            <a
              href="https://resume-beta-rho.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View my Resume &#8599;
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
