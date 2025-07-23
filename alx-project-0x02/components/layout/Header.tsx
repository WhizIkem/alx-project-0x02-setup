// Header component

// import nav link

import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";

const Header: React.FC = () => {
  const router = useRouter();
  const isActive = (path: string) => router.pathname === path;

  // Define styles for active and inactive links
  const activeStyle = "bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600";
  const inactiveStyle = "bg-gray-200 text-gray-800 py-2 px-4 rounded hover:bg-gray-300";

  // Render the header with navigation links
  return (
    <header className="bg-gray-100 py-4 px-6">
      <nav className="flex gap-4" >
        <Link href="/home"
          className={isActive("/home") ? activeStyle : inactiveStyle}>Home</Link>
        <Link href="/about"
          className={isActive("/about") ? activeStyle : inactiveStyle}>About</Link>
        <Link href="/posts"
          className={isActive("/posts") ? activeStyle : inactiveStyle}>Posts</Link>
      </nav>
    </header>
  );
};

export default Header;
