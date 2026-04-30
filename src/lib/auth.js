import { betterAuth } from "better-auth";

export const auth = betterAuth({
  providers: [
    {
      id: "email-password",
    },
    {
      id: "google",
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
  ],
});