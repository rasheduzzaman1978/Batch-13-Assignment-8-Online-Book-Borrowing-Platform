"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@heroui/react";
import "animate.css";

export default function Banner() {
  return (
    <section className="relative h-[50vh] md:h-[70vh] lg:h-[80vh] flex items-center justify-center text-center text-white overflow-hidden">

      {/* Background */}
      <Image
        src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
        alt="Library"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 px-4 max-w-2xl">

        {/* Heading */}
        <h1 className="animate__animated animate__fadeInDown text-3xl md:text-4xl lg:text-6xl font-bold mb-6 leading-tight">
          Find Your Next Read 📚
        </h1>

        {/* Subtitle */}
        <p className="animate__animated animate__fadeInUp animate__delay-1s text-lg md:text-xl lg:text-2xl mb-8 text-gray-200">
          Discover amazing books and explore your favorite stories anytime.
        </p>

        {/* Button */}
        <div className="animate__animated animate__zoomIn animate__delay-2s">
          <Link href="/books">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition"
            >
              Browse Now
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}