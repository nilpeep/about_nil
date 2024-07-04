import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import fetchRSSFeed, { Article } from "../services/blogService";

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

const Blog = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const getArticles = async () => {
      const fetchedArticles = await fetchRSSFeed("niluferk038");
      await setArticles(fetchedArticles);
      console.log(articles);
    };

    getArticles();
  }, []);
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl md:text-7xl mb-5">Blog</h1>
      <div className="flex flex-col gap-10">
        {posts.map((post, index) => (
          <div className="cursor-pointer p-2 rounded-lg relative" key={index}>
            <h2 className="text-highlight text-3xl hover-effect-highlight">
              {post.title}
            </h2>
            <p className="text-2xl">{post.description}</p>
            <p>{post.likes} likes</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
