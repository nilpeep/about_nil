import React, { useState } from "react";
import ProjectCard from "./projectCard";
import stockapp from "/assets/stockapp.png";
const projects = [
  {
    title: "Stock App",
    description: "This is a description for project one.",
    image: "/assets/stockapp.png",
    githubUrl: "github.com",
    liveLink: "live.com",
  },
  {
    title: "Project Two",
    description: "This is a description for project two.",
    image: "/assets/stockapp.png",
    githubUrl: "github.com",
  },
  {
    title: "Project Three",
    description: "This is a description for project three.",
    image: "/assets/stockapp.png",
    githubUrl: "github.com",
  },
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === projects.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? projects.length - 1 : current - 1);
  };

  return (
    <div className=" flex flex-col items-center">
      <div className="w-full  flex-col bg-opacity-75 bg-[#27214f] h-[700px] flex justify-center items-center flex-wrap">
        <div className="relative">
          <ProjectCard
            title={projects[current].title}
            description={projects[current].description}
            image={projects[current].image}
            githubUrl={projects[current].githubUrl}
          />
          <button
            className="absolute -bottom-10 left-3 p-2 bg-white text-black"
            onClick={prevSlide}
          >
            &lt;
          </button>
          <button
            className="absolute -bottom-10 right-3 p-2 bg-white text-black"
            onClick={nextSlide}
          >
            &gt;
          </button>
        </div>
        <div className="flex gap-2">
          {projects.map((project, i) => (
            <div
              onClick={() => setCurrent(i)}
              key={i}
              className={`w-5 cursor-pointer h-5 rounded-full ${
                current === i ? "bg-white" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="cursor-pointer text-xl bg-[#A533FF] mt-5 p-2  font-medium rounded-lg w-max">
            <a className="text-white" href={projects[current].githubUrl}>
              View on GitHub
            </a>
          </div>
          {projects[current].liveLink && (
            <div className="cursor-pointer text-xl text-black mt-5 p-2 bg-white font-medium rounded-lg w-max">
              <a
                href={projects[current].liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Live &#8599;
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
