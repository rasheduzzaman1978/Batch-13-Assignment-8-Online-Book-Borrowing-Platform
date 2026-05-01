"use client";

import { UpdateUserModal } from "@/components/UpdateUserModal";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ProfilePage() {
  const userData = authClient.useSession();
  const user = userData.data?.user;
  const router = useRouter();

  // 🔐 Redirect if not logged in
  useEffect(() => {
    if (!userData.isPending && !user) {
      router.push("/login");
    }
  }, [userData.isPending, user]);

  // ⏳ Loading state
  if (userData.isPending) {
    return (
      <p className="text-center mt-10 text-gray-500">
        Loading profile...
      </p>
    );
  }

  // ❌ If no user
  if (!user) {
    return null;
  }

  return (
    <div className="flex justify-center items-center min-h-[70vh] px-4">
      <Card className="w-full max-w-md p-6 flex flex-col items-center gap-4 shadow-lg rounded-xl">

        {/* 🧑 Avatar */}
        <Avatar
          src={user.image || ""}
          name={user.name || "User"}
          className="w-24 h-24 text-large"
        />

        {/* 👤 User Info */}
        <h2 className="text-xl font-bold text-center">
          {user.name || "Unknown User"}
        </h2>

        <p className="text-gray-500 text-center">
          {user.email}
        </p>

        {/* ✏️ Update Button */}
        <UpdateUserModal />

      </Card>
    </div>
  );
}