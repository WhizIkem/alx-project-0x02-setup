// Header component

// import nav link

import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-100 py-4 px-6">
      <nav className="flex gap-4" >
        <Link href="/home"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">Home</Link>
        <Link href="/about"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">About</Link>
      </nav>
    </header>
  );
};

export default Header;
