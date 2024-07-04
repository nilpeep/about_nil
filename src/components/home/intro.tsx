import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className=" font-sans flex flex-col gap-8    ">
      <div className="flex flex-col gap-3">
        <h1 className="animate-slidein font-semibold text-2xl text-highlight ">
          Hello, I'ts Nilufer Kaplan
        </h1>
        <h2 className="animate-slidein font-bold text-5xl text-text md:text-8xl  ">
          I make{" "}
          <span
            onClick={() => navigate("/projects")}
            className="text-highlight cursor-pointer relative hover-effect-highlight"
          >
            websites
          </span>{" "}
          and write{" "}
          <span
            onClick={() => navigate("/blog")}
            className="cursor-pointer text-highlight relative hover-effect-highlight"
          >
            blogs.
          </span>
        </h2>
      </div>
      <div className="text-white text-sm rounded-lg md:my-8 ">
        <p className="text-2xl text-text md:text-3xl">
          Passionate and skilled Full-stack Developer. Also a Blog Writer and a
          Content Creator.
        </p>
      </div>
    </div>
  );
};

export default About;
