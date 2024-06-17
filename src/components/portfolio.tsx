// Code: Portfolio component
import ProjectCard from "./projectCard";

const Portfolio = () => {
  return (
    <div>
      <h1>Portfolio</h1>
      <ProjectCard
        title="Project 1"
        description="This is a project I made."
        imageUrls={[
          "https://via.placeholder.com/150",
          "https://via.placeholder.com/150",
        ]}
        githubUrl="https://github.com"
      />
      <ProjectCard
        title="Project 2"
        description="This is another project I made."
        imageUrls={[
          "https://via.placeholder.com/150",
          "https://via.placeholder.com/150",
        ]}
        githubUrl="https://github.com"
      />
    </div>
  );
};

export default Portfolio;
