import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: 
    process.env.NODE_ENV === "production"
      ? "https://batch-13-assignment-8-online-book-b.vercel.app"
      : "http://localhost:3000",
});