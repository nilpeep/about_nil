import React from "react";
import { projects } from "../data/projects";
import { useParams, useNavigate } from "react-router-dom";

interface ProjectProps {}

const SingleProject: React.FC<ProjectProps> = () => {
  let { projectId } = useParams();
  const navigate = useNavigate();

  // projectId geçersizse 404 sayfasına yönlendir
  if (!projectId || isNaN(Number(projectId)) || !projects[Number(projectId)]) {
    navigate("/404");
    return null;
  }

  const project = projects[Number(projectId)];

  return (
    <div className="max-w-4xl mx-auto p-4 ">
      <div className="shadow-md bg-primary rounded-lg overflow-hidden ">
        <div className="w-full h-64 bg-[#000]">
          <img
            className="w-full h-full object-contain"
            src={project.imageSrc[0]}
            alt={project.title}
          />
        </div>
        <div className="p-6 flex gap-5 flex-col">
          <h1 className="text-4xl text-text font-bold ">{project.title}</h1>

          <div className="flex items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-highlight mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
            <span>{project.likes} likes</span>
          </div>
          <div className="flex text-2xl gap-2">
            <span>Live at &rarr; </span>

            <a href={`${project.gitHubLink}`} target="_blank" className="link ">
              {project.gitHubLink?.substring(8)}
            </a>
          </div>
          <div className="flex gap-2 text-2xl">
            <span>GitHub Repo &rarr;</span>

            <a href={`${project.gitHubLink}`} target="_blank" className="link ">
              {project.gitHubLink?.substring(8)}
            </a>
          </div>

          <p className="text-text text-3xl ">{project.description}</p>

          <div>
            <img src={project.imageSrc[1]} alt="" />
          </div>
          <div className="prose border-b-2 text-2xl py-5">
            <p>{project.content}</p>
          </div>
          <div className="font-semibold ">
            <p>My other projects</p>
            {projects.map((project, index) => {
              if (project.projectId !== Number(projectId)) {
                return (
                  <div
                    key={index}
                    className="flex bg-secondary text-highlight p-3 rounded-lg group items-center gap-3 my-4 cursor-pointer "
                    onClick={() => navigate(`/projects/${project.projectId}`)}
                  >
                    <img
                      className="w-10 h-10 object-cover rounded-full"
                      src={project.imageSrc[0]}
                      alt={project.title}
                    />
                    <p>{project.title}</p>
                    <div className="hover-effect-arrow">&rarr;</div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
