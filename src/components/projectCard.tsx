import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import react from "../assets/react.svg";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  liveLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  githubUrl,
  liveLink,
}) => {
  return (
    <>
      <div className=" m-2 p-3 bg-[#FFF] text-black max-w-[500px]">
        <h1 className="text-2xl font-medium">{title}</h1>
        <p className="text-lg">{description}</p>
        <img src={image} alt="" />
      </div>
    </>
  );
};

export default ProjectCard;
