import { useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import SkeletonLoader from "../components/SkeletonLoading";
import ErrorPage from "../components/ErrorPage";

// src/types.ts
export interface Article {
  id: string;
  title: string;
  link: string;
  author: string;
  content: string;
  category: string | string[];
}

const Blog = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const imgRef = useRef(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          "https://v1.nocodeapi.com/nilpeep/medium/JXAIiQHRzjsIXvpg"
        );
        const data: Article[] = await response.json();
        setArticles(data);
        localStorage.setItem("articles", JSON.stringify(data));
        setLoading(false);
      } catch (err) {
        console.log(err);
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) return <SkeletonLoader />;
  if (error) return <ErrorPage />;

  const handleArticleClick = (article: Article) => {
    navigate(`/blog/${article.id}`, { state: { article } });
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl md:text-7xl mb-5">Blog</h1>
      <div className="flex flex-col gap-10">
        {articles.map((article, index) => (
          <div
            onClick={() => handleArticleClick(article)}
            className="cursor-pointer p-2 rounded-lg relative flex items-center gap-5"
            key={index}
          >
            {article.content.includes("img") ? (
              <img
                ref={imgRef}
                className="h-20 w-40 object-cover rounded-lg"
                src={article.content.match(/src="([^"]*)"/)[1]}
                alt="article"
              />
            ) : (
              <div className="w-full h-60 bg-gray-300 rounded-lg"></div>
            )}
            <h2 className="text-highlight text-3xl hover-effect-highlight">
              {article.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
