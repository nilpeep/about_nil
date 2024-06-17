import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import react from "../assets/react.svg";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrls: Array<string>;
  githubUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrls,
  githubUrl,
}) => {
  return (
    <div className="text-black bg-white w-full flex gap-1 rounded-lg w-[70%]">
      <Carousel className="">
        {imageUrls.map((url, index) => {
          return (
            <div key={index}>
              <img src={url} alt="" />
            </div>
          );
        })}
      </Carousel>
      <div>
        <h3 className="text-2xl">{title}</h3>
        <p className="project-card__description">{description}</p>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card__link"
        >
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
