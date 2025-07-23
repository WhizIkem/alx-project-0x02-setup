import React, { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { title } from "process";


const Home: React.FC = () => {
  // store dynamic posts
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // handle adding a new post
  const handleAddPost = (post: { title: string; content: string }) => {
    setPosts([...posts, post]);
  };

  // static content for the home page
  const staticPosts = [
    { title: "Post 1", content: "This is the content of post 1" },
    { title: "Post 2", content: "This is the content of post 2" },
    { title: "Post 3", content: "This is the content of post 3" }
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page</h1>

      {/* Post Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        Create Post
      </button>

      {/* Modal for creating post */}
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />

      {/* All Posts (Static and Dynamic) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Render static posts */}
        {staticPosts.map((post, index) => (
          <Card key={`static-${index}`} title={post.title} content={post.content} />
        ))}
        {/* Render dynamic Posts */}
        {posts.map((post, index) => (
          <Card key={`dynamic-${index}`} title={post.title} content={post.content} />
        ))}
      </div>
    </div>
  );
};

export default Home;
