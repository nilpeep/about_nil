import PostCard from "../components/projects/PostCars";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <div>
      <div>
        <h1 className="text-5xl my-5">Projects</h1>
      </div>
      <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((post, index) => (
          <div className="shadow-2xl">
            <PostCard
              key={index}
              imageSrc={post.imageSrc}
              title={post.title}
              likes={post.likes}
              description={post.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
