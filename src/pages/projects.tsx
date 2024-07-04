import PostCard from "../components/projects/PostCars";
import { projects } from "../data/projects";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <h1 className="text-5xl my-5">Projects</h1>
      </div>
      <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            onClick={() => navigate(`/projects/${project.projectId}`)}
            className="shadow-2xl"
          >
            <PostCard
              key={index}
              imageSrc={project.imageSrc}
              title={project.title}
              likes={project.likes}
              description={project.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
