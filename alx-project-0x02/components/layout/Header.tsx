// Header component

// import nav link

import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/home">Home</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
