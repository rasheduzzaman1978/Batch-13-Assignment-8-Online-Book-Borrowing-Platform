"use client";

import { useState } from "react";
import { Input, Button, Card } from "@heroui/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    image: "",
  });

  const handleRegister = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/auth/sign-up/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      router.push("/login");
    } else {
      alert("Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      
      <Card className="w-full max-w-md p-8 shadow-lg rounded-2xl bg-white">

        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Create an Account
        </h2>

        <form onSubmit={handleRegister} className="space-y-4 flex flex-col">

          <Input
            placeholder="Enter your name"
            variant="bordered"
            radius="lg"
            required
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <Input
            placeholder="Photo URL"
            variant="bordered"
            radius="lg"
            onChange={(e) =>
              setForm({ ...form, image: e.target.value })
            }
          />

          <Input
            placeholder="Enter your email"
            type="email"
            variant="bordered"
            radius="lg"
            required
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <Input
            placeholder="Enter your password"
            type="password"
            variant="bordered"
            radius="lg"
            required
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg"
          >
            Register
          </Button>

        </form>

        <p className="text-center mt-5 text-sm text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>

      </Card>
    </div>
  );
}