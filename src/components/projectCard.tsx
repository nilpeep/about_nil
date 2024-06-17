import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  githubUrl,
}) => {
  return (
    <div className="text-black bg-white w-full flex gap-1 rounded-lg ">
      <img src={imageUrl} alt={title} className="project-card__image" />
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
