"use client";

import Navbar from "@/components/layout/Navbar";
import { createAuthClient } from "better-auth/react";

const authClient = createAuthClient();

export default function NavbarWrapper() {
  const session = authClient.useSession();

  const handleLogout = async () => {
    await authClient.signOut();
  };

  return (
    <Navbar
      user={session?.data?.user}
      handleLogout={handleLogout}
    />
  );
}