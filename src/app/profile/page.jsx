"use client";

import UpdateUserModal from "@/components/UpdateUserModal";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";
import { redirect } from "next/navigation";

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  if (isPending) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <p className="animate-pulse font-medium text-gray-500">Loading...</p>
      </div>
    );
  }

  if (!user) {
    redirect('/signin');
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      {/* মূল কার্ড ডিজাইন */}
      <Card className="w-full max-w-[420px] border border-gray-100 shadow-sm bg-white rounded-[2.5rem] p-10 overflow-visible">
        <div className="flex flex-col items-center">
          
          {/* প্রোফাইল ইমেজ */}
          <div className="mb-4">
            <Avatar size="sm">
                <Avatar.Image
                  alt="John Doe"
                  src={user?.image}
                  name={user?.name}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                </Avatar>
          </div>

          {/* ইউজার ইনফরমেশন */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">
              {user?.name || "R"} 
            </h1>
            <p className="text-gray-500 text-base">
              {user?.email}
            </p>
          </div>

          {/* আপডেট মোডাল কম্পোনেন্ট */}
          <div className="w-full flex justify-center">
            <UpdateUserModal user={user} />
          </div>

        </div>
      </Card>
    </div>
  );
};

export default ProfilePage;