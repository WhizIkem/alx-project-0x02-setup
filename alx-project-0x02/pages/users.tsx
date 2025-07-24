// user page

import React from "react";
import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import { GetStaticProps } from "next";
import { UserProps } from "@/interfaces";

interface Props {
  users: UserProps[];
}

const Users: React.FC<Props> = ({ users }) => {
  return (
    <div>
      <Header />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Users</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map((user) => (
            <UserCard
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
              address={user.address}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  return {
    props: { users },
  };
};

export default Users;
