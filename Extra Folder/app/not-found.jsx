"use client";
import { Button } from "@heroui/react";
import { FaHome, FaSearch } from "react-icons/fa";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-500 px-4">

      {/* Background blur circle */}
      <div className="absolute w-72 h-72 bg-purple-400 opacity-30 rounded-full blur-3xl top-10 left-10"></div>
      <div className="absolute w-72 h-72 bg-blue-400 opacity-30 rounded-full blur-3xl bottom-10 right-10"></div>

      <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10 max-w-lg w-full text-center shadow-2xl">

        {/* 404 */}
        <h1 className="text-8xl font-extrabold text-white drop-shadow-lg animate-bounce">
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-white mt-4">
          Page Not Found 😕
        </h2>

        {/* Description */}
        <p className="text-white/80 mt-3 mb-6">
          “Looks like the page you’re searching for is no longer here or has moved.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center flex-wrap">
          <Button
            color="primary"
            variant="solid"
            startContent={<FaHome />}
            className="font-semibold"
            onClick={() => (window.location.href = "/")}
          >
            Back Home
          </Button>

          <Button
            color="secondary"
            variant="flat"
            startContent={<FaSearch />}
            className="font-semibold"
            onClick={() => (window.location.href = "/search")}
          >
            Search
          </Button>
        </div>

      </div>
    </div>
  );
}