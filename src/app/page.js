import Banner from "@/components/Banner";
import FeaturedBooks from "@/components/FeaturedBooks";
import Categories from "@/components/Categories";
import MembershipCTA from "@/components/MembershipCTA";
import Link from "next/link";

export default function Page() {
  return (
    <div>

      {/* 🔥 Banner */}
      <Banner />

      {/* ⭐ Why Choose Us */}
      <section className="py-16 px-4 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Why Choose Us? 🤔
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Easily browse, borrow, and manage your favorite books online.
          Fast, simple, and user-friendly experience.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">

  <div className="bg-white p-6 rounded-xl shadow 
    animate__animated animate__fadeInUp 
    hover:scale-105 transition duration-300">
    <h3 className="text-xl font-semibold mb-2">📚 Huge Collection</h3>
    <p className="text-gray-600">
      হাজারো বই থেকে সহজে খুঁজে নাও তোমার পছন্দের বই।
    </p>
  </div>

  <div className="bg-white p-6 rounded-xl shadow 
    animate__animated animate__fadeInUp animate__delay-1s
    hover:scale-105 transition duration-300">
    <h3 className="text-xl font-semibold mb-2">⚡ Easy Borrowing</h3>
    <p className="text-gray-600">
      কয়েক ক্লিকেই বই borrow করো কোনো ঝামেলা ছাড়া।
    </p>
  </div>

  <div className="bg-white p-6 rounded-xl shadow 
    animate__animated animate__fadeInUp animate__delay-2s
    hover:scale-105 transition duration-300">
    <h3 className="text-xl font-semibold mb-2">🔍 Smart Search</h3>
    <p className="text-gray-600">
      category ও search দিয়ে দ্রুত বই খুঁজে পাও।
    </p>
  </div>

</div>

        {/* CTA */}
        <div className="mt-10">
          <Link href="/books">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
              Explore Books
            </button>
          </Link>
        </div>
      </section>

      {/* 📚 Featured Books */}
      <FeaturedBooks />

      {/* 📂 Categories */}
      <Categories />

      {/* 🚀 Membership CTA */}
      <MembershipCTA />

    </div>
  );
}