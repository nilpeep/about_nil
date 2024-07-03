import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

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
      <div className=" m-2 p-3 bg-[#FFF] rounded-lg text-black max-w-[500px]">
        <h1 className="text-2xl font-medium">{title}</h1>
        <p className="text-lg">{description}</p>
        <img src={image} alt="" />
      </div>
      <div className="flex gap-2 items-center justify-center">
        <div className="cursor-pointer text-xl bg-[#A533FF] mt-5 p-2  font-medium rounded-lg w-max">
          <a className="text-white" href={githubUrl}>
            View on GitHub
          </a>
        </div>
        {liveLink && (
          <div className="cursor-pointer text-xl text-black mt-5 p-2 bg-white font-medium rounded-lg w-max">
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              View Live &#8599;
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default ProjectCard;
