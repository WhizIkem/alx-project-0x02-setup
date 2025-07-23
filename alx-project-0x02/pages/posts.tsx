// Posts component

import React from "react";
import Header from "@/components/layout/Header";

const Post: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="p-4">
        <h1>Posts</h1>
      </div>
    </div>
  );
};

export default Post;