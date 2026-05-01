"use client";

import { useState } from "react";
import books from "@/data/books.json";
import Link from "next/link";
import Image from "next/image";
import { Input, Card, Button } from "@heroui/react";

export default function AllBooksPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", "Story", "Tech", "Science"];

  const filteredBooks = books.filter((book) => {
    const matchSearch = book.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || book.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      {/* 🔍 Search */}
      <Input
        size="lg"
        placeholder="Search books..."
        className="mb-8"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid md:grid-cols-4 gap-6">

        {/* 🧭 Sidebar */}
        <div className="md:col-span-1">
          <h2 className="font-bold mb-4">Categories</h2>

          <div className="space-y-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`block w-full text-left px-3 py-2 rounded ${
                  category === cat
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 📚 Books */}
        <div className="md:col-span-3">
          {filteredBooks.length === 0 ? (
            <p className="text-gray-500">No books found 😢</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBooks.map((book) => (
                <Card key={book.id} className="p-4">

                  <div className="relative w-full h-40">
                    <Image
                      src={book.image_url}
                      alt={book.title}
                      fill
                      className="object-cover rounded"
                    />
                  </div>

                  <h3 className="mt-3 font-semibold">
                    {book.title}
                  </h3>

                  <Link href={`/books/${book.id}`}>
                    <Button size="sm" className="mt-3 w-full">
                      Details
                    </Button>
                  </Link>

                </Card>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}