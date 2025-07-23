// Posts component

import React from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { GetStaticProps } from "next";

// API Response
interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

// component props interface
interface Props {
  posts: Post[];
}

const Posts: React.FC<Props> = ({ posts }) => {
  return (
    <div>
      <Header />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              title={post.title}
              content={post.body}
              userId={post.userId}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts = await res.json();

  return { props: { posts } };
};

export default Posts;
