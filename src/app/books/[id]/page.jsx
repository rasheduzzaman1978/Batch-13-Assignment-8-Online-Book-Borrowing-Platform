"use client";

import { useParams, useRouter } from "next/navigation";
import books from "@/data/books.json";
import { Card, Chip, Button } from "@heroui/react";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";

import BookNotFound from "@/components/books/BookNotFound";
import LoadingPage from "@/components/shared/LoadingPage";
import Image from "next/image";

export default function BookDetailsPage() {
  const router = useRouter();
  const params = useParams();

  const id = params?.id ? parseInt(params.id, 10) : null;

  const { data, isPending } = authClient.useSession();
  const user = data?.user;

  const book = id ? books.find((b) => b.id === id) : null;

  if (isPending) {
    return <LoadingPage />;
  }

  if (!book) {
    return <BookNotFound />;
  }

  const handleBorrow = () => {
    if (!user) {
      toast.error("Please login to borrow this book 🔐");
      router.push(`/login?redirect=/books/${id}`);
      return;
    }

    if (book.available_quantity <= 0) {
      toast.error("No copies available ❌");
      return;
    }

    toast.success("Book borrowed successfully 🎉");
  };

  const isAvailable = book.available_quantity > 0;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 py-10 px-4">

      <div className="max-w-6xl mx-auto">

        {/* Card */}
        <Card className="p-6 md:p-10 rounded-3xl shadow-xl bg-white/80 backdrop-blur-md border border-gray-200">

          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* 📷 Image Section */}
            <div className="relative w-full h-[300px] md:h-[350px] lg:h-[450px] rounded-2xl overflow-hidden group">
              <Image
                src={book.image_url}
                alt={book.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                className="object-cover group-hover:scale-105 transition duration-500"
              />

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>

            {/* 📖 Info Section */}
            <div className="flex flex-col">

              {/* Category */}
              <Chip
                size="sm"
                className="w-fit mb-3 bg-indigo-600 text-white"
              >
                {book.category}
              </Chip>

              {/* Title */}
              <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2">
                {book.title}
              </h1>

              {/* Author */}
              <p className="text-gray-600 mb-4 text-lg">
                ✍️ By {book.author}
              </p>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-6">
                {book.description}
              </p>

              {/* Availability */}
              <div className="mb-6">
                {isAvailable ? (
                  <span className="text-green-600 font-medium">
                    ✅ Available ({book.available_quantity} copies left)
                  </span>
                ) : (
                  <span className="text-red-500 font-medium">
                    ❌ Out of stock
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">

                <Button
                  onClick={handleBorrow}
                  disabled={!isAvailable}
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6"
                >
                  Borrow This Book
                </Button>

                <Button
                  variant="bordered"
                  onClick={() => router.back()}
                >
                  ← Go Back
                </Button>

              </div>

            </div>

          </div>

        </Card>

      </div>
    </div>
  );
}