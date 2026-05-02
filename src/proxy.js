import { NextResponse } from "next/server";

export function proxy(request) {
  const { pathname } = request.nextUrl;

  // 👉 তোমার auth cookie name check করো
  const token = request.cookies.get("better-auth.session_token");

  // 🔒 Profile protect
  if (!token && pathname.startsWith("/profile")) {
    return NextResponse.redirect(
      new URL(`/login?redirect=${pathname}`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profile"],
};