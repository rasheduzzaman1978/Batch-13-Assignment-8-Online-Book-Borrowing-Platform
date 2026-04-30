"use client";

import Link from "next/link";

export default function MembershipCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center px-4">

      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Become a Member 🚀
      </h2>

      <p className="mb-6 text-lg max-w-xl mx-auto">
        Get access to unlimited book borrowing, exclusive discounts, and premium features.
      </p>

      <Link href="/register">
        <button className="px-8 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition">
          Join Now
        </button>
      </Link>

    </section>
  );
}