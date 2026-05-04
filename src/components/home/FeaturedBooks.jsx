"use client";

import Link from "next/link";
import Image from "next/image";
import booksData from "@/data/books.json";
import { authClient } from "@/lib/auth-client";
import LoadingPage from "@/components/shared/LoadingPage";

export default function FeaturedBooks() {
  const books = booksData.slice(0, 4);

  const { data, isPending } = authClient.useSession();

  // ⏳ loading state
  if (isPending) {
    return <LoadingPage />;
  }

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-gradient-to-b from-gray-50 to-gray-200 px-4">

      {/* Title */}
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-12">
        Featured Books 📚
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">

        {books.map((book, index) => (
          <div
            key={book.id}
            className="group bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-md overflow-hidden 
            hover:shadow-2xl transition duration-300 flex flex-col"
            style={{ animationDelay: `${index * 0.15}s` }}
          >

            {/* Image */}
            <div className="relative w-full h-52 overflow-hidden">
              <Image
                src={book.image_url}
                alt={book.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                className="object-cover group-hover:scale-105 transition duration-500"
              />

              {/* Gradient overlay only */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-grow">

              <h3 className="font-bold text-lg md:text-xl mb-1 line-clamp-1">
                {book.title}
              </h3>

              <p className="text-sm text-gray-600 mb-2">
                ✍️ By {book.author}
              </p>

              <p className="text-sm text-gray-500 line-clamp-2 mb-4">
                {book.description}
              </p>

              {/* Button */}
              <Link
                href={`/books/${book.id}`}
                className="mt-auto text-center bg-gradient-to-r from-blue-500 to-indigo-600 
                text-white py-2 rounded-full font-medium hover:opacity-90 transition"
              >
                View Details
              </Link>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}