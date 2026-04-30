// "use client";

import Link from "next/link";
import { Button } from "@heroui/react";

export default function Banner() {
  return (
    <section
      className="relative h-[80vh] flex items-center justify-center text-center text-white bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1524995997946-a1c2e315a42f')",
      }}
    >
      {/* 🔥 Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* 🌟 Content */}
      <div className="relative z-10 px-4">

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate__animated animate__fadeInDown">
          Find Your Next Read 📚
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl mb-6 animate__animated animate__fadeInUp animate__delay-1s">
          হাজারো বই থেকে তোমার পছন্দের বই খুঁজে নাও
        </p>

        {/* Button */}
        <Link href="/books">
          <Button
            color="primary"
            size="lg"
            className="animate__animated animate__zoomIn animate__delay-2s"
          >
            Browse Now
          </Button>
        </Link>

      </div>
    </section>
  );
}