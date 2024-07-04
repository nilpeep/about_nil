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
    <div className="max-w-4xl mx-auto p-4">
      <div className="shadow-lg rounded-lg overflow-hidden">
        <div className="w-full h-64 bg-gray-200">
          <img
            className="w-full h-full object-contain"
            src={project.imageSrc[0]}
            alt={project.title}
          />
        </div>
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
          <div className="flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-red-600 mr-2"
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
          <p className="text-gray-700 mb-6">{project.description}</p>
          <div>
            <img src={project.imageSrc[1]} alt="" />
          </div>
          <div className="prose">
            <p>{project.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
