"use client";

import { useParams, useRouter } from "next/navigation";
import books from "@/data/books.json";
import { Button, Card } from "@heroui/react";
import Image from "next/image";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";

export default function BookDetailsPage() {
  const { id } = useParams();
  const router = useRouter();

  // 🔐 session
  const { data, isPending } = authClient.useSession();
  const user = data?.user;

  // 📚 find book
  const book = books.find((b) => b.id === Number(id));

  // ⏳ loading
  if (isPending) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  // ❌ book not found
  if (!book) {
    return <p className="text-center mt-10">Book not found</p>;
  }

  // 📌 Borrow Button Logic
  const handleBorrow = () => {
    // 🔐 extra safety (middleware already protects)
    if (!user) {
      toast.error("Please login to borrow this book 🔐");
      router.push(`/login?redirect=/books/${id}`);
      return;
    }

    // ❌ stock check
    if (book.available_quantity <= 0) {
      toast.error("No copies available ❌");
      return;
    }

    // ✅ success
    toast.success("Book borrowed successfully 🎉");
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <Card className="p-6 grid md:grid-cols-2 gap-6">

        {/* 📷 Left: Image */}
        <div className="relative w-full h-80">
          <Image
            src={book.image_url}
            alt={book.title}
            fill
            className="object-cover rounded"
            unoptimized
          />
        </div>

        {/* 📄 Right: Details */}
        <div>
          <h1 className="text-2xl font-bold">{book.title}</h1>

          <p className="text-gray-500 mt-1">
            By {book.author}
          </p>

          <p className="mt-4 text-sm text-justify">
            {book.description}
          </p>

          <p className="mt-3">
            <strong>Category:</strong> {book.category}
          </p>

          <p className="mt-2">
            <strong>Available:</strong>{" "}
            {book.available_quantity} copies left
          </p>

          {/* 📌 Action Button */}
          <Button
            color="primary"
            className="mt-6 w-full"
            onClick={handleBorrow}
          >
            {book.available_quantity === 0
              ? "Out of Stock"
              : "Borrow This Book"}
          </Button>
        </div>

      </Card>
    </div>
  );
}