import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";

const client = new MongoClient(process.env.MONGODB_URI);
await client.connect(); // সংযোগ স্থাপন
const db = client.db("onlinebook");

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client
  }),
  
  emailAndPassword: {
    enabled: true,
  },

  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      redirectURI: `${process.env.BETTER_AUTH_URL}/api/auth/callback/google`,
    },
  },
});

// অ্যাপ্লিকেশন বন্ধ হওয়ার সময় সংযোগ বন্ধ করুন (optional)
process.on('SIGTERM', async () => {
  await client.close();
});