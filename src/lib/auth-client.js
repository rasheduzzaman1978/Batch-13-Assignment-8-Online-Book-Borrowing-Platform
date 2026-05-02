import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  // baseURL: "https://batch-13-assignment-8-online-book-b.vercel.app"
  baseURL: "http://localhost:3000"
});