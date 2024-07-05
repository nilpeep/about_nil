// src/pages/singlearticle.js
import React from "react";
import { useLocation } from "react-router-dom";

const SingleArticle = () => {
  const location = useLocation();
  const { article } = location.state || {};

  if (!article) {
    return <p>No article data available</p>;
  }

  const renderCategories = (category: string | string[]) => {
    if (Array.isArray(category)) {
      return category.join(", ").toUpperCase();
    }
    return category.toUpperCase();
  };

  return (
    <div className="max-w-4xl mx-auto p-4 ">
      <div className="shadow-md bg-primary rounded-lg overflow-hidden ">
        <div className="p-6 flex gap-5 flex-col">
          <h1 className="text-4xl text-text font-bold ">{article.title}</h1>

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
            <span>{renderCategories(article.category)}</span>
          </div>
          <div className="flex text-2xl gap-2">
            <a href={`${article.link}`} target="_blank" className="link ">
              Read on medium
            </a>
          </div>

          <div className="prose text-2xl py-5">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleArticle;
