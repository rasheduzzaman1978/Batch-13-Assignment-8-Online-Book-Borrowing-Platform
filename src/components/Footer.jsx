"use client";
import Link from "next/link";
import { Button } from "@heroui/react";
import { FaBook, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

        {/* Logo + Description */}
        <div>
          <Link 
            href="/" 
            className="flex items-center gap-2 text-2xl font-bold mb-3 hover:text-blue-400 transition"
          >
            <FaBook /> Online Library
          </Link>

          <p className="text-gray-400">
            Your digital library to explore, discover, and borrow books anytime.
          </p>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>

          <p className="text-gray-400 flex items-center gap-2">
            <MdEmail /> rashedzaman1978@gmail.com
          </p>

          <p className="text-gray-400 flex items-center gap-2">
            <MdPhone /> +880 1716651946
          </p>

          <p className="text-gray-400 flex items-center gap-2">
            <MdLocationOn /> Ullapara, Sirajganj, Bangladesh
          </p>
        </div>

        {/* Social Media */}
       <div>
  <h3 className="text-xl font-semibold mb-3">Follow Us</h3>

  <div className="flex gap-3">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <Button
        size="sm"
        className="flex items-center gap-2 bg-gray-800 hover:bg-blue-600 text-white rounded-full px-4 py-2 transition-all duration-300 cursor-pointer"
      >
        <FaFacebookF className="text-lg" />
        Facebook
      </Button>
    </a>

    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
      <Button
        size="sm"
        className="flex items-center gap-2 bg-gray-800 hover:bg-sky-500 text-white rounded-full px-4 py-2 transition-all duration-300 cursor-pointer"
      >
        <FaTwitter className="text-lg" />
        Twitter
      </Button>
    </a>

    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
      <Button
        size="sm"
        className="flex items-center gap-2 bg-gray-800 hover:bg-blue-700 text-white rounded-full px-4 py-2 transition-all duration-300 cursor-pointer"
      >
        <FaLinkedinIn className="text-lg" />
        LinkedIn
      </Button>
    </a>
  </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} Online Library. All rights reserved.
      </div>
    </footer>
  );
}