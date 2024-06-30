import React from 'react';
import Link from 'next/link';

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <header className="bg-gray-800 text-white p-4">
        <nav className="container mx-auto flex justify-between">
          <Link href="/">
            <a className="text-xl font-bold">E-Commerce Store</a>
          </Link>
          <Link href="/cart">
            <a>Cart</a>
          </Link>
        </nav>
      </header>
      <main className="container mx-auto p-4">{children}</main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        &copy; 2024 E-Commerce Store
      </footer>
    </div>
  );
};

export default Layout;
