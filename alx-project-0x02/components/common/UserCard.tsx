// User Card Component

import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border rounded p-4 shadow bg-white">
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-sm text-gray-700">{email}</p>
      <p className="text-sm text-gray-700">
        {address.street}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
