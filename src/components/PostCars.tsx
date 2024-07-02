import React from "react";

interface PostCardProps {
  imageSrc: string;
  title: string;
  likes: number;
  description: string;
}

const PostCard: React.FC<PostCardProps> = ({
  imageSrc,
  title,
  likes,
  description,
}) => {
  return (
    <div className="shadow-2xl">
      <div className="cursor-pointer relative h-[200px] md:h-[300px] w-[100%] rounded-lg overflow-hidden  bg-white transform transition-transform hover:scale-105 group">
        <img
          className="w-[100%] h-[300px] object-cover"
          src={imageSrc}
          alt={title}
        />
        <div className="absolute top-0 left-0 w-[100%] h-[100%] bg-gradient-to-t from-black to-transparent opacity-70"></div>
        <div className="absolute top-0 left-0 w-[100%] h-[100%] flex flex-col justify-between p-4">
          <h2 className="text-white text-2xl font-bold">{title}</h2>
          <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
  );
};

export default PostCard;
