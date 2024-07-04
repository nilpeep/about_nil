import React from "react";
import { useNavigate } from "react-router-dom";

interface PostCardProps {
  imageSrc: string[];
  title: string;
  likes: number;
  description: string;
  projectId: number;
}

const PostCard: React.FC<PostCardProps> = ({
  imageSrc,
  title,
  likes,
  description,
  projectId,
}) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/projects/${projectId}`)}
      className="shadow-2xl"
    >
      <div className="relative group cursor-pointer bg-white transform transition-transform  hover:scale-105 rounded-lg overflow-hidden">
        <div className="relative w-full" style={{ paddingTop: "100%" }}>
          <img
            className="absolute top-0 left-0 w-full h-full object-cover group-hover:blur-sm "
            src={imageSrc[0]}
            alt={title}
          />
          <div className=" absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black to-transparent opacity-70 "></div>
          <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between p-4">
            <h2 className="text-white text-2xl font-bold">{title}</h2>
            <p className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {description}
            </p>
            <div className="flex items-center justify-between opacity-100 group-hover:opacity-0 transition-opacity duration-300">
              <div className="flex items-center text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mr-2"
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
                <span>{likes}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
