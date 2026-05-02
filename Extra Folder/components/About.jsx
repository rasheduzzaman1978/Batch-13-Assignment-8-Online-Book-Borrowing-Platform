"use client";

import Link from "next/link";
import { Button } from "@heroui/react";

export default function AboutPage() {
  return (
    <section className="py-8 md:py-10 lg:py-16 px-4 bg-gradient-to-b from-gray-50 to-white text-center min-h-screen">

      {/* 🔥 Title */}
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-4">
        Why Choose <span className="text-blue-600">BookNest</span>? 🤔
      </h1>

      <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-lg text-justify">
        Discover, borrow, and manage your favorite books effortlessly.  
        BookNest offers a seamless and enjoyable digital reading experience.
      </p>

      {/* ⭐ Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {/* 📚 Feature 1 */}
        <div className="bg-white p-4 md:p-8 rounded-2xl shadow-md 
          animate__animated animate__fadeInUp
          hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

          <div className="text-2xl md:text-4xl mb-3">📚</div>

          <h3 className="text-xl font-semibold mb-2">
            Massive Book Collection
          </h3>

          <p className="text-gray-600 text-sm text-justify">
            Explore thousands of books across various categories and find your perfect read with ease.
          </p>
        </div>

        {/* ⚡ Feature 2 */}
        <div className="bg-white p-4 md:p-8 rounded-2xl shadow-md 
          animate__animated animate__fadeInUp animate__delay-1s
          hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

          <div className="text-2xl md:text-3xl lg:text-4xl mb-3">⚡</div>

          <h3 className="text-xl font-semibold mb-2">
            Quick & Easy Borrowing
          </h3>

          <p className="text-gray-600 text-sm text-justify">
            Borrow your favorite books in just a few clicks with a smooth and hassle-free process.
          </p>
        </div>

        {/* 🔍 Feature 3 */}
        <div className="bg-white p-4 md:p-8 rounded-2xl shadow-md 
          animate__animated animate__fadeInUp animate__delay-2s
          hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

          <div className="text-2xl md:text-3xl lg:text-4xl mb-3">🔍</div>

          <h3 className="text-xl font-semibold mb-2">
            Smart Search & Filters
          </h3>

          <p className="text-gray-600 text-sm text-justify">
            Quickly find books using powerful search and category filters tailored to your needs.
          </p>
        </div>

      </div>

      {/* 🚀 CTA */}
      <div className="mt-14">
        <Link href="/books">
          <Button
            color="primary"
            size="lg"
            className="px-8 py-3 rounded-xl shadow-lg hover:scale-105 transition"
          >
            Explore Books
          </Button>
        </Link>
      </div>

      {/* 🌟 Extra Tagline */}
      <p className="mt-8 text-gray-400 text-sm">
        Start your reading journey today with BookNest 🚀
      </p>

    </section>
  );
}