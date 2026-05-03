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
    Tech: "bg-yellow-500 text-black",
    Science: "bg-green-500 text-white",
    Default: "bg-gray-500 text-white",
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-6 md:py-10">

      {/* 🔍 Search */}
      <BookSearch
        tempSearch={tempSearch}
        setTempSearch={setTempSearch}
        onSearch={handleSearch}
      />

      {/* 🧭 Layout */}
      <div className="grid md:grid-cols-4 gap-2 md:gap-6">

        {/* 🧭 Sidebar Filter */}
        <div className="md:col-span-1">
          <BookFilter
            categories={categories}
            category={category}
            setCategory={setCategory}
          />
        </div>

        {/* 📚 Books */}
        <div className="md:col-span-3 flex items-center justify-center">

          {filteredBooks.length === 0 ? (
            <EmptyState
              title="No books found"
              subtitle="Try another search or category"
              icon="📚"
            />
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
              {filteredBooks.map((book) => (
                <Card key={book.id} className="p-4 relative">

                  {/* Image */}
                  <div className="relative w-full h-40">
                    <Image
                      src={book.image_url}
                      alt={book.title}
                      fill
                      className="object-cover rounded"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>

                  {/* Category */}
                  <Chip
                    size="sm"
                    className={`absolute top-5 right-5 ${
                      categoryColors[book.category] || categoryColors.Default
                    }`}
                  >
                    {book.category}
                  </Chip>

                  {/* Title */}
                  <h3 className="mt-3 font-semibold text-justify">
                    {book.title}
                  </h3>

                  {/* Button */}
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