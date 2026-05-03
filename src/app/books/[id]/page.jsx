"use client";

import { useParams, useRouter } from "next/navigation";
import books from "@/data/books.json";
import { Card } from "@heroui/react";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";

import BookImage from "@/components/books/BookImage";
import BookInfo from "@/components/books/BookInfo";
import BookNotFound from "@/components/books/BookNotFound";
import LoadingPage from "@/components/shared/LoadingPage";

export default function BookDetailsPage() {
  const router = useRouter();
  const params = useParams();

  // ✅ safer id parsing
  const id = params?.id ? parseInt(params.id, 10) : null;

  // 🔐 session
  const { data, isPending } = authClient.useSession();
  const user = data?.user;

  // 📚 find book (id valid হলে)
  const book = id ? books.find((b) => b.id === id) : null;

  // ⏳ loading
  if (isPending) {
    return <LoadingPage />;
  }

  // ❌ invalid বা book না থাকলে
  if (!book) {
    return <BookNotFound />;
  }

  // 📌 Borrow Logic
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

    // 👉 future: API call here
    toast.success("Book borrowed successfully 🎉");
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <Card className="p-6 grid md:grid-cols-2 gap-6">
        <BookImage image={book.image_url} title={book.title} />
        <BookInfo book={book} onBorrow={handleBorrow} />
      </Card>
    </div>
  );
}