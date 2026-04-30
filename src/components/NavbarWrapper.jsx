"use client";

import Navbar from "@/components/Navbar";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

export default function NavbarWrapper() {
  const { user } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
  };

  return <Navbar user={user} handleLogout={handleLogout} />;
}