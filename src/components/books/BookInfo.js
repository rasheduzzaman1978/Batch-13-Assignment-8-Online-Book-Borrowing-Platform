"use client";

import { Button } from "@heroui/react";

export default function BookInfo({ book, onBorrow }) {
  return (
    <div>
      <h1 className="text-2xl font-bold">{book.title}</h1>

      <p className="text-gray-500 mt-1">By {book.author}</p>

      <p className="mt-4 text-sm text-justify">
        {book.description}
      </p>

      <p className="mt-3">
        <strong>Category:</strong> {book.category}
      </p>

      <p className="mt-2">
        <strong>Available:</strong> {book.available_quantity} copies left
      </p>

      <Button
        color="primary"
        className="mt-6 w-full"
        onClick={onBorrow}
        disabled={book.available_quantity === 0}
      >
        {book.available_quantity === 0
          ? "Out of Stock"
          : "Borrow This Book"}
      </Button>
    </div>
  );
}