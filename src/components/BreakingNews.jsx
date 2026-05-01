"use client";

import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

export default function BreakingNews() {
  const [titles, setTitles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("../data/books.json")
      .then((res) => res.json())
      .then((data) => {
        const bookTitles = data.slice(0, 6);
        setTitles(bookTitles);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="flex items-center gap-4 bg-gray-900 text-white py-2 px-4">

      {/* Label */}
      <span className="bg-red-500 px-3 py-1 rounded text-sm font-semibold whitespace-nowrap">
        New Arrivals
      </span>

      {/* Marquee */}
      <div className="flex-1 overflow-hidden">
        <Marquee speed={50} gradient={false} pauseOnHover>

          {loading ? (
            <span className="mx-6">Loading books...</span>
          ) : (
            <>
              {/* 📚 Titles */}
              {titles.map((book) => (
                <span key={book.id} className="mx-6 hover:underline cursor-pointer">
                  📚 {book.title}
                </span>
              ))}

              {/* 🔥 Extra message */}
              <span className="mx-6 text-yellow-400 font-semibold">
                🔥 Special Discount on Memberships | Join Now & Save 30%
              </span>
            </>
          )}

        </Marquee>
      </div>

    </div>
  );
}