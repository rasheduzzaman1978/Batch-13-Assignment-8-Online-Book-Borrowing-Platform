"use client";

import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import Link from "next/link";

const Navbar = () => {
  const { data, isPending } = authClient.useSession();
  const user = data?.user;

  const handleLogout = async () => {
    await authClient.signOut();
  };

  if (isPending) {
    return <div className="p-4">Loading...</div>;
  }

  return (
    <nav className="border-b px-4 py-3 flex items-center justify-between">

      {/* 🔹 Left: Logo */}
      <div className="text-xl font-bold">
        <Link href="/">📚 BookNest</Link>
      </div>

      {/* 🔹 Center: Menu */}
      <div className="hidden md:flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/books">All Books</Link>
        <Link href="/profile">My Profile</Link>
      </div>

      {/* 🔹 Right: Auth */}
      <div className="flex items-center gap-3">
        {!user ? (
          <Link href="/login">
            <Button size="sm" color="primary" variant="flat">
              Login
            </Button>
          </Link>
        ) : (
          <>
            <span className="font-medium">Hi, {user?.name}</span>

            <Button
              size="sm"
              color="danger"
              variant="flat"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </>
        )}
      </div>

    </nav>
  );
};

export default Navbar;