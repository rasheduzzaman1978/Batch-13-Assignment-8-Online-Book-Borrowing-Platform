import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";
import BreakingNews from "@/components/BreakingNews";
import FeaturedBooks from "@/components/FeaturedBooks";

export const metadata = {
  title: "Online-Book-Borrowing-Platform",
  description:
    "An online platform that allows users to browse, borrow, and manage books efficiently with a seamless digital experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">

        <Navbar />
        <BreakingNews />

        <main className="flex-grow">
          {children}
        </main>
        <FeaturedBooks />
        <Footer />

      </body>
    </html>
  );
}