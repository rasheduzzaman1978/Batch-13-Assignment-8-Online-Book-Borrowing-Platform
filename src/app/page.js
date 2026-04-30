import Banner from "@/components/Banner";
import Link from "next/link";

export default function Page() {
  return (
    <div>

      {/* 🔥 Banner */}
      <Banner />

      {/* 📚 Content Section */}
      <section className="py-16 px-4 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Why Choose Us?
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          Easily browse, borrow, and manage your favorite books online.
          Fast, simple, and user-friendly experience.
        </p>

        <Link href="/books">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
            Explore Books
          </button>
        </Link>
      </section>

    </div>
  );
}