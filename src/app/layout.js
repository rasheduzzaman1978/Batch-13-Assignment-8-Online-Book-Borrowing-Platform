import Footer from "@/components/Footer";
import "./globals.css";
import NavbarWrapper from "@/components/NavbarWrapper";
import BreakingNews from "@/components/BreakingNews";

export const metadata = {
  title: "Online-Book-Borrowing-Platform",
  description:
    "An online platform that allows users to browse, borrow, and manage books efficiently with a seamless digital experience.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">

        {/* ✅ Client wrapper */}
        <NavbarWrapper />

        <BreakingNews />

        <main className="flex-grow">{children}</main>

        <Footer />
      </body>
    </html>
  );
}