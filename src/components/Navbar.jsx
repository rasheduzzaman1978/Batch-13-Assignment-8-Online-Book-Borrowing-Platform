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
    { name: "About", path: "/about" },
  ];

  return (
    <div className="w-full shadow bg-gray-900 text-white sticky top-0 z-50">

      <Navbar maxWidth="full" className="px-6 py-3 bg-gray-900">

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
          {navLinks.map((link) => {
            const isActive = pathname === link.path;

            return (
              <NavbarItem key={link.path}>
                <Link
                  href={link.path}
                  className={`relative transition ${
                    isActive
                      ? "text-white font-semibold"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.name}

                  {/* Active underline */}
                  {isActive && (
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-500 rounded"></span>
                  )}
                </Link>
              </NavbarItem>
            );
          })}
        </NavbarContent>

        {/* 🔹 Right → Hamburger + Auth */}
        <NavbarContent className="flex-1 flex justify-end items-center">

          {/* Mobile Hamburger */}
          <div className="md:hidden mr-2">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-2xl p-2 rounded-lg hover:bg-gray-800 transition"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Desktop Auth */}
          <div className="hidden md:block">
            {!user ? (
              <Link href="/login">
                <Button 
                  color="primary"
                  className="bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Login
                </Button>
              </Link>
            ) : (
              <Button
                color="danger"
                variant="flat"
                onClick={handleLogout}
              >
                Logout
              </Button>
            )}
          </div>

        </NavbarContent>

      </Navbar>

      {/* 🔻 Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 text-white border-t border-gray-700 px-6 py-4 space-y-3">

          {navLinks.map((link) => {
            const isActive = pathname === link.path;

            return (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 ${
                  isActive
                    ? "text-blue-400 font-semibold"
                    : "text-gray-300"
                }`}
              >
                {link.name}
              </Link>
            );
          })}

          <div className="border-t border-gray-700 pt-3"></div>

          {!user ? (
            <Link href="/login" onClick={() => setIsMenuOpen(false)}>
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                Login
              </Button>
            </Link>
          ) : (
            <Button
              className="w-full"
              color="danger"
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