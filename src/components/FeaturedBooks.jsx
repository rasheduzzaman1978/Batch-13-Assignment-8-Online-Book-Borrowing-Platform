"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import booksData from "@/data/books.json";

export default function FeaturedBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(booksData.slice(0, 4));
  }, []);

  return (
    <section className="py-16 bg-gray-100 px-4">

      <h2 className="text-3xl font-bold text-center mb-10">
        Featured Books 📚
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">

        {books.map((book, index) => (
          <div
            key={book.id}
            className="bg-white rounded-xl shadow-md overflow-hidden 
            hover:shadow-xl hover:scale-105 transition duration-300
            animate__animated animate__fadeInUp"
            style={{ animationDelay: `${index * 0.2}s` }}
          >

            <div className="relative w-full h-48">
              <Image
                src={book.image_url}
                alt={book.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1 line-clamp-1">
                {book.title}
              </h3>

              <p className="text-sm text-gray-600 mb-2">
                by {book.author}
              </p>

              <p className="text-sm text-gray-500 line-clamp-2 mb-4">
                {book.description}
              </p>

              <Link href={`/books/${book.id}`}>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                  View Details
                </button>
              </Link>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}