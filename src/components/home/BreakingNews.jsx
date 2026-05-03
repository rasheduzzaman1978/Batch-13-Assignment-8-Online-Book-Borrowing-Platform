"use client";

import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import books from "@/data/books.json";

export default function BreakingNews() {
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    const bookTitles = books.slice(0, 6);

    // 🔥 Duplicate data for smooth loop
    setTitles([...bookTitles, ...bookTitles, ...bookTitles]);
  }, []);

  return (
    <div className="flex items-center gap-4 bg-gray-900 text-white py-2 px-4">

      {/* Label */}
      <span className="bg-red-500 px-3 py-1 rounded text-sm font-semibold whitespace-nowrap">
        New Arrivals
      </span>

      {/* Marquee */}
      <div className="flex-1 overflow-hidden">
        <Marquee speed={60} gradient={false} pauseOnHover>

          {/* 📚 Titles */}
          {titles.map((book, index) => (
            <span
              key={index}
              className="mx-6 hover:underline cursor-pointer whitespace-nowrap"
            >
              📚 {book.title}
            </span>
          ))}

          {/* 🔥 Extra message */}
          <span className="mx-6 text-yellow-400 font-semibold whitespace-nowrap">
            🔥 Special Discount on Memberships | Join Now & Save 30%
          </span>

        </Marquee>
      </div>

    </div>
  );
}