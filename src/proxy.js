import { NextResponse } from "next/server";

export function proxy(request) {
  const { pathname } = request.nextUrl;

  // ✅ cookie check (flexible way)
  const token =
    request.cookies.get("better-auth.session_token") ||
    request.cookies.get("authjs.session-token") ||
    request.cookies.get("__Secure-authjs.session-token");

  // 🎯 match /books/:id only
  const isBookDetails = /^\/books\/[^/]+$/.test(pathname);

  // 🔒 protect profile + book details
  if (!token && (pathname.startsWith("/profile") || isBookDetails)) {
    return NextResponse.redirect(
      new URL(`/login?redirect=${pathname}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile", "/books/:path*"],
};