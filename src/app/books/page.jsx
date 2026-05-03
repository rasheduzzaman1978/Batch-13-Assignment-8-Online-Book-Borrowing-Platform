"use client";

import { useState } from "react";
import books from "@/data/books.json";
import Link from "next/link";
import Image from "next/image";
import { Card, Button, Chip } from "@heroui/react";

import BookSearch from "@/components/books/BookSearch";
import BookFilter from "@/components/books/BookFilter";
import EmptyState from "@/components/shared/EmptyState";

export default function AllBooksPage() {
  const [search, setSearch] = useState("");
  const [tempSearch, setTempSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", "Story", "Tech", "Science"];

  // 🔍 Filter Logic
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
    Tech: "bg-yellow-400 text-black",
    Science: "bg-green-500 text-white",
    Default: "bg-gray-500 text-white",
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 md:py-10">

      {/* 🔍 Search */}
      <div className="mb-6">
        <BookSearch
          tempSearch={tempSearch}
          setTempSearch={setTempSearch}
          onSearch={handleSearch}
        />
      </div>

      {/* 🧭 Layout */}
      <div className="grid md:grid-cols-4 gap-6">

        {/* 🧭 Sidebar */}
        <div className="md:col-span-1">
          <div className="sticky top-24 bg-white/70 backdrop-blur-md p-4 rounded-2xl shadow-md border border-gray-200">
            
            <BookFilter
              categories={categories}
              category={category}
              setCategory={setCategory}
            />
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
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">

              {filteredBooks.map((book) => (
                <Card
                  key={book.id}
                  className="group p-0 overflow-hidden rounded-2xl border border-gray-200 shadow-sm 
                  hover:shadow-xl transition duration-300 bg-white/80 backdrop-blur-md"
                >

                  {/* Image */}
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      src={book.image_url}
                      alt={book.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                      className="object-cover group-hover:scale-105 transition duration-500"
                    />

                    {/* Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                    {/* Category */}
                    <Chip
                      size="sm"
                      className={`absolute top-3 right-3 ${
                        categoryColors[book.category] || categoryColors.Default
                      }`}
                    >
                      {book.category}
                    </Chip>
                  </div>

                  {/* Content */}
                  <div className="p-4 flex flex-col">

                    <h3 className="font-semibold text-lg mb-1 line-clamp-1">
                      {book.title}
                    </h3>

                    <p className="text-sm text-gray-500 mb-3">
                      ✍️ {book.author}
                    </p>

                    {/* Button */}
                    <Link href={`/books/${book.id}`}>
                      <Button
                        size="sm"
                        className="w-full mt-auto bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
                      >
                        View Details
                      </Button>
                    </Link>

                  </div>
                </Card>
              ))}

            </div>
          )}
        </div>
      </div>
    </div>
  );
}