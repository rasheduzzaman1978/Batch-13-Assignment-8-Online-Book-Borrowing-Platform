"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const { data, isPending } = authClient.useSession();
  const user = data?.user;

  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    await authClient.signOut();
  };

  if (isPending) {
    return <div className="p-4 text-center">Loading...</div>;
  }

  return (
    <nav className="px-6 py-4 bg-white shadow-md sticky top-0 z-50">
      
      <div className="flex items-center justify-between">
        {/* 🔹 Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          📚 BookNest
        </Link>

        {/* 🔹 Desktop Menu */}
        <div className="hidden md:flex gap-6 text-gray-700 font-medium">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/books" className="hover:text-blue-600">All Books</Link>
          <Link href="/profile" className="hover:text-blue-600">My Profile</Link>
        </div>

        {/* 🔹 Right (Desktop Auth) */}
        <div className="hidden md:flex items-center gap-3">
          {!user ? (
            <Link href="/login">
              <Button size="sm" className="bg-blue-600 text-white rounded-full px-4">
                Login
              </Button>
            </Link>
          ) : (
            <>
              <span className="text-gray-700">Hi, {user?.name}</span>
              <Button
                size="sm"
                className="bg-red-500 text-white rounded-full px-4"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </>
          )}
        </div>

        {/* 🔹 Hamburger Icon */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* 🔽 Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 bg-gray-50 p-4 rounded-lg shadow">
          
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/books" onClick={() => setIsOpen(false)}>All Books</Link>
          <Link href="/profile" onClick={() => setIsOpen(false)}>My Profile</Link>

          <div className="border-t pt-3">
            {!user ? (
              <Link href="/login" onClick={() => setIsOpen(false)}>
                <Button size="sm" className="w-full bg-blue-600 text-white">
                  Login
                </Button>
              </Link>
            ) : (
              <>
                <p className="mb-2">Hi, {user?.name}</p>
                <Button
                  size="sm"
                  className="w-full bg-red-500 text-white"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;