import PostCard from "../projects/PostCars";
import { projects } from "../../data/projects";
import { useNavigate } from "react-router-dom";

const FeaturedPosts = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2 className="text-left text-3xl font-bold mt-20 mb-10">
        Featured Projects
      </h2>
      <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div className="shadow-2xl">
            <PostCard
              projectId={project.projectId}
              key={index}
              imageSrc={project.imageSrc}
              title={project.title}
              likes={project.likes}
              description={project.description}
            />
          </div>
        ))}
      </div>
      <div
        onClick={() => {
          navigate("/projects");
          window.scrollTo(0, 0);
        }}
        className="flex justify-end text-right text-4xl my-10 text-highlight font-semibold cursor-pointer group "
      >
        See all projects <div className="hover-effect-arrow">&rarr;</div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
