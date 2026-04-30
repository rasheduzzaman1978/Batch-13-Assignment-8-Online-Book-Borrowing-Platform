"use client";

import { useEffect, useState } from "react";
import { Input, Button, Card } from "@heroui/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

export default function LoginPage() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/auth/sign-in/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      router.push("/");
    } else {
      alert("Login failed");
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = "/api/auth/sign-in/google";
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      
      <Card className="w-full max-w-md p-8 shadow-lg rounded-2xl bg-white">
        
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Welcome Back 👋
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <Input
            label="Email"
            type="email"
            variant="bordered"
            radius="lg"
            required
            className="w-full"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <Input
            label="Password"
            type="password"
            variant="bordered"
            radius="lg"
            required
            className="w-full"
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg"
          >
            Login
          </Button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-5">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="text-sm text-gray-500">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <Button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center gap-2 border rounded-lg hover:bg-gray-50"
        >
          <FaGoogle />
          Continue with Google
        </Button>

        <p className="text-center mt-5 text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link href="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>

      </Card>
    </div>
  );
}