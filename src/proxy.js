import { NextResponse } from "next/server";
import { auth } from "./lib/auth";

export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  const { pathname } = request.nextUrl;

  // 🎯 Match: /books/:id (details page only)
  const isBookDetails = /^\/books\/[^/]+$/.test(pathname);

  // 🔐 যদি login না থাকে → login page
  if (!session && isBookDetails) {
    return NextResponse.redirect(
      new URL(`/login?redirect=${pathname}`, request.url)
    );
  }

  return NextResponse.next();
}

// ✅ সব books route check করবে, কিন্তু logic ভিতরে handle করছি
export const config = {
  matcher: ["/books/:path*"],
};