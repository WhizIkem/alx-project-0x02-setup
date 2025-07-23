// Post Card component

import React from "react";
import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="border rounded p-4 shadow">
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-gray-700 mb-2">{content}</p>
      <span className="text-sm text-gr.ay-500">User ID: {userId}</span>
    </div>
  );
};

export default PostCard;
