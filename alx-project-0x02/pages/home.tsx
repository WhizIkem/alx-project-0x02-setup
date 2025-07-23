import React from "react";
import Card from "@/components/common/Card";

const Home: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card title="Welcome" content="This is a welcome card!" />
        <Card title="About Us" content="We are building something great" />
        <Card title="Contact" content="You can reach us anytime" />
      </div>
    </div>
  );
};

export default Home;
