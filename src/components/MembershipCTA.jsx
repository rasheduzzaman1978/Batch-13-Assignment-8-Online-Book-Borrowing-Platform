"use client";

import Link from "next/link";

export default function MembershipCTA() {
  return (
    <section className="py-8 md:py-10 lg:py-16 px-4 bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 text-white text-center relative overflow-hidden">

      {/* 🌟 Background Glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-4xl mx-auto">

        {/* 🔥 Title */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4">
          Become a Member 🚀
        </h2>

        {/* 📝 Description */}
        <p className="mb-8 text-lg text-gray-200">
          Unlock unlimited book borrowing, exclusive deals, and premium reading features — all in one place.
        </p>

        {/* 🎯 CTA Button */}
        <Link href="/register">
          <button className="px-3 md:px-8 py-2 md:py-3 bg-white text-indigo-700 font-semibold rounded-full 
            shadow-lg hover:scale-105 hover:bg-gray-100 transition-all duration-300">
            Join Now
          </button>
        </Link>

        {/* ⭐ Extra Line */}
        <p className="mt-6 text-sm text-gray-300">
          Join thousands of readers growing with BookNest 📚
        </p>

      </div>

    </section>
  );
}