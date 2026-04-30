"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@heroui/navbar";

import { Button } from "@heroui/react";

export default function CustomNavbar({ user, handleLogout }) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "All Books", path: "/books" },
    { name: "My Profile", path: "/profile" },
  ];

  return (
    <div className="w-full shadow bg-gray-900 sticky top-0 z-50">

      {/* 🔹 Navbar */}
      <Navbar maxWidth="full" className="px-6 py-3">

        {/* 🔹 Left → Logo */}
        <NavbarContent justify="start" className="flex-1">
          <NavbarBrand>
            <Link href="/" className="font-bold text-xl text-white">
              📚 BookNest
            </Link>
          </NavbarBrand>
        </NavbarContent>

        {/* 🔹 Center → Menu */}
        <NavbarContent
          justify="center"
          className="hidden md:flex flex-1 gap-8"
        >
          {navLinks.map((link) => (
            <NavbarItem key={link.path}>
              <Link
                href={link.path}
                className={`transition ${
                  pathname === link.path
                    ? "text-white font-semibold border-b-2 border-white-500"
                    : "text-purple-500 hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        {/* 🔹 Right → Hamburger + Auth */}
        <NavbarContent className="flex-1 flex justify-end items-center">

          {/* Mobile Hamburger */}
          <div className="md:hidden mr-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-2xl p-2 rounded-lg hover:bg-gray-100 transition"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Desktop Login */}
          <div className="hidden md:block">
            {!user ? (
              <Link href="/login">
                <Button color="primary" variant="flat" className="hover:bg-blue-500 text-pink-500">
                  Login
                </Button>
              </Link>
            ) : (
              <Button color="danger" variant="flat" onClick={handleLogout}>
                Logout
              </Button>
            )}
          </div>

        </NavbarContent>

      </Navbar>

      {/* 🔻 Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow px-6 py-4 space-y-3">

          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`block py-2 ${
                pathname === link.path
                  ? "text-primary font-semibold"
                  : "text-gray-700"
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Divider */}
          <div className="border-t pt-3"></div>

          {/* Auth */}
          {!user ? (
            <Link href="/login" onClick={() => setIsMenuOpen(false)}>
              <Button color="primary" fullWidth>
                Login
              </Button>
            </Link>
          ) : (
            <Button
              color="danger"
              fullWidth
              onClick={() => {
                handleLogout();
                setIsMenuOpen(false);
              }}
            >
              Logout
            </Button>
          )}

        </div>
      )}
    </div>
  );
}