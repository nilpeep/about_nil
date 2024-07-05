import React from "react";
import { useNavigate } from "react-router-dom";

interface PostCardProps {
  imageSrc: string[];
  title: string;
  likes: number;
  description: string;
  projectId: number;

  sourceLink?: string;
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
      <div className="project-card relative group cursor-pointer bg-white transform transition-transform  hover:scale-105 rounded-lg overflow-hidden">
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

            <div className="flex items-center justify-between opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
