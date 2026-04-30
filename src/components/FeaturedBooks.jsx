"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function FeaturedBooks() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/books.json")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.slice(0, 4)); // top 4 books
      });
  }, []);

  return (
    <section className="py-16 bg-gray-100 px-4">

      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-10">
        Featured Books 📚
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">

        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >

            {/* Image */}
            <img
              src={book.image_url}
              alt={book.title}
              className="w-full h-48 object-cover"
            />

            {/* Content */}
            <div className="p-4">

              <h3 className="font-semibold text-lg mb-1">
                {book.title}
              </h3>

              <p className="text-sm text-gray-600 mb-2">
                by {book.author}
              </p>

              <p className="text-sm text-gray-500 line-clamp-2 mb-4">
                {book.description}
              </p>

              {/* Button */}
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