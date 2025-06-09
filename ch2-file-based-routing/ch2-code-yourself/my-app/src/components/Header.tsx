import Link from 'next/link';
import React from 'react';

type Props = {};

function Header({}: Props) {
  return (
    <header className="bg-gray-800 text-white py-4 text-center">
      <h1 className="text-xl font-bold mb-2">🌐 My Next.js App</h1>
      <nav className="space-x-6">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/posts" className="hover:underline">
          Posts
        </Link>
      </nav>
    </header>
  );
}

export default Header;
