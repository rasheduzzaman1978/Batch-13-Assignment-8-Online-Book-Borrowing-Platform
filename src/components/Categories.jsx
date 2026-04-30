"use client";

import Link from "next/link";

const categories = [
  { name: "Story", color: "bg-blue-500" },
  { name: "Tech", color: "bg-green-500" },
  { name: "Science", color: "bg-purple-500" },
];

export default function Categories() {
  return (
    <section className="py-16 bg-white text-center">

      <h2 className="text-3xl font-bold mb-10">
        Browse by Category 📂
      </h2>

      <div className="flex flex-wrap justify-center gap-6">

        {categories.map((cat) => (
          <Link key={cat.name} href={`/books?category=${cat.name}`}>
            <div
              className={`${cat.color} text-white px-10 py-6 rounded-xl shadow-md hover:scale-105 transition cursor-pointer`}
            >
              <h3 className="text-xl font-semibold">
                {cat.name}
              </h3>
            </div>
          </Link>
        ))}

      </div>

    </section>
  );
}