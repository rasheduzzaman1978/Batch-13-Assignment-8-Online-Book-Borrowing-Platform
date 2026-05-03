"use client";

import { useState } from "react";
import books from "@/data/books.json";
import Link from "next/link";
import Image from "next/image";
import { Input, Card, Button, Chip } from "@heroui/react";
import { FaSearch } from "react-icons/fa";
import EmptyState from "@/components/shared/EmptyState";

export default function AllBooksPage() {
  const [search, setSearch] = useState("");
  const [tempSearch, setTempSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", "Story", "Tech", "Science"];

  // 🔍 Filter
  const filteredBooks = books.filter((book) => {
    const matchSearch = book.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "All" || book.category === category;

    return matchSearch && matchCategory;
  });

  const handleSearch = () => {
    setSearch(tempSearch);
  };

  const categoryColors = {
    Story: "bg-purple-500 text-white",
    Tech: "bg-yellow-500 text-black",
    Science: "bg-green-500 text-white",
    Default: "bg-gray-500 text-white",
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 md:py-10">

      {/* 🔍 Search Box */}
      <div className="flex justify-end items-center gap-2 md:gap-3 mb-8">

        <div className="flex items-center gap-2 border rounded px-2">
          <FaSearch className="text-[10px] md:text-base text-gray-500" />

          <Input
            size="sm"
            placeholder="Search books by title..."
            value={tempSearch}
            onChange={(e) => setTempSearch(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
            className="flex-1 w-45 md:w-80 text-sm md:text-base outline-none"
          />
        </div>

        <Button
          color="primary"
          onClick={handleSearch}
          className="h-9 md:h-10 px-4 md:px-6"
        >
          Search
        </Button>
      </div>

      {/* 🧭 Layout */}
      <div className="grid md:grid-cols-4 gap-2 md:gap-6">

        {/* 🧭 Sidebar */}
        <div className="md:col-span-1">
          <h2 className="font-bold mb-4">Filter By Categories</h2>

          <div className="space-y-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`block w-full text-left text-sm md:text-base px-3 py-2 rounded ${
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
              <EmptyState
                title="No books found"
                subtitle="Try another search or category"
                icon="📚"
              />
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBooks.map((book) => (
                  <Card key={book.id} className="p-4 relative">

                    <div className="relative w-full h-40">
                      <Image
                        src={book.image_url}
                        alt={book.title}
                        fill
                        className="object-cover rounded"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>

                    <Chip
                      size="sm"
                      className={`absolute top-5 right-5 ${
                        categoryColors[book.category] || categoryColors.Default
                      }`}
                    >
                      {book.category}
                    </Chip>

                    <h3 className="mt-3 font-semibold text-justify">
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