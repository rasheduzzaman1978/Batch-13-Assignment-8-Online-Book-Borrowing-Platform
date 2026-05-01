"use client";

import { useParams, useRouter } from "next/navigation";
import books from "@/data/books.json";
import { useEffect } from "react";
import { Button, Card } from "@heroui/react";
import Image from "next/image";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";

export default function BookDetailsPage() {
  const { id } = useParams();
  const router = useRouter();

  const userData = authClient.useSession();
  const user = userData.data?.user;

  const book = books.find((b) => b.id === Number(id));

  // 🔐 Private Route
  useEffect(() => {
    if (!userData.isPending && !user) {
      toast.error("Please login to view this page 🔐");
      router.push(`/login?redirect=/books/${id}`);
    }
  }, [userData.isPending, user]);

  // ⏳ Loading
  if (userData.isPending) {
    return <p className="text-center mt-10">Loading...</p>;
  }

  if (!book) {
    return <p className="text-center mt-10">Book not found</p>;
  }

  // 📚 Borrow Logic
  const handleBorrow = () => {
    if (book.available_quantity <= 0) {
      toast.error("No copies available ❌");
      return;
    }

    toast.success("Book borrowed successfully 🎉");
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <Card className="p-6 grid md:grid-cols-2 gap-6">

        {/* 📷 Image */}
        <div className="relative w-full h-80">
          <Image
            src={book.image_url}
            alt={book.title}
            fill
            className="object-cover rounded"
          />
        </div>

        {/* 📄 Details */}
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

          {/* 📌 Borrow Button */}
          <Button
            color="primary"
            className="mt-6 w-full"
            disabled={book.available_quantity === 0}
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