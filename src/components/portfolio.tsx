import React, { useState } from "react";
import ProjectCard from "./projectCard";
import stockapp from "/assets/stockapp.png";
const projects = [
  {
    title: "Project One",
    description: "This is a description for project one.",
    image: "/assets/stockapp.png",
    githubUrl: "github.com",
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
    <div className="relative flex items-center">
      <button
        className="absolute left-0 p-2 bg-gray-800 text-white"
        onClick={prevSlide}
      >
        &lt;
      </button>
      <div className="w-full flex justify-center">
        <ProjectCard
          title={projects[current].title}
          description={projects[current].description}
          image={projects[current].image}
          githubUrl={projects[current].githubUrl}
        />
      </div>
      <button
        className="absolute right-0 p-2 bg-white text-black"
        onClick={nextSlide}
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
