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

          {/* Email */}
           <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rashedzaman1978@gmail.com"
              target="_blank"
              className="group flex items-center gap-3 text-gray-400 hover:text-white transition"
            >
              <MdEmail className="group-hover:scale-125 transition" />
              rashedzaman1978@gmail.com
            </a>

          {/* Phone */}
          <a
            href="tel:+8801716651946"
            className="text-gray-400 flex items-center gap-2 hover:text-white transition"
          >
            <MdPhone /> +8801716651946
          </a>

          {/* Location (optional: clickable Google Maps) */}
          <a
            href="https://www.google.com/maps/search/?api=1&query=Ullapara,Sirajganj,Bangladesh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 flex items-center gap-2 hover:text-white transition"
          >
            <MdLocationOn /> Ullapara, Sirajganj, Bangladesh
          </a>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>

          <div className="flex gap-3 flex-wrap">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Button className="flex items-center gap-2 bg-gray-800 hover:bg-blue-600 text-white rounded-full px-4 py-2">
                <FaFacebookF /> Facebook
              </Button>
            </a>

            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Button className="flex items-center gap-2 bg-gray-800 hover:bg-sky-500 text-white rounded-full px-4 py-2">
                <FaTwitter /> Twitter
              </Button>
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button className="flex items-center gap-2 bg-gray-800 hover:bg-blue-700 text-white rounded-full px-4 py-2">
                <FaLinkedinIn /> LinkedIn
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