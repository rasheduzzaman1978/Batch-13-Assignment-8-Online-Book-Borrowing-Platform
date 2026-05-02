import { NextResponse } from "next/server";

export function proxy(request) {
  const { pathname } = request.nextUrl;

  const token = request.cookies.get("better-auth.session_token");

  // 🎯 Match only /books/:id
  const isBookDetails = /^\/books\/[^/]+$/.test(pathname);

  // 🔒 Protect profile + book details
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