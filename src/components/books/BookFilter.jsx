"use client";

export default function BookFilter({ categories, category, setCategory }) {
  return (
    <div>
      <h2 className="font-bold mb-4">Filter By Categories</h2>

      <div className="space-y-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`block w-full text-left px-3 py-2 rounded ${
              category === cat
                ? "bg-blue-600 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}