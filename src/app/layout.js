import "./globals.css";
import "animate.css";

import { Poppins } from "next/font/google";

import Footer from "@/components/layout/Footer";
import NavbarWrapper from "@/components/layout/NavbarWrapper";
import BreakingNews from "@/components/home/BreakingNews";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Google Fonts
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  title: "Online-Book-Borrowing-Platform",
  description:
    "An online platform that allows users to browse, borrow, and manage books efficiently.",
  icons: {
    icon: [{ url: "/bookFavicon.png", type: "image/png+xml" }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" 
    data-theme="light"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-gray-50">
        
        <NavbarWrapper />
        <BreakingNews />

        <main className="flex-grow">
          {children}
        </main>

        <Footer />

        <ToastContainer position="top-center" autoClose={1500} theme="colored" />
         
      </body>
    </html>
  );
}