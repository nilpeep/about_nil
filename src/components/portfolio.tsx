import React, { useState } from "react";
import ProjectCard from "./projectCard";
import stockapp from "/assets/stockapp.png";
const projects = [
  {
    title: "Stock Management App",
    description:
      "Stock Management App is a web application that allows users to manage their stock portfolio. Users can add, delete, and update stocks in their portfolio. The app also provides real-time stock prices and news.",
    image: "/assets/stockapp.png",
    githubUrl: "github.com",
    liveLink: "live.com",
  },
  {
    title: "Blog App",
    description:
      "Blog App is a web application that allows users to create, read, update, and delete blog posts. Users can also comment on blog posts.",
    image: "/assets/stockapp.png",
    githubUrl: "github.com",
  },
  {
    title: "Rent a Car App",
    description:
      "Rent a Car App is a web application that allows users to rent cars. Users can view available cars, book cars, and view their booking history.",
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
      <div className="w-full  flex-col bg-opacity-75  h-screen flex justify-center items-center flex-wrap">
        <div className="relative">
          <ProjectCard
            title={projects[current].title}
            description={projects[current].description}
            image={projects[current].image}
            githubUrl={projects[current].githubUrl}
            liveLink={projects[current].liveLink}
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
        <div className="flex gap-2 mt-5">
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
      </div>
    </div>
  );
};

export default Carousel;
