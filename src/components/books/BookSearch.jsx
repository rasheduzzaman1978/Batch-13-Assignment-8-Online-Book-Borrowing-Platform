"use client";

import { Input, Button } from "@heroui/react";
import { FaSearch } from "react-icons/fa";

export default function BookSearch({ tempSearch, setTempSearch, onSearch }) {
  return (
    <div className="flex justify-end items-center gap-2 md:gap-3 mb-8">
      
      <div className="flex items-center gap-2 border rounded px-2">
        <FaSearch className="text-[10px] md:text-base text-gray-500" />

        <Input
          size="sm"
          placeholder="Search books by title..."
          value={tempSearch}
          onChange={(e) => setTempSearch(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") onSearch();
          }}
          className="flex-1 w-45 md:w-80"
        />
      </div>

      <Button color="primary" onClick={onSearch}>
        Search
      </Button>
    </div>
  );
}