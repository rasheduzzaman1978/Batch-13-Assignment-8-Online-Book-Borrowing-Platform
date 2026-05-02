import { NextResponse } from "next/server";

export function proxy(request) {
  const { pathname } = request.nextUrl;

  // 🔑 cookie (production + local দুটোই কভার)
  const token =
    request.cookies.get("better-auth.session_token")?.value ||
    request.cookies.get("authjs.session-token")?.value ||
    request.cookies.get("__Secure-authjs.session-token")?.value;

  // 🎯 match ONLY /books/:id (যেকোন id)
  const isBookDetails = /^\/books\/[^/]+$/.test(pathname);

  // 🔒 protect profile + all book details
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