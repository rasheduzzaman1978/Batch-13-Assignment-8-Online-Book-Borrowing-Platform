"use client";

import { useState } from "react";
import books from "@/data/books.json";
import Link from "next/link";
import Image from "next/image";
import { Input, Card, Button } from "@heroui/react";

export default function AllBooksPage() {
  const [search, setSearch] = useState("");

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      {/* 🔍 Search */}
      <Input
        size="lg"
        placeholder="Search books by title..."
        className="mb-8"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* 📚 Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredBooks.map((book) => (
          <Card key={book.id} className="p-4 hover:shadow-lg transition">

            {/* 📷 Image */}
            <div className="relative w-full h-48">
              <Image
                src={book.image_url}
                alt={book.title}
                fill
                className="object-cover rounded"
              />
            </div>

            {/* 📄 Title */}
            <h3 className="mt-3 font-semibold">{book.title}</h3>

            {/* 🔗 Button */}
            <Link href={`/books/${book.id}`}>
              <Button size="sm" className="mt-3 w-full">
                Details
              </Button>
            </Link>

          </Card>
        ))}
      </div>
    </div>
  );
}