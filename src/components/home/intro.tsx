import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <div className=" font-sans flex flex-col gap-8    ">
      <div className="flex flex-col gap-3 leading-10 tracking-2">
        <h1 className="animate-slidein font-medium text-2xl text-text ">
          Hello, I'ts Nilufer Kaplan
        </h1>
        <h2 className="animate-slidein font-bold text-5xl text-text md:text-8xl  ">
          I make{" "}
          <span
            onClick={() => navigate("/projects")}
            className="text-highlight cursor-pointer relative hover-effect-highlight"
          >
            websites <br />
          </span>{" "}
          & write{" "}
          <span
            onClick={() => navigate("/blog")}
            className="text-highlight cursor-pointer relative hover-effect-highlight "
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
