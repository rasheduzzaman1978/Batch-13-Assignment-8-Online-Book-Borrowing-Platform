"use client";

import Link from "next/link";
import { Button } from "@heroui/react";

export default function Banner() {
  return (
    <section
      className="relative h-[80vh] flex items-center justify-center text-center text-white"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* 🔥 Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* 🌟 Content */}
      <div className="relative z-10 px-4 max-w-2xl">

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Find Your Next Read 📚
        </h1>

        {/* Subtitle (optional but better UX) */}
        <p className="text-lg md:text-xl mb-8 text-gray-200">
          Discover amazing books and explore your favorite stories anytime.
        </p>

        {/* Button */}
        <Link href="/books">
          <Button
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl shadow-lg"
          >
            Browse Now
          </Button>
        </Link>

      </div>
    </section>
  );
}