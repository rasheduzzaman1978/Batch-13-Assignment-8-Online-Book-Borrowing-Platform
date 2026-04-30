"use client";

import Navbar from "@/components/Navbar";
import { useSession, signOut } from "next-auth/react";

export default function NavbarWrapper() {
  const { data: session } = useSession();

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/login" });
  };

  return (
    <Navbar
      user={session?.user}
      handleLogout={handleLogout}
    />
  );
}