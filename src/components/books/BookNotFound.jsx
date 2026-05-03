"use client";

import { useRouter } from "next/navigation";

export default function BookNotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <div className="text-6xl mb-4">📚</div>

      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
        Book Not Found
      </h2>

      <p className="text-gray-500 mb-6 max-w-md">
        Sorry, we couldn’t find the book you’re looking for.
      </p>

      <button
        onClick={() => router.push("/books")}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Browse Books
      </button>
    </div>
  );
}