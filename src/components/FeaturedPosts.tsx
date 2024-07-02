import React from "react";
import PostCard from "./PostCars";
import nil from "/assets/nil.jpeg";

const posts = [
  {
    imageSrc: "https://via.placeholder.com/300x200",
    title: "Old Dogs, new CSS Tricks",
    likes: 47,
    description:
      "Learn new tricks in CSS to enhance your web development skills.",
  },
  {
    imageSrc: "https://via.placeholder.com/300x200",
    title: "React Tips",
    likes: 52,
    description: "Some useful tips for React developers.",
  },
  {
    imageSrc: "https://via.placeholder.com/300x200",
    title: "Advanced JavaScript",
    likes: 36,
    description: "Deep dive into advanced JavaScript concepts.",
  },
  {
    imageSrc: "https://via.placeholder.com/300x200",
    title: "CSS Grid",
    likes: 48,
    description: "Master CSS Grid layout with practical examples.",
  },
  {
    imageSrc: "https://via.placeholder.com/300x200",
    title: "TypeScript Basics",
    likes: 29,
    description: "Get started with TypeScript in your JavaScript projects.",
  },
  {
    imageSrc: "https://via.placeholder.com/300x200",
    title: "Node.js Performance",
    likes: 33,
    description: "Optimize your Node.js applications for better performance.",
  },
  {
    imageSrc: "https://via.placeholder.com/300x200",
    title: "GraphQL Introduction",
    likes: 41,
    description: "Learn the basics of GraphQL and how to use it.",
  },
  {
    imageSrc: "https://via.placeholder.com/300x200",
    title: "Building APIs with Express",
    likes: 45,
    description: "Create robust APIs using Express.js.",
  },
  {
    imageSrc: "https://via.placeholder.com/300x200",
    title: "Understanding Docker",
    likes: 38,
    description: "A beginner's guide to containerization with Docker.",
  },
];

const FeaturedPosts = () => {
  return (
    <div>
      <h2 className="text-left text-3xl font-bold mb-5">Featured Posts</h2>
      <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <PostCard
            key={index}
            imageSrc={post.imageSrc}
            title={post.title}
            likes={post.likes}
            description={post.description}
          />
        ))}
      </div>
      <div className="flex justify-end text-right text-4xl my-10 text-highlight font-semibold cursor-pointer group ">
        See all posts{" "}
        <div
          className="transition-transform duration-300 transform 
        group-hover:translate-x-2"
        >
          &rarr;
        </div>
      </div>
    </div>
  );
};

export default FeaturedPosts;
